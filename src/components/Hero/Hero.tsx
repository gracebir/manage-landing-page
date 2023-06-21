import React from 'react'
import illustration from '../../assets/illustration-intro.svg'

function Hero() {
  return (
    <div className='lg:pt-10 relative flex flex-col-reverse items-center gap-4 px-6 lg:container lg:px-0 lg:mx-auto lg:flex-row z-30 lg:justify-between'>
        <div className='flex flex-col items-center gap-4 text-center lg:text-start lg:items-start lg:w-[33rem]'>
            <h1 className='text-4xl lg:text-6xl font-bold leading-[1.3] lg:leading-[1.3] text-clDarkBlue'>Bring everyone together to build better products.</h1>
            <p className='text-[1.3rem] lg:text-2xl text-clGrayish leading-[1.5] ' > Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <a href="#getstarted" className='bg-bgBright text-clLightGray font-bold px-8 py-3 rounded-full shadow-2xl mt-6 hover:bg-bgPalered'>Get Started</a>
        </div>
        <div className='lg:w-[50rem] lg:h-[40rem]'>
            <img className='lg:w-full object-contain' src={illustration} alt="" />
        </div>
    </div>
  )
}

export default Hero
