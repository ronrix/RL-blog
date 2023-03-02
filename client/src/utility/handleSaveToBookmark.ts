import Cookies from "js-cookie";
import { toggleAuthModal } from "../state/slice/authModalSlice";

export async function handleSaveToBookmark(dispatch: any, saveBookmark: any) {
  // if no user, display the login modal
  if(!Cookies.get("c_user")) {
      dispatch(toggleAuthModal("signin"));
      return false;
  }

  const {data, error} = await saveBookmark();
  console.log(data, error);
  return true;
}

export async function handleUnSaveToBookmark(dispatch: any, unSaveBookmark: any) {
  // if no user, display the login modal
  if(!Cookies.get("c_user")) {
      dispatch(toggleAuthModal("signin"));
      return false;
  }

  const {data, error} = await unSaveBookmark();
  console.log(data, error);
  return true;
}