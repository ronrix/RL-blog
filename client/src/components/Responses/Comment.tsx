import { useLazyQuery } from '@apollo/client';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LIKE } from '../../queries';
import { handleLike } from '../../utility/handeLike';
import Reply from './Reply';
import ReplyForm from './ReplyForm';

type Props = {
	blogId: String;
	user: any;
	comment: String;
	createdAt: Date;
	replies: [];
}

export default function Comment(props: Props) {
	const { blogId, user, comment, replies, createdAt } = props;
	const [showReplyForm, setShowReplyForm] = useState<boolean>(false);

	const [like] = useLazyQuery(LIKE, { variables: { blogId } });
	const dispatch = useDispatch();

	return (
		<div>
			<div className="mt-5 border border-x-0 border-t-0 pb-5">
				{/* header */}
				<div className="flex items-start">
					{/* user avatar */}
					<img
						className="rounded-full w-[40px] m-0 p-0 mr-2"
						src={user.avatar}
						alt="this is user's avatar"
					/>
					<div>
						<h6 className="font-medium text-sm m-0">{user.username}</h6>
						<p className="font-[Manrope] text-xs text-gray-500">{moment(createdAt).fromNow()}</p>
					</div>
				</div>
				{/* comment */}
				<p className="font-[Manrope] text-sm">{comment}</p>
				{/* actiosn (likes, reply)*/}
				<div className="flex items-center justify-between">
          <div className='flex items-center'>
            <div className="cursor-pointer flex items-center">
              <i
							  onClick={() => handleLike(dispatch, like)}
                className={`mr-3 fa-solid fa-hands-clapping text-gray-500 text-xl hover:text-black cursor-pointer`}
              ></i>
              <span className='text-sm'>1</span>
            </div>
            <div className="ml-5 cursor-pointer flex items-center">
              <i className="mr-3 fa-regular fa-comment text-gray-500 text-xl hover:text-black cursor-pointer"></i>
              <span className='text-sm'>2 replies</span>
            </div>
          </div>
          <span onClick={() => setShowReplyForm(prev => !prev)} className='text-sm cursor-pointer hover:text-gray-600'>Reply</span>
        </div>

			</div>

   		{/* reply form */}
			{showReplyForm && <ReplyForm /> }
			{/* replies */}
			{ replies?.length ? <Reply /> : null }
		</div>
	);
}
