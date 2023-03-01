import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import useRetrieveUser from '../hooks/useRetrieve';
import AuthModal from './AuthModal';
import Avatar from './Avatar';
import Button from './Button';
import Logo from './Logo';
export default function Header() {
  const authModal = useSelector((state: any) => state.authModal.mode);
  const userData = useSelector((state: any) => state.user?.value);

  useRetrieveUser();

  return (
    <>
    {(authModal.signin || authModal.signup) && <AuthModal mode={authModal} />}
      <div className="p-2 md:p-5 flex items-center justify-between bg-transparent">
          <div className="flex items-center">
              <Logo />
            
              {/* desktop search */}
              <div className="ml-5 hidden sm:flex item-center rounded-full px-5 bg-transparent py-2">
                  <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"> 
                      <title>icon 111 search</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketch:type="MSPage">
                          <g id="icon-111-search" sketch:type="MSArtboardGroup" fill="#000000">
                              <path d="M19.4271164,20.4271164 C18.0372495,21.4174803 16.3366522,22 14.5,22 C9.80557939,22 6,18.1944206 6,13.5 C6,8.80557939 9.80557939,5 14.5,5 C19.1944206,5 23,8.80557939 23,13.5 C23,15.8472103 22.0486052,17.9722103 20.5104077,19.5104077 L26.5077736,25.5077736 C26.782828,25.782828 26.7761424,26.2238576 26.5,26.5 C26.2219324,26.7780676 25.7796227,26.7796227 25.5077736,26.5077736 L19.4271164,20.4271164 L19.4271164,20.4271164 Z M14.5,21 C18.6421358,21 22,17.6421358 22,13.5 C22,9.35786417 18.6421358,6 14.5,6 C10.3578642,6 7,9.35786417 7,13.5 C7,17.6421358 10.3578642,21 14.5,21 L14.5,21 Z" id="search" sketch:type="MSShapeGroup"></path>
                          </g>
                      </g>
                  </svg>
                  <input type="text" placeholder='Search RL' className="ml-3 bg-transparent outline-none text-sm placeholder:text-black" />
              </div> 
          </div>

          {/* sign up */}
          <div className="flex items-center">
              {/* mobile search */}
              <Link to="search" className="block sm:hidden mr-5">
                  <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"> 
                      <title>icon 111 search</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketch:type="MSPage">
                          <g id="icon-111-search" sketch:type="MSArtboardGroup" fill="#000000">
                              <path d="M19.4271164,20.4271164 C18.0372495,21.4174803 16.3366522,22 14.5,22 C9.80557939,22 6,18.1944206 6,13.5 C6,8.80557939 9.80557939,5 14.5,5 C19.1944206,5 23,8.80557939 23,13.5 C23,15.8472103 22.0486052,17.9722103 20.5104077,19.5104077 L26.5077736,25.5077736 C26.782828,25.782828 26.7761424,26.2238576 26.5,26.5 C26.2219324,26.7780676 25.7796227,26.7796227 25.5077736,26.5077736 L19.4271164,20.4271164 L19.4271164,20.4271164 Z M14.5,21 C18.6421358,21 22,17.6421358 22,13.5 C22,9.35786417 18.6421358,6 14.5,6 C10.3578642,6 7,9.35786417 7,13.5 C7,17.6421358 10.3578642,21 14.5,21 L14.5,21 Z" id="search" sketch:type="MSShapeGroup"></path>
                          </g>
                      </g>
                  </svg>
              </Link>

              { Object.keys(userData).length ? (
                <>
                    <Link to="/u/write-blog" className='text-black'>
                        <i className="fa-regular fa-pen-to-square text-lg mr-3 hover:text-gray-500 cursor-pointer"></i>
                    </Link>
                    <h3 className='hidden sm:block m-0 p-0 capitalize'>Welcome, {userData.username.split(" ")[0]}</h3>
                    <Avatar imgSrc={userData?.avatar} />
                </>
                ) : (
                <>
                    <Button mode={"signup"}>Sign up</Button>
                    <Button mode={"signin"} noBg={true} additionalClass={'ml-2'}>Sign in</Button>
                </>
                )}
          </div>
      </div>
    </>
  )
}
