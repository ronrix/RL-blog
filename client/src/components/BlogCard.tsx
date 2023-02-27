import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';

import SuggestionsHeader from './Suggestions/SuggestionsHeader'
import SuggestionsTitle from './Suggestions/SuggestionsTitle';

type Props = {
  blog: any;
}


export default function BlogCard(props: Props) {
  const { blog: { id, user, description, thumbnail, title, createdAt, read_duration } } = props;
  const path = title.replace(/ /g, '-').toLowerCase();
  
  function handleToShowBlog() {
    // store the id of the blog to the localStorage, for later use
    // when the user reloads the blog page, it will be used for querying the data of that blog
    localStorage.setItem("blogId", id);
  }

  return (
    <Link to={path} onClick={handleToShowBlog} className='flex flex-col text-black mt-5 mb-10 cursor-pointer'>
      <div className='flex justify-between gap-3'>
        <div className="w-[80%] flex flex-col justify-between">
          <div>
            <SuggestionsHeader user={user} />
            <SuggestionsTitle title={title} />
            <p className='text-gray-700 text-base font-["Manrope"]'>{description}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className='text-gray-400 text-xs mt-3 font-["Manrope"]'>{moment(createdAt).format("MMM Do")} <span className="mx-2">·</span> {read_duration} min read</p>
            <i className="fa-regular fa-bookmark hover:text-gray-600"></i>
          </div>
        </div>
        <img alt="" className={`ut w-[200px] h-[134px] my-0`} src={thumbnail} loading="lazy" role="presentation"></img>
      </div>
    </Link>
  )
}
