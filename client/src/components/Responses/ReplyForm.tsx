import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleCommentInputOnFocus } from '../../utility/handleInputFocus';

export default function ReplyForm() {
  const dispatch = useDispatch();
  const [reply, setReply] = useState<string>("");

  return (
    <div className='p-2 bg-gray-100 ml-3'>
				<form action="" className='flex flex-col items-end justify-end'>
					<div className='relative w-full'>
						<textarea
							placeholder="What are your thoughts?"
							className="shadow-md border w-full p-2 h-[50px] min-h-[50px] max-h-[80px] mt-5 outline-none scrollbar-hide"
							onFocus={() => handleCommentInputOnFocus(dispatch)}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReply(e.currentTarget.value)}
							maxLength={import.meta.env.VITE_RESPOND_LIMIT}
						>
						</textarea>
						<div className='text-gray-800 text-sm text-right'>{reply.length}/{import.meta.env.VITE_RESPOND_LIMIT}</div>
					</div>
					<button className="px-4 py-1 rounded-full border border-green-500 mt-2 mb-5 hover:bg-green-500 hover:text-white duration-75">Reply</button>
				</form>
    </div>
  )
}
