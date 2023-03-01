import React from 'react'

type Props = {
  title: string;
}

export default function SuggestionsTitle(props: Props) {
  const { title } = props;
  return (
    <div className="text-base font-bold m-0 p-0 capitalize">{title}</div>
  )
}
