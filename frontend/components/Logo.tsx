import React from 'react'
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='flex flex-row font-nunito-sans text-4xl font-bold mr-14 px-5 py-3 pr-10 bg-primary h-full'>
        <Image
          className=''
          src="/logo/symbolWhite.png"
          alt="Login image"
          width={80}
          height={60}
        />
        <p className="pt-9 font-gabarito">MedFlow</p>
    </div>
  )
}

export default Logo