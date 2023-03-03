import React from 'react'

export default function Reply() {
  return (
    <div className='ml-5 border border-y-0 border-r-0 border-l-4 border-b-2 mt-5 pb-5 pl-5'>
      {/* header */}
      <div className='flex items-start'>
        {/* user avatar */}
        <img className="rounded-full w-[40px] m-0 p-0 mr-2"
          src={"https://miro.medium.com/fit/c/32/32/1*voAHnaKRTDHRA_xm5FTZwg@2x.jpeg"}
          alt="this is user's avatar"
        />
        <div>
          <h6 className='font-medium text-sm m-0'>Korede</h6>
          <p className='font-[Manrope] text-xs text-gray-500'>almost 3 years ago</p>
        </div>
      </div>
      {/* reply */}
      <p className='font-[Manrope] text-sm'>This is one of the best written articles with visuals I’ve seen on SOLID Principles great job.</p>
      {/* actiosn (likes, reply)*/}
      <div className='flex items-center justify-between'>
        <div className='cursor-pointer flex items-center'>
          <i className={`mr-3 fa-solid fa-hands-clapping text-gray-500 text-xl hover:text-black cursor-pointer`}></i>
          <span>1</span>
        </div>
        <span className='text-sm cursor-pointer hover:text-gray-600'>Reply</span>
      </div>
    </div>
  )
}

