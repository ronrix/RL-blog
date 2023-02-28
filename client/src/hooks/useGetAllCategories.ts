import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../queries";

export default function useGetAllCategories() {
  const { data, loading } = useQuery(GET_ALL_CATEGORIES);

  return {categories: data, categoryLoading: loading};
}