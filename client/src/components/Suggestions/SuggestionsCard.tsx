import React from 'react'
import { Link } from 'react-router-dom'
import { setBlogIdToLS } from '../../utility/setBlogIdToLS'
import SuggestionsHeader from './SuggestionsHeader'
import SuggestionsTitle from './SuggestionsTitle'

type Props = {
  title: string;
  thumbnail: string;
  user: any;
  id: string;
  category: string;
}

export default function SuggestionsCard(props: Props) {
  const { id, title, user, thumbnail, category } = props;
  const path = title.replace(/ /g, '-').toLowerCase();

  return (
    <a href={`${path}`} onClick={() => setBlogIdToLS(id)} className='flex flex-col text-black mt-5'>
      <div className='flex items-start justify-between'>
        <div className="w-[80%]">
          <SuggestionsHeader user={user} category={category} />
          <SuggestionsTitle title={title} />
        </div>
        <img alt="" className={`hidden xl:block ut w-[150px] my-0`} src={thumbnail} loading="lazy" role="presentation"></img>
      </div>
    </a>
  )
}
