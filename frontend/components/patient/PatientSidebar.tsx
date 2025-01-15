import Link from 'next/link'
import React from 'react'
import { BookUser, LayoutGrid, History, BookOpen } from 'lucide-react'
import SideBarLogo from '../SideBarLogo'

const PatientSidebar = () => {
  return (
    <div className="flex flex-col bg-primary w-1/6 font-nunito gap-4">
      <Link href="/patient/" ><SideBarLogo /></Link>

      <Link href="/patient/" className="navbarlink">
        <LayoutGrid className='w-7 h-7'/>
        <span>Dashboard</span>
      </Link>

      <Link href="/patient/appointment" className="navbarlink">
        <BookOpen className='w-7 h-7'/>
        <span>Booking</span>
      </Link>

      <Link href="/patient/appointment/history" className="navbarlink">
        <History className='w-7 h-7'/>
        <span>History</span>
      </Link>

      <Link href="/patient/info" className="navbarlink">
        <BookUser className='w-7 h-7'/>
        <span>Information</span>
      </Link>

    </div>
  )
}

export default PatientSidebar
