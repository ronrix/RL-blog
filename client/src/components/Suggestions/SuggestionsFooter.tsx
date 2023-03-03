import React from 'react'
import { Link } from 'react-router-dom'

export default function SuggestionsFooter() {
  return (
    <>
      {/* foot navigations */}
      <div className='flex items-center mt-14 border border-t-gray-200 border-r-0 border-b-0 border-l-0 pt-5'>
        <Link to="/about" className="text-gray-600 text-xs font-['Manrope'] hover:underline" >About</Link>
        <Link to="/terms" className="text-gray-600 text-xs font-['Manrope'] mx-5 hover:underline" >Terms</Link>
        <Link to="/privacy" className="text-gray-600 text-xs font-['Manrope'] hover:underline" >Privacy</Link>
      </div>
    </>
  )
}
