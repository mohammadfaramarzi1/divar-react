import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";
import Loader from "components/modules/Loader";
import { getAllPosts } from "services/user";
import { getCategories } from "services/admin";
import filterPostByCategory from "src/utils/category";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: posts, isLoading: isLoadingPost } = useQuery(
    ["post-list"],
    getAllPosts
  );
  const { data: categories, isLoading: isLoadingCategory } = useQuery(
    ["get-categories"],
    getCategories
  );

  let filteredPosts = posts;

  const categoryHandler = (categoryId) => {
    setSearchParams({ categoryId });
    filteredPosts = filterPostByCategory(posts, categoryId);
    console.log("FilterdPosts", fiteredPosts);
  };

  return (
    <>
      {isLoadingCategory || isLoadingPost ? (
        <Loader />
      ) : (
        <div style={{ display: "flex" }}>
          <Sidebar categories={categories} categoryHandler={categoryHandler} />
          <Main posts={filteredPosts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
