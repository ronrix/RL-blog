import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GET_BLOGS } from "../queries";
import { addBlogs } from "../state/slice/blogSlice";

export default function useGetAllBlogs() {
  const [getBlogs] = useLazyQuery(GET_BLOGS);
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState<any>();

  useEffect(() => {
    (async() => {
      const { data } = await getBlogs();
      setBlogs(data.getAllBlogs);
      // add the blogs data to the redux state
      dispatch(addBlogs(data.getAllBlogs));
    })();
  }, []);

  return blogs;
}