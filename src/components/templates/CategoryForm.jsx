import { useState } from "react";

function CategoryForm() {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    icon: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };


  return (
    <form onChange={changeHandler} onSubmit={submitHandler}>
      <h3>دسته بندی جدید</h3>
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
