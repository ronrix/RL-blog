import React from 'react'
import Header from '../components/Header'

export default function BlogForm() {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-5">
        <h4 className="text-lg font-bold py-3">Write new content</h4>

        <form action="">
          <textarea name="" className='border border-gray-200 outline-none w-full h-[500px]'></textarea>
          <div className='flex justify-end mt-5'>
            <button>Cancel</button>
            <button className="bg-green-600 hover:bg-green-500 p-3 rounded-full font-bold text-white px-8 ml-5">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}
