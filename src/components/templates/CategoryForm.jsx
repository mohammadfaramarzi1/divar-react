function CategoryForm() {
  return (
    <form>
        <h3>دسته بندی جدید</h3>
        <label htmlFor="name">نام دسته بندی</label>
        <input type="text" name="name" id="name" placeholder="نام" />
        <label htmlFor="slug">اسلاگ دسته بندی</label>
        <input type="text" name="slug" id="slug" placeholder="اسلاگ" />
        <label htmlFor="icon">آیکون دسته بندی</label>
        <input type="text" name="icon" id="icon" placeholder="آیکون" />
        <button>ایجاد</button>
    </form>
  )
}

export default CategoryForm