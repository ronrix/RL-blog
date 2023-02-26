import React, { useState } from 'react'
import { Link } from 'react-router-dom';

type Props = {
  imgSrc: string;
}

export default function Avatar(props: Props) {
  const { imgSrc } = props;
  const [showNavs, setShowNavs] = useState<boolean>(false);
  return (
    <div className='w-[30px] ml-5 relative'>
      {/* floading navs. display when avatar was clicked */}
      {showNavs && (
      <div className="absolute -bottom-full -left-full text-xs p-2 bg-white w-auto shadow-md after:content-[''] after:absolute after:-top-[2px] after:w-[10px] after:h-[10px] after:left-1 after:bg-white after:border after:border-t-gray-50 after:border-l-gray-50 after:border-r-0 after:border-b-0 after:rotate-45"> 
        <Link to="/u" className='font-[Manrope] text-black text-xs hover:text-gray-500'>dashboard</Link>
        <button className="outline-none border-none mt-2 hover:text-gray-500">sign out</button>
      </div>
      )}
      <img src={imgSrc} alt="your avatar" className="rounded-full cursor-pointer" onClick={() => setShowNavs(!showNavs)} />
    </div>
  )
}
