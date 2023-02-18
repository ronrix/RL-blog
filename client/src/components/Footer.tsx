import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <div className="bg-black p-5 relative">
        <div className="flex">
            <Logo color="white" />
        </div>
        

        <nav className="ml-8">
            <Link to="about" className="text-white text-lg font-['Manrope'] hover:underline" >About</Link>
            <Link to="help" className="text-white text-lg font-['Manrope'] mx-5 hover:underline" >Help</Link>
            <Link to="terms" className="text-white text-lg font-['Manrope'] mr-5 hover:underline" >Terms</Link>
            <Link to="privacy" className="text-white text-lg font-['Manrope'] hover:underline" >Privacy</Link>
        </nav>
    </div>
  )
}
