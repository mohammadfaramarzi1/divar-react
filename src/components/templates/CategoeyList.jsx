import { useQuery } from "@tanstack/react-query";

import Loader from "../modules/Loader";
import { getCategories } from "services/admin";

import styles from "./CategoryList.module.css";

function CategoeyList() {
  const { data, isLoading, error } = useQuery(
    ["get-categories"],
    getCategories
  );
  console.log({ data, isLoading, error });

  return <div className={styles.list}>
    {
        isLoading ? <Loader /> : 
            data.data.map(category => (
                <div key={category._id}>
                    <img src={`${category.icon}.svg`} alt="icon" />
                    <h5>{category.name}</h5>
                    <button>حذف دسته بندی</button>
                    <p>اسلاگ: {category.slug}</p>
                </div>
            ))
        
    }
  </div>;
}

export default CategoeyList;
