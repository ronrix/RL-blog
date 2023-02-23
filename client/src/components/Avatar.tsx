import React from 'react'

type Props = {
  imgSrc: string;
}

export default function Avatar(props: Props) {
  const { imgSrc } = props;
  return (
    <div className='w-[30px] ml-5'>
      <img src={imgSrc} alt="your avatar" className="rounded-full"  />
    </div>
  )
}
