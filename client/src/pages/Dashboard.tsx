import React from 'react';

import Header from '../components/Header';
import Loading from '../components/Loading';
import SuggestionsCard from '../components/Suggestions/SuggestionsCard';
import useGetBlogs from '../hooks/useGetBlogs';

export default function Dashboard() {
  const [blogs, loading] = useGetBlogs();

 return (
    <div>
      <Header />

      <div className="container mx-auto p-5">
        <div>
          <h4 className="sticky top-0 bg-white py-2 font-bold text-lg">Your blogs</h4>
          {loading ? <Loading /> : blogs ? blogs.map((blog: any) => {
            return (<div key={blog.id} className="border border-t-0 border-r-0 border-l-0">
              <SuggestionsCard id={blog.id} user={blog.user} title={blog.title} thumbnail={blog.thumbnail} />
            </div>)
          }) : <p className="font-['Manrope'] text-sm">No contents</p>}
        </div>
      </div>
    </div>
  );
}
