import React from "react";
import Suggestions from "./Suggestions/Suggestions";

export default function Sidebar() {
  return (
    <div className="sticky top-0 w-[300px] xl:w-[400px] min-h-[100px] h-[100px] p-5 hidden lg:block">
      <div className="flex flex-col items-start">
        {/* user avatar */}
        <img
          className="rouned-full w-[80px]"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="this is user's avatar"
        />

        {/* user info */}
        <div className="flex-1">
          <h3 className="text-lg font-bold">Erica Dhawan</h3>
          <p className="text-lg text-gray-700 font-['Manrope'] font-medium">
            333K followers
          </p>
        </div>

        <p className="font-['Manrope'] text-base text-gray-700 mt-5">
          Keynote Speaker on 21st Century Teamwork and Innovation. Author, GET
          BIG THINGS DONE and DIGITAL BODY LANGUAGE (ORDER HERE:
          http://bit.ly/3avbJkg) Follow
        </p>

        {/* suggestions */}
        <h4 className="font-bold mt-5">More from RL</h4>
        <Suggestions />
      </div>
    </div>
  );
}
