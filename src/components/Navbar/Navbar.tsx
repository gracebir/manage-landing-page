import React from 'react'
import logo from '../../assets/logo.svg'
import NavMob from '../NavMob/NavMob';

const navitem = [
    'Pricing',
    'Product',
    'About Us',
    'Careers',
    'Community'
]

function Navbar() {
    const [open, setOpen ] = React.useState(false)
    const handleOpen = () => setOpen(!open);
  return (
    <header className='lg:container mx-auto px-6 py-10 flex justify-between items-center z-40'>
      <img src={logo} alt="logo" />
      {/* hamburger menu */}
      <div onClick={handleOpen} className='w-7 h-7 flex flex-col gap-1 cursor-pointer lg:hidden justify-center items-center'>
        <div className={`h-1 bg-bgDarkBlue transition-all ease-in duratin-300 w-full ${open ? 'rotate-[-45deg] translate-x-[-5px] translate-y-[8px]': 'rotate-0'}`}></div>
        <div className={`h-1 bg-bgDarkBlue transition-all ease-in duration-300 w-full ${open ? 'opacity-0': 'opacity-1'}`}></div>
        <div className={`h-1 bg-bgDarkBlue transition-all ease-in duratin-300 w-full ${open ? 'rotate-[45deg] translate-x-[-5px] translate-y-[-8px]': 'rotate-0'}`}></div>
      </div>
      {open && (
        <NavMob/>
      )}
      <nav className='hidden lg:flex lg:gap-10 text-clDarkBlue list-none z-40'>
      {navitem.map((link,i)=> (
      <li key={i}><a href={`#${link}`} className='text-clDarkBlue transition ease-in duration-300 text-lg hover:text-clGrayish'>{link}</a></li>
      ))}
      </nav>
      <a className='hidden lg:block px-6 py-3 bg-bgBright text-white font-bold rounded-full shadow-xl z-40' href="#getstarted">Get Started</a>
    </header>
  )
}

export default Navbar
