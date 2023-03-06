import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_COMMENT } from '../../queries';
import { authCookie } from '../../state/store';
import { handleCommentInputOnFocus } from '../../utility/handleInputFocus';

type Props = {
  blogId: String;
}

export default function CommentForm(props: Props) {
  const {blogId} = props; 

  const dispatch = useDispatch();
	const [respond, setRespond] = useState<string>("");
	const [addComment] = useMutation(ADD_COMMENT);

	function handleSubmit(e: any) {
    (async () => {
      const { data, errors } = await addComment({ variables: { blogId, comment: respond } });
      if(data.addComment.status === 201) {
        setRespond("");
      }
    })();
    e.preventDefault();
	}

	return (
		<form
      onSubmit={handleSubmit}
			className="flex flex-col items-end justify-end"
		>
			<div className="relative w-full">
				<textarea
					placeholder="What are your thoughts?"
					className="shadow-md border w-full p-2 h-[50px] min-h-[50px] max-h-[80px] mt-5 outline-none scrollbar-hide"
					onFocus={() => handleCommentInputOnFocus(dispatch)}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						setRespond(e.currentTarget.value)
					}
          value={respond}
					maxLength={import.meta.env.VITE_RESPOND_LIMIT}
				></textarea>
				<div className="text-gray-800 text-sm text-right">
					{respond.length}/{import.meta.env.VITE_RESPOND_LIMIT}
				</div>
			</div>
			{authCookie && (
				<button
          type="submit"
					disabled={!respond.length}
					className="px-4 py-1 rounded-full border border-green-500 mt-2 mb-5 hover:bg-green-500 hover:text-white duration-75"
				>
					Respond
				</button>
			)}
		</form>
	);
}
