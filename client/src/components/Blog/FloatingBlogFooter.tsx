import React, { useState } from 'react'

import useLike from '../../hooks/useLike';
import { useDispatch } from 'react-redux';
import { handleLike } from '../../utility/handeLike';
import Cookies from 'js-cookie';

type Props = {
    show: Boolean;
    blogId: string;
    likes?: [String];
}

export default function FloatingBlogFooter({ show, blogId, likes }: Props) {
    const like = useLike(blogId);
    const dispatch = useDispatch();
    const [likesCount ,setLikesCount] = useState<number | undefined>(likes?.length);

    const userId: string = Cookies.get("c_user") || "";
    const [isLiked, setIsLiked] = useState<boolean | undefined>(() => likes?.includes(userId));
  
    function handleClickLike() {
        if(!isLiked) {
            setIsLiked(true);
            setLikesCount((prev: any) => prev + 1);
            handleLike(dispatch, like);
        }
    }
  
    const render = show && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-full px-10 py-5 w-[200px] flex items-center justify-between">
            <div>
                <span className='text-gray-500'>{likesCount}</span>
                <i onClick={handleClickLike} className={`ml-3 fa-solid fa-hands-clapping text-gray-500 text-xl hover:text-black cursor-pointer ${isLiked && "!text-black"}`}></i>
            </div>
            <div>
                <span className='text-gray-500'>0</span>
                <i className="ml-3 fa-regular fa-comment text-gray-500 text-xl hover:text-black cursor-pointer"></i>
            </div>
        </div>
  );


  return render;
}
