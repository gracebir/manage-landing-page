import React from 'react'

const navitem = [
    'Pricing',
    'Product',
    'About Us',
    'Careers',
    'Community'
]

function NavMob() {
  return (
    <div className='bg-black bg-opacity-30 fixed z-[9999] bottom-0 left-0 right-0 top-[10%] flex justify-center py-2 lg:hidden'>
      <div className='bg-clLightGray w-[88%] h-[42vh] flex flex-col gap-8 items-center rounded-md shadow-lg py-8 list-none'>
        {navitem.map((item, i)=> (
            <li key={i} className="font-semibold text-clVdarkBlue text-2xl">{item}</li>
        ))}
      </div>
    </div>
  )
}

export default NavMob
