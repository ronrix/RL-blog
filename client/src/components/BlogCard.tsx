import React from 'react'
import { Link } from 'react-router-dom'
import SuggestionsHeader from './Suggestions/SuggestionsHeader'
import SuggestionsTitle from './Suggestions/SuggestionsTitle';

type Props = {
  title: string;
  description: string;
  thumbnail: string;
  user: any;
  imgSize: number;
}


export default function BlogCard(props: Props) {
  const { user, description, thumbnail, imgSize, title } = props;
  return (
    <Link to="link" className='flex flex-col text-black mt-5 mb-10'>
      <div className='flex justify-between gap-3'>
        <div className="w-[80%] flex flex-col justify-between">
          <div>
            <SuggestionsHeader user={user} />
            <SuggestionsTitle title={title} />
            <p className='text-gray-700 text-base font-["Manrope"]'>{description}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className='text-gray-400 text-xs mt-3 font-["Manrope"]'>Feb 14 <span className="mx-2">·</span> 15 min read</p>
            <i className="fa-regular fa-bookmark hover:text-gray-600"></i>
          </div>
        </div>
        <img alt="" className={`ut w-[200px] h-[134px] my-0`} src={thumbnail} loading="lazy" role="presentation"></img>
      </div>
    </Link>
  )
}
