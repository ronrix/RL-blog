import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CHECK_USER_AUTH } from "../queries";
import { addUserState } from "../state/slice/userSlice";
import { authCookie } from "../state/store";

export default function useRetrieveUser() {
  const [user] = useLazyQuery(CHECK_USER_AUTH);
  const dispatch = useDispatch();

  useEffect(() => {
     // check user authentication from the server
    (async() => {
      // remove user data from localStorage if no auth cookie found 
      // then return and don't proceed to query to the server
      if(!authCookie) {
          localStorage.removeItem("cu");
          return;
      }

      // if there is authCookie, we will request for the authenticity of the user
      const {data, error} = await user({ variables: { user_id: authCookie } });
      // if user data is null, then 
      if(!data && error?.message === "jwt expired") {
          localStorage.removeItem("cu");
          return;
      }
      // else: set the user data to redux state and to the localStorage
      dispatch(addUserState(data.user));
      localStorage.setItem("cu", JSON.stringify(data.user));
    })();
  }, []);

}