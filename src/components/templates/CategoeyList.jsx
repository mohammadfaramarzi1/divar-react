import { useMutation, useQuery } from "@tanstack/react-query";

import Loader from "../modules/Loader";
import { deleteCategory, getCategories } from "services/admin";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import styles from "./CategoryList.module.css";

function CategoeyList() {
  const { data, isLoading, error, refetch } = useQuery(
    ["get-categories"],
    getCategories
  );
  console.log({ data, isLoading, error });

  const { mutate } = useMutation(deleteCategory);

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((category) => (
          <div key={category._id}>
            <img src={`${category.icon}.svg`} alt="icon" />
            <h5>{category.name}</h5>
            <button
              onClick={() => {
                mutate(category._id);
                toast("دسته بندی با موفقیت حذف شد.", {
                  position: "top-right",
                  type: "success",
                });
                refetch();
              }}
            >
              حذف دسته بندی
            </button>
            <p>اسلاگ: {category.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoeyList;
