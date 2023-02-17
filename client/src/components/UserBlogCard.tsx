import React from 'react'

export default function UserBlogCard() {
  return (
    <div className="flex items-center justify-between mb-10">
        {/* user avatar */}
        <div>
            <img className="rouned-full md:w-[100px]" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="this is user's avatar" />
        </div>
        {/* usre info */}
        <div className="flex-1">
            <h3 className="text-2xl font-medium">Erica Dhawan</h3>
            <p className="text-lg text-gray-700">Feb 8 . 3 min read </p>
        </div>
        {/* links */}
        <div className='flex items-center flex-wrap justify-start'>
           <i className="fa-brands fa-twitter text-2xl text-gray-500 hover:text-black cursor-pointer"></i> 
           <i className="fa-brands fa-facebook text-2xl text-gray-500 hover:text-black cursor-pointer mx-5"></i> 
           <i className="fa-brands fa-linkedin text-2xl text-gray-500 hover:text-black cursor-pointer"></i> 
        </div>
    </div>
  )
}
