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
  const [hasCategory, setHasCategory] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: posts, isLoading: isLoadingPost } = useQuery(
    ["post-list"],
    getAllPosts
  );
  const { data: categories, isLoading: isLoadingCategory } = useQuery(
    ["get-categories"],
    getCategories
  );

  useEffect(() => {}, []);

  const categoryHandler = (categoryId) => {
    setSearchParams({ categoryId });
    setFilteredPosts(filterPostByCategory(posts, categoryId));
    setHasCategory(true);
  };

  return (
    <>
      {isLoadingCategory || isLoadingPost ? (
        <Loader />
      ) : (
        <div style={{ display: "flex" }}>
          <Sidebar categories={categories} categoryHandler={categoryHandler} />
          <Main posts={hasCategory ? filteredPosts : posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
