import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import Header from '../components/Header';
import SuggestionsCard from '../components/Suggestions/SuggestionsCard';
import { GET_USER_BLOGS } from '../queries';
import { useSelector } from 'react-redux';
import { authCookie } from '../state/store';

export default function Dashboard() {
  const [getUserBlogs] = useLazyQuery(GET_USER_BLOGS);
  const [blogs, setBlogs] = useState<any>();

  useEffect(() => {
    (async() => {
      const { data } = await getUserBlogs({ variables: { user_id: authCookie }})
      setBlogs(data);
    })();
  }, []);
  return (
    <div>
      <Header />

      <div className="container mx-auto p-5">
        <div>
          <h4 className="sticky top-0 bg-white py-2 font-bold text-lg">Your contents</h4>
          {blogs ? blogs.getUserBlogs?.map((blog: any) => {
            return (<div key={blog.id} className="border border-t-0 border-r-0 border-l-0">
              <SuggestionsCard user={blog.user} title={blog.title} thumbnail={blog.thumbnail} />
            </div>)
          }) : <p className="font-['Manrope'] text-sm">No contents</p>}
        </div>
      </div>
    </div>
  );
}
