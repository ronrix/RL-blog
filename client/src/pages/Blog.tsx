import React, { useState, useEffect, useRef } from 'react'
import BlogContent from '../components/Blog/BlogContent'
import BlogFooter from '../components/Blog/BlogFooter'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import FloatingBlogFooter from '../components/Blog/FloatingBlogFooter'
import BlogHeader from '../components/Blog/BlogHeader'

export default function Blog() {

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
          <div className="flex-1 p-20  border border-r-gray-200 border-t-transparent border-l-transparent border-b-transparent ">
            <BlogHeader />
            <BlogContent />
            <BlogFooter footerRef={footerRef} />

            <FloatingBlogFooter show={show} />
          </div>

          <Sidebar />
        </div>

        <Footer />
    </div>
  )
}
