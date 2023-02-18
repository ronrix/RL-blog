import React from 'react'
import { Link } from 'react-router-dom';
import search from "../assets/search.svg";
import Button from './Button';
import Logo from './Logo';

export default function Header() {
  return (
    <div className="border border-b-gray-200 p-2 md:p-5 flex items-center justify-between">
        <div className="flex items-center">
            <Logo />
          
            {/* desktop search */}
            <div className="ml-5 hidden sm:flex item-center rounded-full px-5 bg-gray-100">
                <img src={search} alt="this is an image of a search icon" className="w-[10%]" />
                <input type="text" placeholder='Search RL' className="ml-3 bg-transparent outline-none text-sm" />
            </div> 
        </div>

        {/* sign up */}
        <div className="flex items-center">
            {/* mobile search */}
            <Link to="search" className="block sm:hidden">
              <img src={search} alt="this is an image of a search icon" className="mr-5 w-[50%]" />
            </Link>

            <Button>Sign up</Button>
            <Link to="/signin" className="px-4 uppercase font-['Manrope'] text-xs md:text-sm text-black">Sign in</Link>
        </div>
    </div>
  )
}
