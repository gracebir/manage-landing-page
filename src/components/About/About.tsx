import React from 'react'
import AboutDetail from '../AboutDetail/AboutDetail'

function About() {
  return (
    <div className='py-8 flex flex-col lg:flex-row gap-8 lg:container lg:mx-auto lg:py-36'>
      <div className='flex flex-col gap-6 lg:gap-8 items-center lg:items-start px-8'>
        <h2 className='font-bold text-4xl lg:text-5xl text-center lg:text-start text-clDarkBlue'>What’s different about Manage?</h2>
        <p className='text-center lg:text-start text-clGrayish lg:text-xl'>Manage provides all the functionality your team needs, without 
  the complexity. Our software is tailor-made for modern digital 
  product teams.</p>
      </div>
      <div className='flex flex-col gap-10'>
        <AboutDetail/>
        <AboutDetail/>
        <AboutDetail/>
      </div>
    </div>
  )
}

export default About
