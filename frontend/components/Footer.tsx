import Image from 'next/image'
import React from 'react'
import { MapPin, Phone, Calendar, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <div className='w-full grid grid-cols-2 h-32'>
      <div className="bg-primary flex flex-row p-5">
        <Image
          className='ml-12 mr-8'
          src="/logo/symbolWhite.png"
          alt="Login image"
          width={120}
          height={100}
        />
        <div className="">
          <h1 className='text-3xl font-bold font-gabarito'>MedFlow | Medical Clinic</h1>
          <p className='text-sm pt-2 font-nunito'>At MedFlow Clinic, we are dedicated to providing compassionate and comprehensive healthcare services to individuals and families. Our team of experienced medical professionals is committed to delivering personalized care tailored to meet each patient's unique needs. Your health is our priority, and we strive to create a welcoming environment where trust, respect, and quality care come first.</p>
        </div>
      </div>

      
      <div className="bg-white flex flex-col p-5 text-secondary gap-3">
        <div className="flex flex-row">
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

export default Footer