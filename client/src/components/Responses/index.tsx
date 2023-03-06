import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleResponseModal } from '../../state/slice/responseSlice';
import Comment from './Comment';
import { useSubscription } from '@apollo/client';
import { COMMENTS_SUBSCRIPTION } from '../../queries';
import CommentForm from './CommentForm';

type Props = {
	blogId: String;
	comments?: [];
}

export default function Responses(props: Props) {
	const { blogId, comments } = props;
	
	const [wsComments, setWSComments] = useState<[] | any>(() => comments?.slice());
  const dispatch = useDispatch();

	const {data, loading} = useSubscription(COMMENTS_SUBSCRIPTION, { variables: { blogId }, 
	onData(options) {
		setWSComments(options.data.data.comments);
	},
	onError(err) {
		console.log(err)
	},
});

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

				<CommentForm blogId={blogId} />	

				<h6 className='font-bold text-sm'>
					MOST RELEVANT
					<i className="fa-solid fa-angle-down ml-2"></i>
				</h6>

				{wsComments?.length ? wsComments.sort((a: any, b: any) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any)).map((comment: any) => {
					return <Comment createdAt={comment.createdAt} replies={comment.replies} user={comment.userId} comment={comment.comment} blogId={blogId} />
				}) : <p className='font-[Manrope] text-base mt-3'>No comments!</p>}
			</div>
		</div>
	);
}
