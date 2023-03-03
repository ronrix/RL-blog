import React from 'react'
import Header from '../components/Header'
import Logo from '../components/Logo'

export default function About() {
  return (
    <div>
      <div className="border border-b-gray-900 border-t-0 border-r-0 border-l-0">
        <div className="container mx-auto ">
          <Header />
        </div>
      </div>

      <div className="border border-b-gray-900 border-t-0 border-r-0 border-l-0">
        <div className="container mx-auto my-14">
          <h1 className='font-[Labrada] text-7xl lg:text-8xl text-center'>Every idea needs an <span className='font-[labrada] font-bold'>RL.</span></h1>
        </div>
      </div>

      <div className="border border-b-gray-900 border-t-0 border-r-0 border-l-0">
        <div className="container mx-auto my-14 p-5">
          <p className='font-[Manrope] text-lg'>The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.</p>
          <p className='font-[Manrope] text-lg'>We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.</p>
        </div>
      </div>

    <div className='bg-[#FFD1B9] p-5 m-0'>
      <h2 className='text-5xl lg:text-8xl text-center m-0 font-[labrada] w-full md:w-[70%] mx-auto'>A living network of curious minds.</h2>
      <p className='w-full md:w-[60%] mx-auto text-center mt-7 text-xl font-[Manrope]'>Anyone can write on Medium. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinking here. You’ll find pieces by independent writers from around the globe, stories we feature and leading authors, and smart takes on our own suite of blogs and publications.</p>
    
      {/* 10 users */}
      <ul></ul>
    </div>

    <div className='bg-black p-0 m-0 pb-10'>
      <div className='container mx-auto flex flex-col md:flex-row'>
        <div className='border-2 border-t-0'>
          <h3 className='text-center md:text-left text-5xl md:text-8xl text-white p-5 font-[Labrada]'>Over 100 million readers and growing.</h3>
        </div>
        {/* a carousel, will show testimonies or feedbacks */}
        <div className="p-5 border border-x-0 border-y-0 border-b-2 border-r-2 text-center">
          <img className='w-[200px] mx-auto md:m-0 p-0' src="https://cdn-static-1.medium.com/sites/medium.com/about/images/About_Leon-1.png" alt="avatar of the user feedbacks" />
          <h4 className='m-0 font-[Manrope] text-lg text-white mt-5'>"There’s no other place that combines such an excellent level of writing with a truly engaged and active community. Medium is truly where ideas are born, shared, and spread."</h4>
          <p className='m-0 font-[labrada] text-lg text-center md:text-left text-white mt-10'>Jasmine Bina</p>
        </div>
      </div>

      <div className='p-5'>
        <h2 className='mt-20 text-white text-5xl lg:text-8xl text-center m-0 font-[labrada] w-full md:w-[70%] mx-auto'>Create the space for your thinking to take off.</h2>
        <p className='text-white w-full md:w-[40%] mx-auto text-center mt-7 text-xl font-[Manrope]'>A blank page is also a door. At Medium you can walk through it. It's easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for your work.</p>
      </div>
    </div>

    <div className="border border-b-gray-900 border-t-0 border-r-0 border-l-0">
      <div className="container mx-auto my-14 p-5 flex flex-col items-center justify-center ">
        <h4 className='mt-20 text-5xl lg:text-8xl text-center m-0 font-[labrada] w-full md:w-[70%] mx-auto'>Read, write, and expand your world.</h4>
        <button className='px-8 p-2 text-white bg-green-500 font-medium rounded-full mt-20'>Get started</button>
      </div>
    </div>

    <div className='container mx-auto p-5 flex items-center justify-center'>
      <Logo />
    </div>

    </div>
  )
}
