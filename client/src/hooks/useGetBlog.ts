import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_BLOG } from "../queries";

export default function useGetBlog() {
  const id = localStorage.getItem("blogId");
  const param = useParams();
  const title = param["*"]?.replace(/-/g, " ");
  const { data, loading } = useQuery(GET_BLOG, { variables: { id, title }});

  return {data, loading};
}