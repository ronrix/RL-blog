import React from 'react'
import { Link } from 'react-router-dom';
import search from "../assets/search.svg";
import Button from './Button';

export default function Header() {
  return (
    <div className="border border-b-gray-200 p-5 flex items-center justify-between">
        <div className="flex items-center">
            {/* logo */}
            <div className="px-8">
                <h5 className="font-bold text-2xl">RL</h5>
            </div>
            {/* search */}
            <div className="ml-5 flex item-center rounded-full p-2 bg-gray-100">
                <img src={search} alt="this is an image of a search icon" />
                <input type="text" placeholder='Search RL' className="ml-3 bg-transparent border-none outline-none" />
            </div> 
        </div>
        {/* sign up */}
        <div>
            <Button>Sign up</Button>
            <Link to="/signin" className="px-4 uppercase">Sign in</Link>
        </div>
    </div>
  )
}
