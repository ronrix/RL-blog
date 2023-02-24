import React from 'react'

export default function Info() {
  return (
    <div className='absolute rounded-lg whitespace-nowrap -top-14 right-full bg-white p-3 shadow-xl border after:content-[""] after:absolute after:right-1 after:w-2 after:h-2 after:-bottom-1 after:rotate-45 after:bg-white after:border after:border-l-0 after:border-t-0'>
      <h5 className='text-sm'>
        To learn more about markdown syntax 
        <a target={"_blank"} href="https://www.markdownguide.org/basic-syntax/" className="ml-1">markdown syntax</a>
      </h5>
    </div>
  )
}

