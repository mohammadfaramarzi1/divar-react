import { useQuery } from "@tanstack/react-query";

import Loader from "../modules/Loader";
import { getMyPosts } from "services/user";

import styles from "./PostList.module.css";

function PostList() {
  const { data, isLoading, error } = useQuery(["my-post-list"], getMyPosts);

  console.log({data, isLoading, error})

  return <div>
    {
        isLoading ? <Loader /> : (
            <>
                <h3>آگهی های شما</h3>
                {
                    data.data.posts.map(post => (
                        <div key={post._id}>
                            <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} alt="post" />
                            <div>
                                <p>{post.options.title}</p>
                                <span>{post.options.content}</span>
                            </div>
                            <div>
                                <p>{post.createdAt}</p>
                                <span>{post.amount} تومان</span>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
  </div>;
}

export default PostList;
