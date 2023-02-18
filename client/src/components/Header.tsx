import React from 'react'
import { Link } from 'react-router-dom';
import search from "../assets/search.svg";
import Button from './Button';
import Logo from './Logo';

export default function Header() {
  return (
    <div className="border border-b-gray-200 p-5 flex items-center justify-between">
        <div className="flex items-center">
            <Logo />
          
            {/* search */}
            <div className="ml-5 flex item-center rounded-full px-5 bg-gray-100">
                <img src={search} alt="this is an image of a search icon" />
                <input type="text" placeholder='Search RL' className="ml-3 bg-transparent border-none outline-none" />
            </div> 
        </div>
        {/* sign up */}
        <div>
            <Button>Sign up</Button>
            <Link to="/signin" className="px-4 uppercase font-['Manrope']">Sign in</Link>
        </div>
    </div>
  )
}
