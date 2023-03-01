import React, { useRef, useState } from 'react'
import BlogContent from '../components/Blog/BlogContent'
import BlogFooter from '../components/Blog/BlogFooter'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import FloatingBlogFooter from '../components/Blog/FloatingBlogFooter'
import BlogHeader from '../components/Blog/BlogHeader'
import useTargetElement from '../hooks/useTargetElement'
import Loading from '../components/Loading'
import useGetBlog from '../hooks/useGetBlog'
import NotFound from '../components/404'

export default function Blog() {  
  const {data, loading} = useGetBlog();
  const footerRef = useRef<HTMLDivElement>(null);
  const [fullReload, setFullReload] = useState<boolean>(false);
  const show = useTargetElement(footerRef, fullReload);

  function renderFullReload() {
    setFullReload(true);
  }

  if(!data && loading) return <Loading />

  return (
    <div>
        <Header />

        <div className="container mx-auto flex">
          {/*  check if blog is empty, then it will redirect to notfound page */}
          {!data?.getBlog ? (
            <div className='flex items-center justify-center w-full p-5'>
                <NotFound />
            </div>)  : (
            <>
              <div className="flex-1 p-5 md:p-20  border border-r-gray-200 border-t-transparent border-l-transparent border-b-transparent ">
                <BlogHeader duration={data.getBlog.read_duration} avatar={data.getBlog.user.avatar} date={data.getBlog.createdAt} name={data.getBlog.user.username} />
                <h1 className="text-5xl font-bold capitalize">{data.getBlog.title}</h1>
                <h2 className="text-base font-bold">{data.getBlog.description}</h2>
                <BlogContent content={data.getBlog.content} />
                <BlogFooter footerRef={footerRef} reload={renderFullReload} />

                <FloatingBlogFooter show={show}  />
              </div>

              <Sidebar user={data.getBlog.user} />
            </>
          )}
        </div>

        <Footer />
    </div>
  )
}
