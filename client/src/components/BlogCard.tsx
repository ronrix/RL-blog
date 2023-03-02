import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';

import SuggestionsHeader from './Suggestions/SuggestionsHeader'
import SuggestionsTitle from './Suggestions/SuggestionsTitle';
import { setBlogIdToLS } from '../utility/setBlogIdToLS';

type Props = {
  blog: any;
}


export default function BlogCard(props: Props) {
  const { blog: { id, user, description, thumbnail, title, createdAt, read_duration, category} } = props;
  const path = title.replace(/ /g, '-').toLowerCase();

  return (
    <Link to={path} onClick={() => setBlogIdToLS(id)} className='flex flex-col text-black mt-5 mb-10 cursor-pointer'>
      <div className='flex justify-between gap-3 flex-col sm:flex-row'>
        <div className="w-full sm:w-[80%] flex flex-col justify-between order-2 sm:order-1">
          <div>
            <SuggestionsHeader user={user} category={category} />
            <SuggestionsTitle title={title} />
            <p className='text-gray-700 text-base font-["Manrope"]'>{description}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className='text-gray-400 text-xs mt-3 font-["Manrope"]'>{moment(createdAt).format("MMM Do")} <span className="mx-2">·</span> {read_duration} min read</p>
            <i className="fa-regular fa-bookmark hover:text-gray-600"></i>
          </div>
        </div>
        <div className="w-full sm:w-[200px] overflow-hidden order-1 sm:order-2">
          <img alt="" className={`ut w-full h-[134px] my-0`} src={thumbnail} loading="lazy" role="presentation"></img>
        </div>
      </div>
    </Link>
  )
}
