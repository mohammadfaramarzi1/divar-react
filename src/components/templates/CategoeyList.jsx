import { useQuery } from "@tanstack/react-query"

function CategoeyList() {

    const {data, isLoading, error} = useQuery(["get-categories"])

  return (
    <div>CategoeyList</div>
  )
}

export default CategoeyList