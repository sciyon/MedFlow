import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <Image 
        src="/threeNurses.png"
        alt="Login image"
        layout="responsive"
        width={1438}
        height={400}
      />
      <h1 className='text-8xl text-secondary font-bold py-10 font-gabarito'>Services</h1>

      <p className='text-xl text-black px-20'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p className='text-xl text-black px-20 pt-12'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      <div className="grid grid-cols-3 gap-28 p-4 my-20">
        <div className="flex flex-col items-center">
          <Image 
            src="/services/schedule.png"
            alt="Login image"
            width={300}
            height={300}
          />
          <h1 className='text-secondary text-xl font-bold font-nunito pt-4'>Appointment Scheduling</h1>
        </div>
        
        <div className="flex flex-col items-center">
          <Image 
            src="/services/communication.png"
            alt="Login image"
            width={300}
            height={300}
          />
          <h1 className='text-secondary text-xl font-bold font-nunito pt-4'>Doctor-Patient Communication</h1>
        </div>
        
        <div className="flex flex-col items-center">
          <Image 
            src="/services/records.png"
            alt="Login image"
            width={300}
            height={300}
          />
          <h1 className='text-secondary text-xl font-bold font-nunito pt-4'>
            Medical Records Management
          </h1>
        </div>
        
        <div className="flex flex-col items-center">
          <Image 
            src="/services/prescription.png"
            alt="Login image"
            width={300}
            height={300}
          />
          <h1 className='text-secondary text-xl font-bold font-nunito pt-4'>
            Prescriptions
          </h1>
        </div>
        
        <div className="flex flex-col items-center">
          <Image 
            src="/services/management.png"
            alt="Login image"
            width={300}
            height={300}
          />
          <h1 className='text-secondary text-xl font-bold font-nunito pt-4'>
            State of the Art Technology
          </h1>
        </div>
        
        <div className="flex flex-col items-center">
          <Image 
            src="/services/virtual.png"
            alt="Login image"
            width={300}
            height={300}
          />
          <h1 className='text-secondary text-xl font-bold font-nunito pt-4'>
            Virtual Care
          </h1>
        </div>
      </div>
    </div>
  )
}

export default page