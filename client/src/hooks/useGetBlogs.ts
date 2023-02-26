import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GET_USER_BLOGS } from "../queries";
import { addBlogs } from "../state/slice/blogSlice";
import { authCookie } from "../state/store";

export default function useGetBlogs() {
  const [getUserBlogs] = useLazyQuery(GET_USER_BLOGS);
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState<any>();

  useEffect(() => {
    (async() => {
      const { data } = await getUserBlogs({ variables: { user_id: authCookie }})
      setBlogs(data.getUserBlogs);
      // add the blogs data to the redux state
      dispatch(addBlogs(data.getUserBlogs));
    })();
  }, []);

  return blogs;
}