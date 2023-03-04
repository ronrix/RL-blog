import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleResponseModal } from '../../state/slice/responseSlice';
import { handleCommentInputOnFocus } from '../../utility/handleInputFocus';
import { authCookie } from "../../state/store";
import Comment from './Comment';

export default function Responses() {
  const dispatch = useDispatch();
	const [respond, setRespond] = useState<string>("");

  function handleShowResponses() {
    dispatch(toggleResponseModal());
  }

	return (
		<div onClick={handleShowResponses} className='bg-black bg-opacity-10 w-screen h-screen fixed top-0 bottom-0 right-0 z-[5]'>
			<div onClick={handleShowResponses} className="fixed right-0 top-0 h-full p-5 bg-white shadow-xl w-full md:w-[450px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300">

        <div className='flex items-center justify-between'>
            <h4 className='font-bold text-2xl'>Responses {171}</h4>
            {/* close button */}
            <i onClick={handleShowResponses} className="fa-solid fa-xmark text-xl text-gray-500 cursor-pointer hover:text-gray-400"></i>
        </div>

				<form action="" className='flex flex-col items-end justify-end'>
					<div className='relative w-full'>
						<textarea
							placeholder="What are your thoughts?"
							className="shadow-md border w-full p-2 h-[50px] min-h-[50px] max-h-[80px] mt-5 outline-none scrollbar-hide"
							onFocus={() => handleCommentInputOnFocus(dispatch)}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setRespond(e.currentTarget.value)}
						>
						</textarea>
						<div className='text-gray-800 text-sm text-right'>{respond.length}/{import.meta.env.VITE_RESPOND_LIMIT}</div>
					</div>
					{authCookie && <button className="px-4 py-1 rounded-full border border-green-500 mt-2 mb-5 hover:bg-green-500 hover:text-white duration-75">Respond</button>}
				</form>

				<h6 className='font-bold text-sm'>
					MOST RELEVANT
					<i className="fa-solid fa-angle-down ml-2"></i>
				</h6>

        <Comment blogId={"1"} />
			</div>
		</div>
	);
}
