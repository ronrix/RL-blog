import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import UserBlogCard from '../components/UserBlogCard'

export default function Blog() {
  return (
    <div>
        <Header />

        <div className="container mx-auto flex">
            <div className="flex-1 p-5">
                <UserBlogCard />
                <h1 className="text-4xl font-bold tracking-tight">Sales Success Across a Screen — My New Course</h1>
            </div>
            <Sidebar />
        </div>
    </div>
  )
}
