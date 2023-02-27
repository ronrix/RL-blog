import { useQuery } from "@apollo/client";
import { GET_BLOG } from "../queries";

export default function useGetBlog() {
  const id = localStorage.getItem("blogId");
  const { data, loading } = useQuery(GET_BLOG, { variables: { id }});

  return {data, loading};
}