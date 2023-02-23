import React, { useEffect } from "react";
import disableScroll from "disable-scroll";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Google from "./AuthBtns/Google";
import Facebook from "./AuthBtns/Facebook";
import { useDispatch } from "react-redux";
import { toggleAuthModal } from "../state/slice/authModalSlice";

type Props = {
  mode: { signup: boolean; signin: boolean };
};

export default function AuthModal({
  mode,
}: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    disableScroll.on(); // prevent scrolling

    return () => {
      disableScroll.off(); // enabling scroll
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId="926950853129-r0lvuk9cs0nhdhq13bk4jomkcchelcni.apps.googleusercontent.com">
      <div
        className="fixed left-0 top-0 right-0 bottom-0 bg-white/75 z-10 flex items-center justify-center"
        onClick={() => dispatch(toggleAuthModal({ signup: false, signin: false }))}
      >
        <div
          className="w-screen h-screen md:h-auto md:w-[500px] bg-white shadow-lg p-5 flex flex-col items-center justify-center relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h4 className="font-bold text-3xl font-['Labrada'] mb-16 text-[#222]">
            {mode.signup ? "Join RL." : "Welcome back."}
          </h4>

          {/* close modal */}
          <i
            onClick={() => dispatch(toggleAuthModal("close"))}
            className="fa-solid fa-xmark absolute text-gray-300 right-2 top-2 hover:text-gray-500"
          ></i>

          <div className="w-[80%] sm:w-[45%] md:w-[60%]">
            {/* account buttons */}
            <Google mode={mode} />
            <Facebook mode={mode} />
          </div>

          <p className="text-xs md:text-sm mt-10 font-['Manrope']">
            {mode.signup ? (
              <>
                Already have an Account?{" "}
                <button onClick={() => dispatch(toggleAuthModal("signin"))} className="font-bold text-green-800">
                  Sign in
                </button>{" "}
              </>
            ) : (
              <>
                No account?{" "}
                <button onClick={() => dispatch(toggleAuthModal("signup"))} className="font-bold text-green-800">
                  Create one
                </button>
              </>
            )}
          </p>
        </div>
      </div>
  </GoogleOAuthProvider> 
  );
}
