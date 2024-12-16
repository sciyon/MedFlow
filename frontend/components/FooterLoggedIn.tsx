import Image from 'next/image'
import React from 'react'
import { MapPin, Phone, Calendar, Mail } from 'lucide-react'

const FooterLoggedIn = () => {
  return (
    <div className='w-full grid grid-cols-5 h-fit'>
      <div className="bg-secondary flex col-span-2 flex-row p-3 items-center">
        <Image
          className='ml-12 mr-8'
          src="/logo/symbolWhite.png"
          alt="Login image"
          width={50}
          height={50}
        />
          <h1 className='text-4xl font-bold font-gabarito'>MedFlow | Medical Clinic</h1>
      </div>

      
      <div className="bg-white flex col-span-3 flex-row p-3 text-secondary gap-3 items-center justify-between mx-2 text-sm">
        <div className="flex flex-row ">
          <MapPin />
          <div className="pl-2">Level 3, Room 309, Robinsons Cybergate, Cebu City</div>
        </div>
        <div className="flex flex-row">
          <Phone />
          <div className="pl-2">(032) 233 9090</div>
        </div>
        <div className="flex flex-row">
          <Calendar />
          <div className="pl-2">Sunday to Saturday 9 AM - 5 PM</div>
        </div>
        <div className="flex flex-row">
          <Mail />
          <div className="pl-2">office@medflowclinic.com</div>
        </div>
      </div>
    </div>
  )
}

export default FooterLoggedIn