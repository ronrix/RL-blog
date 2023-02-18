import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';
import Button from './Button';
import Logo from './Logo';

export default function Header() {
  const [showAuthModal, setShowAuthModal] = useState<{signin: boolean; signup: boolean}>({ signin: false, signup: false});

  function handleShowSignupModal() {
    console.log('clicked');
    setShowAuthModal({signin: false, signup: true});
  }

  function handleShowSigninModal() {
    console.log('clicked');
    setShowAuthModal({signup: false, signin: true});
  }

  function handleHidewAuthModal() {
    setShowAuthModal({ signin: false, signup: false });
  }

  return (
    <>
    {(showAuthModal.signin || showAuthModal.signup) && <AuthModal fnSignin={handleShowSigninModal} fnSignup={handleShowSignupModal} mode={showAuthModal} handleClick={handleHidewAuthModal} />}
      <div className="border border-b-gray-200 p-2 md:p-5 flex items-center justify-between">
          <div className="flex items-center">
              <Logo />
            
              {/* desktop search */}
              <div className="ml-5 hidden sm:flex item-center rounded-full px-5 bg-gray-100 py-2">
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
                  <input type="text" placeholder='Search RL' className="ml-3 bg-transparent outline-none text-sm" />
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

              <Button handleClick={handleShowSignupModal}>Sign up</Button>
              <Button handleClick={handleShowSigninModal} noBg={true} additionalClass={'ml-2'}>Sign in</Button>
          </div>
      </div>
    </>
  )
}
