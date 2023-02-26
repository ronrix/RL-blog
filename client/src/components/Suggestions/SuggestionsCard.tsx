import React from 'react'
import { Link } from 'react-router-dom'
import SuggestionsHeader from './SuggestionsHeader'
import SuggestionsTitle from './SuggestionsTitle'

type Props = {
  title: string;
  thumbnail: string;
  user: any;
}

export default function SuggestionsCard(props: Props) {
  const { title, user, thumbnail } = props;

  return (
    <Link to="link" className='flex flex-col text-black mt-5'>
      <div className='flex items-start justify-between'>
        <div className="w-[80%]">
          <SuggestionsHeader user={user} />
          <SuggestionsTitle title={title} />
        </div>
        <img alt="" className="ut w-[80px]" src={thumbnail} width="56" loading="lazy" role="presentation"></img>
      </div>
    </Link>
  )
}
