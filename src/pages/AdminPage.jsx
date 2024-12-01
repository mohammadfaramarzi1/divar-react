import CategoryForm from "components/templates/CategoryForm";
import CategoeyList from "components/templates/CategoeyList";

function AdminPage() {
  return (
    <div>
      <CategoeyList />
      <CategoryForm />
    </div>
  );
}

export default AdminPage;
