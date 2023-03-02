import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";

import { FOLLOW, GET_USER_BLOGS, UNFOLLOW } from "../queries";
import Loading from "./Loading";
import Suggestions from "./Suggestions/Suggestions";
import SuggestionsFooter from "./Suggestions/SuggestionsFooter";
import { toggleAuthModal } from "../state/slice/authModalSlice";

type Props = {
  user: any;
}

export default function Sidebar(props: Props) {
  const { user: { id, avatar, username, followers, description }} = props;
  const { data, loading } = useQuery(GET_USER_BLOGS, {variables: { user_id: id }});

  const user = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();

  const [follow] = useMutation(FOLLOW);
  const [unfollow] = useMutation(UNFOLLOW);
  const [isAlreadyFollowed, setIsAlreadyFollowed] = useState<boolean>(() => followers.includes(user.id));

  async function handleFollowUser() {
    // if no user, display the login modal
    if(!Cookies.get("c_user")) {
      dispatch(toggleAuthModal("signin"));
      return;
    }

    // else: if there is a user, check if they haven't followed the user yet 
    // then add the blog user to user's follow table
    if(!isAlreadyFollowed) {
      const { data, errors } = await follow({ variables: { id }});
      setIsAlreadyFollowed(!isAlreadyFollowed);
      return;
    }
    // unfollow
    const { data, errors } = await unfollow({ variables: { id }});
    setIsAlreadyFollowed(!isAlreadyFollowed);
  }

  return (
    <div className="sticky top-0 w-[300px] xl:w-[400px] min-h-[100px] h-[100px] p-5 hidden lg:block">
      <div className="flex flex-col items-start">
        {/* user avatar */}
        <img
          className="rounded-full w-[80px]"
          src={avatar && avatar}
          alt="this is user's avatar"
        />

        {/* user info */}
        <div className="flex-1">
          <h3 className="text-lg font-bold capitalize">{username}</h3>
          <p className="text-lg text-gray-700 font-['Manrope'] font-medium mb-0">
            {followers.length} followers
          </p>
        </div>
        {/* if the blog is user's blog then don't show this follow button */}
        {id !== user.id && (
          <button onClick={handleFollowUser} className={`px-5 py-1 flex items-center rounded-full border border-green-600 my-2 hover:bg-green-600 hover:text-white ${isAlreadyFollowed && "bg-green-600 text-white"}`}>
            <i className="fa-solid fa-plus hover:text-white mr-2"></i>
            { isAlreadyFollowed ? "followed" : "follow"}
          </button>
        )}

        <p className="font-['Manrope'] text-base text-gray-700 m-0 mt-2">{description}</p>

        {/* suggestions */}
        <h4 className="font-bold mt-5">More from RL</h4>
        {loading ?  <Loading /> : <Suggestions blogs={data.getUserBlogs} /> }

        <SuggestionsFooter />
      </div>
    </div>
  );
}
