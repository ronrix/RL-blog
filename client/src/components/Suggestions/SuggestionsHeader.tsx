import React from 'react'

type Props = {
  user: any
}

export default function SuggestionsHeader(props: Props) {
  const { user } = props;
  return (
    <div className='flex items-center'>
        {/* user avatar */}
        <img className="rounded-full w-[25px] m-0 p-0 mr-2"
          src={user.avatar}
          alt="this is user's avatar"
        />

        <h5 className="font-medium text-sm p-0 m-0"><span className="capitalize">{user.username}</span> <span className="text-gray-600">in</span> Prototypr</h5>
    </div>
  )
}
