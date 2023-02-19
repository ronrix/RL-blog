import React from "react";

type Props = {
  mode: { signup: Boolean; signin: Boolean };
}

export default function Facebook({ mode }: Props) {
  return (
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
  );
}
