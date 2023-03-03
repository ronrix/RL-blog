import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Responses from '../../components/Responses';
import useGetBlog from '../../hooks/useGetBlog';
import { READ_COUNT } from '../../queries';
import Blog from './Blog'

export default function BlogPage() {
  const {data, loading} = useGetBlog();
  const [readCount] = useLazyQuery(READ_COUNT);

  const responseShow = useSelector((state: any) => state.response.value);

  async function handleReadCount() {
    await readCount({ variables: { blogId: data.getBlog.id }});
  }

  useEffect(() => {
    // if the user opens the blog 
    // it will add to the count of the user read the blog
    // if the read count increase up to 20+ it will set to the trend lists
    if(data && data.getBlog) {
      handleReadCount();
    }
  }, [data]);

  return (
    <div>
        <Header />
        { responseShow && <Responses /> }

        <div className="container mx-auto flex">
          <Blog data={data} loading={loading} />
        </div>

        <Footer />
    </div>
  )
}
