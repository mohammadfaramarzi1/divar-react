import { useSearchParams } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar({ categories }) {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log({ searchParams, setSearchParams });

  const categoryHandler = (categoryId) => {
    setSearchParams({ categoryId });
  };

  return (
    <div className={styles.sidebar}>
      <h4>دسته بندی ها</h4>
      <ul>
        {categories.data.map((category) => (
          <li key={category._id} onClick={() => categoryHandler(category._id)}>
            <img src={`${category.icon}.svg`} alt={category.name} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
