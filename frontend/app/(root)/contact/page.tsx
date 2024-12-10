import Image from 'next/image'
import React from 'react'

const contact = () => {
  return (

    <div className='w-full flex flex-col items-center'>
      <Image 
        src="/threeNurses.png"
        alt="Login image"
        layout="responsive"
        width={1438}
        height={400}
      />
    </div>
  )
}

export default contact