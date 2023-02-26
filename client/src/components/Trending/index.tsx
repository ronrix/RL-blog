import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
  top: number;
}

export default function Trending(props: Props) {
  const { top } = props;
  return (
    <Link to="/" className='text-black'>
      <div className='flex'>
        <h3 className='mr-5 text-lg font-[800] text-gray-400'>0{top}</h3>
        <div className='flex flex-col items-start justify-start py-3'>
          <h4 className="flex items-center m-0 p-0 font-[600] text-xs">
            <img src="https://miro.medium.com/fit/c/20/20/0*7ZLgZWh2nTXrR1HM.jpeg" alt="avatar" className="w-[20px] rounded-full my-0 mr-2" />
            Praveen Seshadri
          </h4>

          <h3 className="text-lg font-[800] m-0 p-0">The maze is in the mouse</h3>
          <p className='text-gray-400 text-xs mt-3 font-["Manrope"]'>Feb 14 <span className="mx-2">·</span> 15 min read</p>
        </div>
      </div>
    </Link>
  )
}
