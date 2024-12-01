import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { addCategory } from "services/admin";

import styles from "components/templates/CategoryForm.module.css";

function CategoryForm() {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    icon: "",
  });

  const { mutate, isLoading, error } = useMutation(addCategory);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form =>", form);
  };

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
      <button type="submit">ایجاد</button>
    </form>
  );
}

export default CategoryForm;
