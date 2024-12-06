import { Link } from "react-router-dom";

import { sp } from "utils/numbers";

import styles from "./Main.module.css";

function Main({ posts }) {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const postsAccess = posts.data ? posts.data.posts : posts;

  if (!postsAccess.length)
    return (
      <p className={styles.nopost}>هیچ پستی برای این دسته بندی وجود ندارد.</p>
    );

  return (
    <div className={styles.container}>
      {postsAccess.map((post) => (
        <Link to={`/post/${post._id}`} key={post._id}>
          <div className={styles.card}>
            <div className={styles.info}>
              <p>{post.options.title}</p>
              <div>
                <p>{sp(post.amount)} تومان</p>
                <span>{post.options.city}</span>
              </div>
            </div>
            <img src={`${BASE_URL}${post.images[0]}`} alt="" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Main;
