import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GET_USER_BLOGS } from "../queries";
import Loading from "./Loading";
import Suggestions from "./Suggestions/Suggestions";
import SuggestionsFooter from "./Suggestions/SuggestionsFooter";

type Props = {
  user: any;
}

export default function Sidebar(props: Props) {
  const { user: { id, avatar, username, followers, description }} = props;
  const { data, loading } = useQuery(GET_USER_BLOGS, {variables: { user_id: id }});

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
          <h3 className="text-lg font-bold">{username}</h3>
          <p className="text-lg text-gray-700 font-['Manrope'] font-medium mb-0">
            {followers.length} followers
          </p>
        </div>

        <p className="font-['Manrope'] text-base text-gray-700 m-0 mt-2">{description}</p>

        {/* suggestions */}
        <h4 className="font-bold mt-5">More from RL</h4>
        {loading ?  <Loading /> : <Suggestions blogs={data.getUserBlogs} /> }

        <SuggestionsFooter />
      </div>
    </div>
  );
}
