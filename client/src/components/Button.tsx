import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button className="py-2 px-4 border rounded-full bg-green-600 text-white uppercase hover:bg-green-500 text-xs md:text-sm">
        {children}
    </button>
  )
}
