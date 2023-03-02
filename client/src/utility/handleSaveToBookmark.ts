import Cookies from "js-cookie";
import { toggleAuthModal } from "../state/slice/authModalSlice";

export async function handleSaveToBookmark(dispatch: any, saveBookmark: any) {
  // if no user, display the login modal
  if(!Cookies.get("c_user")) {
      dispatch(toggleAuthModal("signin"));
      return;
  }

  const {data, error} = await saveBookmark();
  console.log(data, error);
}

export async function handleUnSaveToBookmark(dispatch: any, unSaveBookmark: any) {
  // if no user, display the login modal
  if(!Cookies.get("c_user")) {
      dispatch(toggleAuthModal("signin"));
      return;
  }

  const {data, error} = await unSaveBookmark();
  console.log(data, error);
}