import { toggleAuthModal } from "../state/slice/authModalSlice";
import { authCookie } from "../state/store";

export function handleCommentInputOnFocus(dispatch: any) {
  // if no user, display the login modal
  if(!authCookie) {
      dispatch(toggleAuthModal("signin"));
      return false;
  }
}

