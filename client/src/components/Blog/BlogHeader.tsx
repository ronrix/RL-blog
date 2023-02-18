import React from 'react'

export default function BlogHeader() {
  return (
    <div className="flex flex-col sm:flex-row md:items-center justify-between mb-10">
        <div className="flex items-center">
          {/* user avatar */}
          <div>
              <img className="rouned-full w-[80px] sm:w-[100px]" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="this is user's avatar" />
          </div>
          {/* usre info */}
          <div className="flex-1">
              <h3 className="text-lg md:text-2xl font-medium">Erica Dhawan</h3>
              <p className="text-md md:text-lg text-gray-700">Feb 8 . 3 min read </p>
          </div>
        </div>
        {/* links */}
        <div className='flex items-center flex-wrap justify-between w-[80%] sm:w-[25%]'>
          {/* mobile view for save button */}
           <div className="border rounded-full px-5 py-1 flex items-center justify-center sm:hidden">
            <i className="fa-regular fa-bookmark text-lg sm:text-2xl text-gray-500 hover:text-black cursor-pointer"></i>
            <span className="pl-5">Save</span>
           </div>

           <i className="fa-brands fa-twitter text-lg sm:text-2xl text-gray-500 hover:text-black cursor-pointer"></i> 
           <i className="fa-brands fa-facebook text-lg sm:text-2xl text-gray-500 hover:text-black cursor-pointer"></i> 
           <i className="fa-brands fa-linkedin text-lg sm:text-2xl text-gray-500 hover:text-black cursor-pointer"></i> 
           <i className="fa-solid fa-link text-gray-500 text-lg sm:text-2xl hover:text-black cursor-pointer"></i>
           <i className="fa-regular fa-bookmark text-lg sm:text-2xl text-gray-500 hover:text-black cursor-pointer hidden sm:block"></i>
        </div>
    </div>
  )
}