import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import useGetBlog from '../../hooks/useGetBlog';
import { READ_COUNT } from '../../queries';
import Blog from './Blog'

export default function BlogPage() {
  const {data, loading} = useGetBlog();
  const [readCount] = useLazyQuery(READ_COUNT);

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

        <div className="container mx-auto flex">
          <Blog data={data} loading={loading} />
        </div>

        <Footer />
    </div>
  )
}
