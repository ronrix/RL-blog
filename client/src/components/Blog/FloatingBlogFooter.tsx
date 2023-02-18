import React from 'react'

type Props = {
    show: Boolean;
}

export default function FloatingBlogFooter({ show }: Props) {
  
    const render = show && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-full px-10 py-5 w-[150px] flex items-center justify-between">
            <i className="fa-solid fa-hands-clapping text-gray-500 text-xl hover:text-black cursor-pointer"></i>
            <i className="fa-regular fa-comment text-gray-500 text-xl hover:text-black cursor-pointer"></i>
        </div>
  );


  return render;
}
