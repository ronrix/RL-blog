import React from 'react'
import { Link } from 'react-router-dom'
import SuggestionsCard from './SuggestionsCard'

export default function Suggestions() {
  return (
    <div className='flex flex-col'>
      <SuggestionsCard />
      <SuggestionsCard />
      <SuggestionsCard />
    
      {/* foot navigations */}
      <div className='flex items-center mt-14'>
        <Link to="about" className="text-gray-600 text-xs font-['Manrope'] hover:underline" >About</Link>
        <Link to="help" className="text-gray-600 text-xs font-['Manrope'] mx-5 hover:underline" >Help</Link>
        <Link to="terms" className="text-gray-600 text-xs font-['Manrope'] mr-5 hover:underline" >Terms</Link>
        <Link to="privacy" className="text-gray-600 text-xs font-['Manrope'] hover:underline" >Privacy</Link>
      </div>
    </div>
  )
}
