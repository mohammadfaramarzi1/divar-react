import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import Loader from "../modules/Loader";
import { getAllPosts } from "services/user";
import { sp } from "utils/numbers";

import styles from "./PostDetail.module.css"


function PostDetail() {
  const { data, isLoading } = useQuery(["post-list"], getAllPosts);

  const { id } = useParams();

  const mainPost = data?.data.posts.find((post) => post._id === id);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  console.log("MainPost =>", mainPost);

  return (
    <>
      {isLoading || !mainPost ? (
        <Loader />
      ) : (
        <div className={styles.post}>
          <h2>{mainPost.options.title}</h2>
          <span>شهر: {mainPost.options.city}</span>
          <p>{mainPost.options.content || mainPost.content}</p>
          <img src={`${BASE_URL}${mainPost.images[0]}`} alt="" />
          <h3>قیمت: {sp(mainPost.amount)} تومان</h3>
        </div>
      )}
    </>
  );
}

export default PostDetail;
