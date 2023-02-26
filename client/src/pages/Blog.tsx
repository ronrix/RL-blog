import React, { useState, useEffect, useRef } from 'react'
import BlogContent from '../components/Blog/BlogContent'
import BlogFooter from '../components/Blog/BlogFooter'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import FloatingBlogFooter from '../components/Blog/FloatingBlogFooter'
import BlogHeader from '../components/Blog/BlogHeader'
import { useSelector } from 'react-redux'

export default function Blog() {
  const blog = useSelector((state: any) => state.blogs.blog);
  const [show, setShow] = useState<Boolean>(true);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(false);
        } else {
          setShow(true);
        }
      });
    });

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect;
    };
  }, []);

  return (
    <div>
        <Header />

        <div className="container mx-auto flex">
          <div className="flex-1 p-5 md:p-20  border border-r-gray-200 border-t-transparent border-l-transparent border-b-transparent ">
            <BlogHeader duration={blog.read_duration} avatar={blog.user.avatar} date={blog.createdAt} name={blog.user.username} />
            <h1 className="text-5xl font-bold">{blog.title}</h1>
            <h2 className="text-base font-bold">{blog.description}</h2>
            <BlogContent content={blog.content} />
            <BlogFooter footerRef={footerRef} />

            <FloatingBlogFooter show={show} />
          </div>

          <Sidebar user={blog.user} />
        </div>

        <Footer />
    </div>
  )
}
