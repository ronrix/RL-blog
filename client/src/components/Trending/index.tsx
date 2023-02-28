import moment from 'moment';
import React from 'react'
import { Link } from 'react-router-dom';
import { setBlogIdToLS } from '../../utility/setBlogIdToLS';

type Props = {
  top: Number;
  content: any;
}

export default function Trending(props: Props) {
  const { top, content } = props;
  const path = content.title.replace(/ /g, '-').toLowerCase();

  return (
    <Link to={path} onClick={() => setBlogIdToLS(content.id)} className='text-black'>
      <div className='flex'>
        <h3 className='mr-5 text-lg font-[800] text-gray-400'>0{top.toString()}</h3>
        <div className='flex flex-col items-start justify-start py-3'>
          <h4 className="flex items-center m-0 p-0 font-[600] text-xs">
            <img src={content.user.avatar} alt="avatar" className="w-[20px] rounded-full my-0 mr-2" />
            {content.user.username}
          </h4>

          <h3 className="text-lg font-[800] m-0 p-0">{content.title}</h3>
          <p className='text-gray-400 text-xs mt-3 font-["Manrope"]'>{moment(content.createdAt).format("MMM Do")} <span className="mx-2">·</span> {content.read_duration} min read</p>
        </div>
      </div>
    </Link>
  )
}
