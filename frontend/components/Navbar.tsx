import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <header className='px-5 py-3 bg-slate shadow-sm'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Logo />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar