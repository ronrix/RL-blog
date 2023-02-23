import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserState } from "../state/slice/userSlice";

export default function useRetrieveUser() {
  const dispatch = useDispatch();
  useEffect(() => {
    const localUserData = localStorage.getItem("cu");
    if(localUserData) {
      dispatch(addUserState(JSON.parse(localUserData)));
    }
  }, []);

}