import React, { ReactNode } from 'react'
import { useDispatch } from 'react-redux';
import { toggleAuthModal } from '../state/slice/authModalSlice';

type Props = {
    children: ReactNode;
    noBg?: Boolean;
    additionalClass?: String;
    mode: String;
}

export default function Button({ children, noBg, additionalClass, mode }: Props) {
  const dispatch = useDispatch();

  function toggleModal() {
    dispatch(toggleAuthModal(mode));
  }

  return (
    <button onClick={toggleModal} className={`${additionalClass} ${noBg ? 'bg-none' : 'bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-500'} uppercase text-xs md:text-sm`}>
        {children}
    </button>
  )
}
