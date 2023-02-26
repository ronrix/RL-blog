import React from 'react'
import SuggestionsCard from './SuggestionsCard'
import SuggestionsFooter from './SuggestionsFooter'

export default function Suggestions() {
  return (
    <div className='flex flex-col'>
      <SuggestionsCard />
      <SuggestionsCard />
      <SuggestionsCard />
    
      <SuggestionsFooter />
    </div>
  )
}
