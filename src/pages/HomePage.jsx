import { useQuery } from "@tanstack/react-query";
import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";

function HomePage() {

  const {data, isLoading} = useQuery(["post-list"], )

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default HomePage;
