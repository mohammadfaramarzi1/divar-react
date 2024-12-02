import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getCategories } from "services/admin";

import styles from "./AddPost.module.css"

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: null,
    city: "",
    category: "",
    iamges: null,
  });
  const { data } = useQuery(["get-categories"], getCategories);

  const addHandler = (event) => {
    event.preventDefault();
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };

  return (
    <form onChange={changeHandler} className={styles.form}>
      <h3>افرودن آگهی</h3>
      <label htmlFor="title">عنوان آگهی را وارد کنید</label>
      <input type="text" id="title" placeholder="عنوان" name="title" />
      <label htmlFor="content">توضیحات آگهی را وارد کنید</label>
      <textarea name="content" id="content" />
      <label htmlFor="amount">مبلغ آگهی را وارد کنید</label>
      <input type="text" id="amount" placeholder="مبلغ" name="amount" />
      <label htmlFor="city">شهر آگهی را وارد کنید</label>
      <input type="text" id="city" placeholder="شهر" name="city" />
      <label htmlFor="city">دسته بندی آگهی را وارد کنید</label>
      <select name="category" id="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="images">عکس آگهی را وارد کنید</label>
      <input type="file" id="images" placeholder="عکس" name="images" />
      <button onClick={addHandler}>ایجاد پست</button>
    </form>
  );
}

export default AddPost;
