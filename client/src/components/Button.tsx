import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
    handleClick?: () => void;
    noBg?: Boolean;
    additionalClass?: String;
}

export default function Button({ children, handleClick, noBg, additionalClass }: Props) {
  return (
    <button onClick={handleClick} className={`${additionalClass} ${noBg ? 'bg-none' : 'bg-green-600 text-white py-2 px-4 border rounded-full hover:bg-green-500'} uppercase text-xs md:text-sm`}>
        {children}
    </button>
  )
}
