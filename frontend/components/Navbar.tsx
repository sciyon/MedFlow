import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <header className='bg-slate shadow-sm col bg-white'>
      <nav className='flex'>
        <Link href='/' className='w-fit'>
          <Logo />
        </Link>
        <div className='flex px-5 py-3 gap-28 items-center text-black'>
            <Link href='/home' className='navbarlink'>
                Home
            </Link>
            <Link href='/services' className='navbarlink'>
                Services
            </Link>
            <Link href='/about' className='navbarlink'>
                About Us
            </Link>
            <Link href='/about' className='navbarlink'>
                Contact
            </Link>
        </div>
        <div className='flex gap-8 items-center ml-auto mr-8'>
          <Link href='/signup' className='text-2xl font-medium text-secondary'>
              Register
          </Link>
          <Link href='/login' className='text-2xl font-medium text-white bg-secondary rounded-full px-10 py-3'>
              Login
          </Link>
        </div>
      </nav>    
    </header>
  )
}

export default Navbar