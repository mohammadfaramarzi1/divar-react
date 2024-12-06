import { Link } from "react-router-dom";

import { sp } from "utils/numbers";

import styles from "./Main.module.css";

function Main({ posts }) {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  console.log({ posts });
  return (
    <div className={styles.container}>
      {posts.data.posts.map((post) => (
        <Link>
          <div key={post._id} className={styles.card}>
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
