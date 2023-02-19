import React from 'react'

export default function SuggestionsHeader() {
  return (
    <div className='flex items-center'>
        {/* user avatar */}
        <img className="rouned-full w-[25px] m-0 p-0"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="this is user's avatar"
        />

        <h5 className="font-medium text-sm p-0 m-0">Zullie Rane <span className="text-gray-600">in</span> Prototypr</h5>
    </div>
  )
}
