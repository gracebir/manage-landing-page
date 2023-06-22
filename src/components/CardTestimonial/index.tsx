import React from 'react'
import { Ttestimonial } from '../type'

function Card({ desc, fullname, img }: Ttestimonial) {
    return (
        <div className='inline-flex flex-col lg:gap-4 gap-3 items-center whitespace-normal w-[600px] h-[30vh] m-2'>
            <img className='h-16 w-16 -mb-12 z-20' src={img} alt={fullname} />
            <div className='bg-gray-100 w-full px-4 py-12 flex flex-col gap-6 h-full'>
                <h3 className='text-center text-lg font-semibold text-clVdarkBlue'>{fullname}</h3>
                <p className='text-center text-clGrayish'>{desc}</p>
            </div>
        </div>
    )
}

export default Card
