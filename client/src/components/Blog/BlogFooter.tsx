import React from 'react'

type Props = {
  footerRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function BlogFooter({ footerRef }: Props) {
  return (
    <div ref={footerRef} className="flex items-center justify-between w-full mt-20">
        <div className="w-[10%] self-end flex items-center justify-between">
          <i className="fa-solid fa-hands-clapping text-gray-500 text-xl hover:text-black cursor-pointer"></i>
          <i className="fa-regular fa-comment text-gray-500 text-xl hover:text-black cursor-pointer"></i>
        </div>
        <div className="w-[10%] self-end flex items-center justify-between ">
          <i className="fa-regular fa-share-from-square text-gray-500 text-xl hover:text-black cursor-pointer"></i>
          <i className="fa-regular fa-bookmark text-2xl text-gray-500 hover:text-black cursor-pointer"></i>
        </div>
    </div>
  )
}
