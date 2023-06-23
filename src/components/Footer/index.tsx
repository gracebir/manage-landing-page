import logo from '../../assets/footerlogo.svg'
import youtube from '../../assets/icon-youtube.svg'
import { BsTwitter, BsPinterest, BsInstagram } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'
// 242D52
function Footer() {
  return (
    <footer className='bg-bgDarkBlue w-full'>
      <div className='container mx-auto py-16 px-4 lg:px-0 fill-white flex lg:justify-between lg:flex-row flex-col-reverse gap-8 lg:gap-0'>
        <div className='flex lg:flex-col gap-8 items-center lg:items-start justify-between flex-col-reverse col-span-1'>
          <p className='text-gray-400 lg:hidden block'>Copyright 2020. All Rights Reserved</p>
          <img className='lg:w-40 w-48' src={logo} alt="logofooter" />
          <div className='flex lg:gap-4 gap-6'>
            <AiFillFacebook size={25} className='text-white h-8 w-8 lg:h-6 lg:w-6 hover:text-red-color cursor-pointer' />
            <img src={youtube} className='h-8 w-8 lg:h-6 lg:w-6 hover:fill-red-color cursor-pointer' alt="" />
            <BsTwitter size={25} className='text-white h-8 w-8 lg:h-6 lg:w-6 hover:text-red-color cursor-pointer' />
            <BsPinterest size={25} className='text-white h-8 w-8 lg:h-6 lg:w-6 hover:text-red-color cursor-pointer' />
            <BsInstagram size={25} className='text-white h-8 w-8 lg:h-6 lg:w-6 hover:text-red-color cursor-pointer' />
          </div>
        </div>
        <div className='lg:col-span-3 col-span-1 grid lg:grid-cols-3 gap-8  grid-cols-1'>
          <div className='flex lg:hidden flex-col justify-between'>
            <div className='flex gap-3 mx-auto'>
              <div>
                <input className="px-4 py-3 text-red-color outline-none border hover:border-red-color rounded-full placeholder:text-gray-400" type="email" placeholder='Update in your inbox...' />
              </div>
              <button className='bg-red-color px-5 py-2 rounded-full text-white'>Go</button>
            </div>
            <p className='text-gray-400 lg:block hidden'>Copyright 2020. All Rights Reserved</p>
          </div>
          <div className='lg:col-span-2 grid grid-cols-2 justify-items-center lg:justify-items-start'>
            <div className='flex flex-col gap-3'>
              {["Home", "Pricing", "Products", "About Us"]
                .map((item) => (
                  <a className='text-white hover:text-red-color' key={item} href="#">{item}</a>
                ))
              }
            </div>
            <div className='flex flex-col gap-3'>
              {["Careers", "Community", "Privacy Policy"]
                .map((item) => (
                  <a className='text-white hover:text-red-color' key={item} href="#">{item}</a>
                ))
              }
            </div>
          </div>

          <div className='hidden lg:flex flex-col justify-between'>
            <div className='flex gap-3'>
              <div>
                <input className="px-4 py-3 text-red-color outline-none border hover:border-red-color rounded-full placeholder:text-gray-400" type="email" placeholder='Update in your inbox...' />
              </div>
              <button className='bg-red-color px-5 py-2 rounded-full text-white'>Go</button>
            </div>
            <p className='text-gray-400 lg:block hidden'>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
