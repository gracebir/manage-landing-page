import React from 'react'
import logo from '../../assets/logo.svg'

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
    <header className='container mx-auto px-6 py-10 flex justify-between items-center'>
      <img src={logo} alt="logo" />
      {/* hamburger menu */}
      <div onClick={handleOpen} className='border w-7 h-7 flex flex-col gap-1 cursor-pointer lg:hidden justify-center items-center'>
        <div className={`h-1 bg-bgDarkBlue transition-all ease-in duratin-300 w-full ${open ? 'rotate-[45deg]': 'rotate-0'}`}></div>
        <div className={`h-1 bg-bgDarkBlue transition-all ease-in duration-300 w-full ${open ? 'opacity-0': 'opacity-1'}`}></div>
        <div className={`h-1 bg-bgDarkBlue transition-all ease-in duratin-300 w-full ${open ? 'rotate-[-45deg]': 'rotate-0'}`}></div>
      </div>
      <nav className='hidden lg:flex lg:gap-4 text-clDarkBlue list-none'>
      {navitem.map((link,i)=> (
      <li key={i}><a href={`#${link}`} className='text-clDarkBlue transition ease-in duration-300 hover:text-clGrayish'>{link}</a></li>
      ))}
      </nav>
      <a className='hidden lg:block px-6 py-3 bg-bgBright text-white font-bold rounded-full shadow-xl' href="#getstarted">Get Started</a>
    </header>
  )
}

export default Navbar
