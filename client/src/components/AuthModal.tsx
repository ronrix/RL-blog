import React, { useEffect } from "react";
import disableScroll from "disable-scroll";

type Props = {
  handleClick: () => void;
  fnSignin: () => void;
  fnSignup: () => void;
  mode: { signup: boolean; signin: boolean };
};

export default function AuthModal({
  handleClick,
  mode,
  fnSignin,
  fnSignup,
}: Props) {

  useEffect(() => {
    disableScroll.on(); // prevent scrolling

    return () => {
      disableScroll.off(); // enabling scroll
    }
  }, []);

  return (
    <div
      className="fixed left-0 top-0 right-0 bottom-0 bg-white/75 z-10 flex items-center justify-center"
      onClick={handleClick}
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
          onClick={handleClick}
          className="fa-solid fa-xmark absolute text-gray-300 right-2 top-2 hover:text-gray-500"
        ></i>

        <div className="w-[80%] sm:w-[45%] md:w-[60%]">
          {/* accound buttons */}
          <button className="border px-5 p-2 font-['Labrada'] text-sm rounded-full flex items-center justify-center w-full">
            <svg
              className="mr-3"
              height="24"
              width="24"
              viewBox="0 0 47 48"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>Google</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Social-Icons---Isolated"
                  transform="translate(-389.000000, -727.000000)"
                >
                  <g id="Google" transform="translate(389.000000, 727.000000)">
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2"
                      fill="#EA4335"
                    ></path>
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4"
                      fill="#4285F4"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            {mode.signup ? "Sign up" : "Sign in"} with Google
          </button>
          <button className="border px-5 p-2 font-['Labrada'] text-sm rounded-full flex items-center justify-center mt-4 w-full">
            <svg
              className="mr-3"
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              version="1.1"
              xmlns:cc="http://creativecommons.org/ns#"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
            >
              <g transform="translate(0 -1028.4)">
                <g>
                  <path
                    d="m4 1031.4c-1.1046 0-2 0.9-2 2v16c0 1.1 0.8954 2 2 2h16c1.105 0 2-0.9 2-2v-16c0-1.1-0.895-2-2-2h-16z"
                    fill="#30497b"
                  />
                  <path
                    d="m4 2c-1.1046 0-2 0.8954-2 2v16c0 1.105 0.8954 2 2 2h16c1.105 0 2-0.895 2-2v-16c0-1.1046-0.895-2-2-2h-16z"
                    transform="translate(0 1028.4)"
                    fill="#3b5998"
                  />
                  <path
                    d="m17 1034.4c-2.209 0-4 1.8-4 4v3h-2v3h2v7h3v-7h2.454l0.546-3h-3v-3c0-0.6 0.448-1 1-1h2v-3z"
                    fill="#30497b"
                  />
                  <path
                    d="m17 5c-2.209 0-4 1.7909-4 4v3h-2v3h2v7h3v-7h2.454l0.546-3h-3v-3c0-0.5523 0.448-1 1-1h2v-3z"
                    transform="translate(0 1028.4)"
                    fill="#ecf0f1"
                  />
                  <rect
                    transform="translate(0 1028.4)"
                    height="1"
                    width="3"
                    y="22"
                    x="13"
                    fill="#bdc3c7"
                  />
                </g>
              </g>
            </svg>
            {mode.signup ? "Sign up" : "Sign in"} with Facebook
          </button>
        </div>

        <p className="text-xs md:text-sm mt-10 font-['Manrope']">
          {mode.signup ? (
            <>
              Already have an Account?{" "}
              <button onClick={fnSignin} className="font-bold text-green-800">
                Sign in
              </button>{" "}
            </>
          ) : (
            <>
              No account?{" "}
              <button onClick={fnSignup} className="font-bold text-green-800">
                Create one
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
