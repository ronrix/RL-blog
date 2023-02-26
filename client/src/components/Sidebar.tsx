import React from "react";
import Suggestions from "./Suggestions/Suggestions";

type Props = {
  user: any;
}

export default function Sidebar(props: Props) {
  const { user: { avatar, username, followers, description }} = props;
  console.log(props);

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
          <p className="text-lg text-gray-700 font-['Manrope'] font-medium">
            {followers.length} followers
          </p>
        </div>

        <p className="font-['Manrope'] text-base text-gray-700 mt-5">{description}</p>

        {/* suggestions */}
        <h4 className="font-bold mt-5">More from RL</h4>
        <Suggestions />
      </div>
    </div>
  );
}
