import Cookies from "js-cookie";
import { toggleAuthModal } from "../state/slice/authModalSlice";

export async function handleLike(dispatch: any, like: any) {
  // if no user, display the login modal
  if(!Cookies.get("c_user")) {
      dispatch(toggleAuthModal("signin"));
      return false;
  }

  const {data, error} = await like();
  console.log(data, error);
  return true;
}

export async function handleUnLike(dispatch: any, unlike: any) {
  // if no user, display the login modal
  if(!Cookies.get("c_user")) {
      dispatch(toggleAuthModal("signin"));
      return false;
  }

  const {data, error} = await unlike();
  console.log(data, error);
  return true;
}