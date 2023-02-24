import React from 'react'

export default function Info() {
  return (
    <div className='absolute whitespace-nowrap -bottom-14 left-0 bg-white p-3 shadow-xl border after:content-[""] after:absolute after:left-1 after:w-2 after:h-2 after:-top-1 after:rotate-45 after:bg-white after:border after:border-r-0 after:border-b-0'>
      <h5 className='text-sm'>
        To learn more about markdown syntax 
        <a target={"_blank"} href="https://www.markdownguide.org/basic-syntax/" className="ml-1">markdown syntax</a>
      </h5>
    </div>
  )
}

