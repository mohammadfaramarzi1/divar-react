import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";

import { addCategory } from "services/admin";

import "react-toastify/dist/ReactToastify.css";
import styles from "components/templates/CategoryForm.module.css";

function CategoryForm() {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    icon: "",
  });

  const { mutate, isLoading, error, data } = useMutation(addCategory);
  console.log({ data, isLoading, error });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!form.name || !form.slug || !form.icon) {
      return toast(" تمامی فیلد ها را پر کنید!", {
        position: "top-right",
        type: "warning",
      });
    }
    mutate(form);
  };

  if (error)
    toast("در ساخت دسته بندی خطایی وجود دارد!", {
      position: "top-right",
      type: "error",
    });

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h3>دسته بندی جدید</h3>
      {/* <p></p> */}
      <label htmlFor="name">نام دسته بندی</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="نام"
        value={form.name}
      />
      <label htmlFor="slug">اسلاگ دسته بندی</label>
      <input
        type="text"
        name="slug"
        id="slug"
        placeholder="اسلاگ"
        value={form.slug}
      />
      <label htmlFor="icon">آیکون دسته بندی</label>
      <input
        type="text"
        name="icon"
        id="icon"
        placeholder="آیکون"
        value={form.icon}
      />
      <button type="submit" disabled={isLoading}>ایجاد</button>
      {data?.status === 201 &&
        toast("دسته بندی جدید با موفقیت ساخته شد.", {
          position: "top-right",
          type: "success",
        })}
      <ToastContainer />
    </form>
  );
}

export default CategoryForm;
