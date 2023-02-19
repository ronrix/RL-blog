import React from 'react'
import { Link } from 'react-router-dom'
import SuggestionsHeader from './SuggestionsHeader'
import SuggestionsTitle from './SuggestionsTitle'

export default function SuggestionsCard() {
  return (
    <Link to="link" className='flex flex-col text-black mt-5'>
      <div className='flex items-start'>
        <div className="w-[80%]">
          <SuggestionsHeader />
          <SuggestionsTitle />
        </div>
        <img alt="" className="ut w-[60px]" src="https://miro.medium.com/focal/56/56/50/50/1*l-Ab8NBwzMN6AnkD4gEgLw.png" width="56" loading="lazy" role="presentation"></img>
      </div>
    </Link>
  )
}
