import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full h-full flex flex-row p-6'>
        <div className="w-1/2 text-black pr-5">
            <h1 className='text-7xl font-bold pt-12'>A Medical Clinic that</h1>
            <h1 className='text-7xl font-bold text-primary'>You can trust</h1>
            <p className='text-xl pt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button className='mt-8 bg-primary h-fit w-fit p-3 rounded-2xl text-4xl text-white'>Book Now!</button>
        </div>
        <div className="w-3/5">
            <Image 
                className=''
                src="/standing.png"
                alt="Login image"
                width={1000}  // specify your desired width
                height={700} // specify your desired height
            />
        </div>
    </div>
  )
}

export default page