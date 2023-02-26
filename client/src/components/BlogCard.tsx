import moment from 'moment';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toDisplayBlog } from '../state/slice/blogSlice';

import SuggestionsHeader from './Suggestions/SuggestionsHeader'
import SuggestionsTitle from './Suggestions/SuggestionsTitle';

type Props = {
  blog: any;
}


export default function BlogCard(props: Props) {
  const { blog: { user, description, thumbnail, title, createdAt, read_duration } } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  function handleToShowBlog() {
    // add the to show blog to the state before redirecting to the blog content
    dispatch(toDisplayBlog(props.blog));
    
    const path = `/${title}`;
    navigate(path);
  }

  return (
    <div onClick={handleToShowBlog} className='flex flex-col text-black mt-5 mb-10 cursor-pointer'>
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
    </div>
  )
}
