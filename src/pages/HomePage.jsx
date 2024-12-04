import { useQuery } from "@tanstack/react-query";

import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";
import Loader from "components/modules/Loader";
import { getAllPosts } from "services/user";
import { getCategories } from "services/admin";

function HomePage() {
  const { data: posts, isLoading: isLoadingPost } = useQuery(
    ["post-list"],
    getAllPosts
  );
  const { data: categories, isLoading: isLoadingCategory } = useQuery(
    ["get-categories"],
    getCategories
  );

  return (
    <>
      {isLoadingCategory || isLoadingPost ? (
        <Loader />
      ) : (
        <div style={{ display: "flex" }}>
          <Sidebar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
