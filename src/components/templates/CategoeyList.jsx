import { useQuery } from "@tanstack/react-query";

import { getCategories } from "services/admin";
import Loader from "../modules/Loader";

function CategoeyList() {
  const { data, isLoading, error } = useQuery(
    ["get-categories"],
    getCategories
  );
  console.log({ data, isLoading, error });

  return <div>
    {
        isLoading ? <Loader /> : 
            data.data.map(category => (
                <div key={category._id}>
                    <img src={`${category.icon}.svg`} alt="icon" />
                    <h5>{category.name}</h5>
                    <p>اسلاگ: {category.slug}</p>
                </div>
            ))
        
    }
  </div>;
}

export default CategoeyList;
