import React, { useState } from 'react'
import Header from '../components/Header'
import Info from '../components/Info';

export default function BlogForm() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <Header />

      <div className="container mx-auto p-5">
        <h4 className="text-lg font-bold mt-3 mb-0">Write new content</h4>

        <form action="">
          <p className="font-['Manrope'] text-sm m-0 mb-2">
            Use marked format to create your content
            <i className="fa-solid fa-circle-info ml-3 cursor-pointer relative" onClick={() => setShow(!show)}>
              {show && <Info />}
            </i>
          </p>
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
