import { useQuery } from "@tanstack/react-query";

import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";
import Loader from "components/modules/Loader";
import { getAllPosts } from "services/user";


function HomePage() {
  const { data, isLoading } = useQuery(["post-list"], getAllPosts);

  console.log(data);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Main posts={data} />
        </div>
      )}
    </>
  );
}

export default HomePage;
