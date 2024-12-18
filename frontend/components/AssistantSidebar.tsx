import Link from 'next/link'
import React from 'react'
import { LayoutGrid, History, BookOpen, Calendar, UsersRound } from 'lucide-react'
import SideBarLogo from './SideBarLogo'

const AssistantSidebar = () => {
  return (
    <div className="flex flex-col bg-primary w-1/6 font-nunito gap-4">
      <Link href="/assistant" ><SideBarLogo /></Link>

      <Link href="/assistant" className="navbarlink">
        <LayoutGrid className='w-7 h-7'/>
        <span>Dashboard</span>
      </Link>

      <Link href="/assistant/appointment" className="navbarlink">
        <BookOpen className='w-7 h-7'/>
        <span>Booking</span>
      </Link>

      <Link href="/assistant/appointment/history" className="navbarlink">
        <History className='w-7 h-7'/>
        <span>History</span>
      </Link>

      <Link href="/assistant/calendar" className="navbarlink">
        <Calendar className='w-7 h-7'/>
        <span>Schedule</span>
      </Link>

      <Link href="/assistant/patients" className="navbarlink">
        <UsersRound className='w-7 h-7'/>
        <span>Patients</span>
      </Link>

    </div>
  )
}

export default AssistantSidebar
