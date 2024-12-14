import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full flex flex-row p-6'>
        <div className="w-3/5 pr-12 flex items-center justify-center">
            <Image 
                className='rounded-3xl'
                src="/clinic.jpg"
                alt="Medical checkup"
                width={900}  // specify your desired width
                height={400} // specify your desired height
            />
        </div>
        <div className="w-1/2 text-black pr-5">
            <h1 className='text-8xl pt-6 font-gabarito font-bold'>A Medical Clinic</h1>
            <h1 className='text-8xl font-gabarito font-bold text-primary'>you can trust</h1>
            <p className='text-lg pt-5 font-nunito'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button className='mt-8 bg-primary h-fit w-fit p-3 rounded-2xl text-4xl text-white font-montserrat font-medium'>Book Now</button>
        </div>
    </div>
  )
}

export default page