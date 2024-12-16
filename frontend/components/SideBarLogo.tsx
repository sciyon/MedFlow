import React from 'react'
import Image from 'next/image';

const SideBarLogo = () => {
  return (
    <div className='flex flex-row font-nunito-sans text-4xl font-bold mr-14 px-5 py-3 pr-10 bg-primary'>
        <Image
          className=''
          src="/logo/symbolWhite.png"
          alt="Login image"
          width={80}
          height={60}
        />
        <p className="font-gabarito flex items-center justify-center">MedFlow</p>
    </div>
  )
}

export default SideBarLogo