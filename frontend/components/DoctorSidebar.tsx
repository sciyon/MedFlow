import Link from 'next/link'
import React from 'react'
import { LayoutGrid, History, BookOpen, Calendar, UsersRound, UserCog, Settings } from 'lucide-react'
import SideBarLogo from './SideBarLogo'

const DoctorSidebar = () => {
  return (
    <div className="flex flex-col bg-primary w-1/6 font-nunito gap-4">
      <Link href="/patient/" ><SideBarLogo /></Link>

      <Link href="/patient/" className="navbarlink">
        <LayoutGrid className='w-7 h-7'/>
        <span>Dashboard</span>
      </Link>

      <Link href="/patient/appointmenthistory" className="navbarlink">
        <BookOpen className='w-7 h-7'/>
        <span>Booking</span>
      </Link>

      <Link href="/patient/appointmenthistory" className="navbarlink">
        <History className='w-7 h-7'/>
        <span>History</span>
      </Link>

      <Link href="/patient/appointmenthistory" className="navbarlink">
        <Calendar className='w-7 h-7'/>
        <span>Schedule</span>
      </Link>

      <Link href="/patient/appointmenthistory" className="navbarlink">
        <UsersRound className='w-7 h-7'/>
        <span>Patients</span>
      </Link>

      <Link href="/patient/appointmenthistory" className="navbarlink">
        <Settings className='w-7 h-7'/>
        <span>Settings</span>
      </Link>

      <Link href="/patient/appointmenthistory" className="navbarlink">
        <UserCog className='w-7 h-7'/>
        <span>Staff</span>
      </Link>

    </div>
  )
}

export default DoctorSidebar
