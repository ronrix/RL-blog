import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleResponseModal } from '../../state/slice/responseSlice';
import Comment from './Comment';

export default function Responses() {
  const dispatch = useDispatch();

  function handleShowResponses() {
    dispatch(toggleResponseModal());
  }

	return (
		<div onClick={handleShowResponses} className='bg-black bg-opacity-10 w-screen h-screen fixed top-0 bottom-0 right-0 z-10'>
			<div onClick={handleShowResponses} className="fixed right-0 top-0 h-full p-5 bg-white shadow-xl w-[450px]">

        <div className='flex items-center justify-between'>
            <h4 className='font-bold text-2xl'>Responses {171}</h4>
            {/* close button */}
            <i onClick={handleShowResponses} className="fa-solid fa-xmark text-xl text-gray-500 cursor-pointer hover:text-gray-400"></i>
        </div>

				<input
					type="text"
					placeholder="What are your thoughts?"
					className="shadow-md border w-full p-2 my-5 outline-none"
				/>

				<h6 className='font-bold text-sm'>
					MOST RELEVANT
					<i className="fa-solid fa-angle-down ml-2"></i>
				</h6>

        <Comment />
			</div>
		</div>
	);
}
