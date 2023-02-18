import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Search() {
  return (
    <div>
      <Header />
      <div className="container mx-auto h-screen p-5 md:p-0">
        <h2 className="">Recent Searches</h2>

        {/* searches */}
        <div className="mt-10">
          <h3>You have no recent searches</h3>
        </div>
      </div>
      <Footer />
    </div>
  )
}
