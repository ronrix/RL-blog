import React from 'react'
import SuggestionsCard from './SuggestionsCard'

type Props = {
  blogs: [];
}

export default function Suggestions(props: Props) {
  const {blogs} = props;

  return (
    <div className='flex flex-col'>
      {blogs.length && blogs.slice(0, 3).map((blog: any) => {
        return (
          <div className="mb-3">
            <SuggestionsCard key={blog.id} thumbnail={blog.thumbnail} title={blog.title} user={blog.user} />
          </div>
        )
      })}
    </div>
  )
}
