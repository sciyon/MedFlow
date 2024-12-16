import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <header className='bg-slate shadow-sm col bg-white'>
      <nav className='flex'>
        <Link href='/' className='w-fit'>
          <Logo />
        </Link>
        <div className='flex px-5 py-3 gap-28 items-center font-montserrat font-medium text-secondary text-lg'>
            <Link href='/' className='navbarlink'>
                Home
            </Link>
            <Link href='/services' className='navbarlink'>
                Services
            </Link>
            <Link href='/about' className='navbarlink'>
                About Us
            </Link>
            <Link href='/contact' className='navbarlink'>
                Contact
            </Link>
        </div>
        <div className='flex gap-8 items-center ml-auto mr-8'>
          <Link href='/signup' className='text-base font-medium text-secondary'>
              Register
          </Link>
          <Link href='/login' className='text-base font-medium text-white bg-secondary rounded-full px-10 py-3'>
              Login
          </Link>
        </div>
      </nav>    
    </header>
  )
}

export default Navbar