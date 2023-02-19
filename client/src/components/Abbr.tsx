import React from "react";

type Props = {
  text: String;
}

export default function Abbr({ text }: Props) {
  return (
    <>
      {/* abbraviation element on hover */}
      <div className="group-hover:block hidden absolute -top-[150%] bg-black text-white p-2 text-sm after:content-[''] after:absolute after:w-3 after:h-3 after:rotate-45 after:bg-black after:left-1 after:-bottom-1">
        {text}
      </div>
    </>
  );
}
