import { useLazyQuery } from '@apollo/client';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer'
import Header from '../components/Header'
import { SEARCH_QUERY } from '../queries';
import { searchQuery } from '../state/slice/searchSlice';

export default function Search() {
  const searchResults = useSelector((state: any) => state.search?.value);
  const recentSearches = localStorage.getItem("recent_searches");

  const [search] = useLazyQuery(SEARCH_QUERY);
  const dispatch = useDispatch();

  async function handleReSearch(e: React.MouseEvent<HTMLParagraphElement>) {
    // query the search input value
    const {data} = await search({ variables: { searchQuery: (e.target as HTMLParagraphElement).textContent }});
    dispatch(searchQuery(data.search));
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto h-screen p-5 md:p-0">
        {/* search input */}
        <div className="border rounded-full p-2 flex items-center sm:hidden">
           <svg width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"> 
                <title>icon 111 search</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketch:type="MSPage">
                    <g id="icon-111-search" sketch:type="MSArtboardGroup" fill="#000000">
                        <path d="M19.4271164,20.4271164 C18.0372495,21.4174803 16.3366522,22 14.5,22 C9.80557939,22 6,18.1944206 6,13.5 C6,8.80557939 9.80557939,5 14.5,5 C19.1944206,5 23,8.80557939 23,13.5 C23,15.8472103 22.0486052,17.9722103 20.5104077,19.5104077 L26.5077736,25.5077736 C26.782828,25.782828 26.7761424,26.2238576 26.5,26.5 C26.2219324,26.7780676 25.7796227,26.7796227 25.5077736,26.5077736 L19.4271164,20.4271164 L19.4271164,20.4271164 Z M14.5,21 C18.6421358,21 22,17.6421358 22,13.5 C22,9.35786417 18.6421358,6 14.5,6 C10.3578642,6 7,9.35786417 7,13.5 C7,17.6421358 10.3578642,21 14.5,21 L14.5,21 Z" id="search" sketch:type="MSShapeGroup"></path>
                    </g>
                </g>
            </svg>

            <input type="text" placeholder='Search RL' className='border-none outline-none w-full ml-3' />
        </div>

        <h2>Recent Searches</h2>

        {/* searches */}
        <div className="mt-2 mb-10">
          {recentSearches ? JSON.parse(recentSearches).map((s: any) => {
            return <p onClick={handleReSearch} className='font-[Manrope] text-base mb-0 m-0 cursor-pointer p-2 hover:bg-gray-100'>{s}</p>
          }) : <h3 className='m-0'>You have no recent searches</h3>
        }
        </div>

        <h3 className='font-bold text-xl'>Results</h3>
        {searchResults.length ? searchResults.map((result: any) => {
          return (
            <div className='shadow-sm'>
              <BlogCard blog={result} key={result.id} />
            </div>
          )
        }) : <p className='font-[Manrope] text-base mt-3'>No results</p>}

      </div>
      <Footer />
    </div>
  )
}
