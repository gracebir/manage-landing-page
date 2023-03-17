import React from 'react'

function AboutDetail() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4 ml-4 lg:ml-0 bg-bgPalered lg:bg-transparent'>
        <span className='bg-bgBright px-6 py-2 rounded-full font-semibold text-clLightGray'>01</span>
        <h3 className='text-clDarkBlue font-bold text-[1rem]'>Track company-wide progress</h3>
      </div>
      <p className='px-4 lg:px-0 font-semibold text-clGrayish text-[.9rem]'>
      See how your day-to-day tasks fit into the wider vision. Go from 
  tracking progress at the milestone level all the way done to the 
  smallest of details. Never lose sight of the bigger picture again.
      </p>
    </div>
  )
}

export default AboutDetail
