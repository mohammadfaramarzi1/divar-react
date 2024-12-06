import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";
import Loader from "components/modules/Loader";
import { getAllPosts } from "services/user";
import { getCategories } from "services/admin";
import filterPostByCategory from "utils/category";

function HomePage() {
  const { data: posts, isLoading: isLoadingPost } = useQuery(
    ["post-list"],
    getAllPosts
  );

  const { data: categories, isLoading: isLoadingCategory } = useQuery(
    ["get-categories"],
    getCategories
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [query, setQuery] = useState({});

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  useEffect(() => {
    let filterPosts = filterPostByCategory(posts, query.category);
    console.log(filterPosts);
    setFilteredPosts(filterPosts);
  }, [query]);

  const categoryHandler = (categoryId) => {
    setQuery({ category: categoryId });
    setSearchParams({ categoryId });
  };

  return (
    <>
      {isLoadingCategory || isLoadingPost ? (
        <Loader />
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Sidebar categories={categories} categoryHandler={categoryHandler} />
          <Main posts={filteredPosts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
