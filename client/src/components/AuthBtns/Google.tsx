import { useGoogleLogin } from "@react-oauth/google";
import { useLazyQuery, gql, useMutation } from '@apollo/client';
import { useDispatch } from "react-redux";
import { addUserState } from "../../state/slice/userSlice";
import { useState } from "react";
import Toaster from "../Toaster";
import { useNavigate } from "react-router-dom";

const LOGIN = gql`
  query Query($username: String!, $email: String!, $uid: String!) {
    login(username: $username, email: $email, uid: $uid) {
      id
      username
      email
      avatar
      description
      followers
      links
      bookmarks
    }
  }
`;

const ADD_USER = gql`
  mutation($username: String!, $email: String!, $password: String!, $avatar: String!, $description: String!) {
    addUser(username: $username, email: $email, password: $password, avatar: $avatar, description: $description) {
      id
      email
      username
      avatar
      description
      createdAt
      updatedAt
    }
  }
`

type Props = {
  mode: { signup: Boolean; signin: Boolean };
}

export default function Google({ mode }: Props) {
  const dispatch = useDispatch();
  const [err, setErr] = useState<{value: string; name: string}>();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (credential) => {
      const headers = new Headers({
        Authorization: `Bearer ${credential.access_token}`,
        'Content-Type': 'application/json',
      });
      const url = 'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos';
      const response = await fetch(url, {method: "GET", headers});
      const { emailAddresses, names, photos }= await response.json();

      // add the user
      if(mode.signup) {
        const { data, errors } = await addUser({variables: { username: names[0].displayName, email: emailAddresses[0].value, password: emailAddresses[0].metadata.source.id, avatar: photos[0].url, description: "This is sample description" }});
        if(errors) {
          // TODO: display notification message for error
          console.log(errors);
          setErr({ name: errors[0].name, value: errors[0].message });
          return;
        }
        // add the data to the user after creating the user
        dispatch(addUserState(data.addUser));

        navigate("/u");
        return;
      }
      // login the user
      const { data, error } = await getUser({ variables: { username: names[0].displayName, email: emailAddresses[0].value, uid: emailAddresses[0].metadata.source.id }});
      if(error) {
        // TODO: display notification message for error
        setErr({ name: error.name, value: error.message });
        return;
      }
      // add the data to the user
      dispatch(addUserState(data.login));
      navigate("/u");
    },
  });
  const [getUser] = useLazyQuery(LOGIN);
  const [addUser] = useMutation(ADD_USER);

  return (
    <>
    {err && <Toaster msg={err}  />}
      <button
        onClick={() => login()}
        className="border px-5 p-2 font-['Labrada'] text-sm rounded-full flex items-center justify-center w-full"
      >
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
    </>
  );
}
