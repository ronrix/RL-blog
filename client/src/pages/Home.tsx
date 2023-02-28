import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loading from '../components/Loading'
import SuggestionsFooter from '../components/Suggestions/SuggestionsFooter'
import Trending from '../components/Trending'
import useGetAllBlogs from '../hooks/useGetAllBlogs'
import { toggleAuthModal } from '../state/slice/authModalSlice'

export default function Home() {
  const [blogs, loading] = useGetAllBlogs();
  const dispatch = useDispatch();

  return (
    <div>
      <div className='bg-[#ffc017] '>
        <div className="border border-b-gray-900 border-t-0 border-r-0 border-l-0">
          <div className="container mx-auto ">
            <Header />
          </div>
        </div>
        <div className='container mx-auto py-14 px-5'>
          {/* hero section */}
          <h1 className='font-["labrada"] text-6xl sm:text-8xl'>Stay curious.</h1>
          <p className="w-[50%] md:w-[30%] my-8 leading-6">Discover stories, thinking, and expertise from writers on any topic.</p>

          <button onClick={() => dispatch(toggleAuthModal("signup"))} className="bg-black text-white font-bold py-3 px-10 rounded-full text-xl font-['Manrope']">Start reading</button>
        </div>
      </div>

      {/* trending blogs */}
      <div className="border border-b-gray-300 border-t-0 border-r-0 border-l-0 p-5">
        <div className='container mx-auto py-10'>
          <h5 className="text-base font-bold">
            <i className="fa-solid fa-arrow-trend-up text-base mr-3"></i>
            Trending on RL
          </h5>

          <div className="grid grid-cols-1 w-full sm:w-auto sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center mt-5">
            <Trending top={1} />
            <Trending top={2} />
            <Trending top={3} />
            <Trending top={4} />
            <Trending top={5} />
            <Trending top={6} />
          </div>
        </div>
      </div>

    {/* suggestions and sidebar */}
      <div className='container mx-auto mt-10 flex gap-10 p-5 sm:p-0'>
        {/* suggestions */}
        <div className='w-full lg:w-[50%] mb-5'>
          {loading ? <Loading /> : blogs ? blogs?.map((blog: any, key: any) => {
            return <BlogCard key={key} blog={blog} />
          }) : <p className="font-['Manrope'] text-sm">No blogs have been created yet!</p>}
        </div>
        {/* sidebar */}
        <div className='hidden lg:flex flex-col h-[500px] w-[500px] sticky top-0'>
          <h4 className='font-bold'>Discover more of what matters to you</h4>

          {/* categories */}
          <div>
            <div className='flex flex-wrap gap-3 mt-5'>
              <Link to="/category/" className='px-4 py-2 text-gray-500 border rounded font-[Manrope] text-sm'>Programming</Link>
              <Link to="/category/" className='px-4 py-2 text-gray-500 border rounded font-[Manrope] text-sm'>Data Science</Link>
              <Link to="/category/" className='px-4 py-2 text-gray-500 border rounded font-[Manrope] text-sm'>Technology</Link>
              <Link to="/category/" className='px-4 py-2 text-gray-500 border rounded font-[Manrope] text-sm'>Self improvement</Link>
              <Link to="/category/" className='px-4 py-2 text-gray-500 border rounded font-[Manrope] text-sm'>Writing</Link>
              <Link to="/category/" className='px-4 py-2 text-gray-500 border rounded font-[Manrope] text-sm'>Relationships</Link>
              <Link to="/category/" className='px-4 py-2 text-gray-500 border rounded font-[Manrope] text-sm'>Machine learning</Link>
              <Link to="/category/" className='px-4 py-2 text-gray-500 border rounded font-[Manrope] text-sm'>Prodcutivity</Link>
              <Link to="/category/" className='px-4 py-2 text-gray-500 border rounded font-[Manrope] text-sm'>Politics</Link>
            </div>
            <SuggestionsFooter />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
