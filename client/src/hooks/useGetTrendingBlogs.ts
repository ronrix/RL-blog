import { useQuery } from "@apollo/client";
import { GET_TRENDING_BLOGS } from "../queries";

export default function useGetTrendingBlogs() {
  const {data, loading} = useQuery(GET_TRENDING_BLOGS);
  console.log(data, loading)

  return {trendingBlogs: data, trendingLoading: loading};
}