import { useQuery } from "@tanstack/react-query";

import { getMyPosts } from "services/user";

import styles from "./PostList.module.css";

function PostList() {
//   const { data, isLoading, error } = useQuery(["my-post-list"], getMyPosts);

//   console.log({data, isLoading, error})

  return <div>
    <h3>آگهی های شما</h3>

  </div>;
}

export default PostList;
