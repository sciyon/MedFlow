import { User } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row w-full text-secondary h-20'>
      <h1 className='w-3/5 flex justify-start items-center text-5xl pl-6 font-inter'>Page Title</h1>
      <div className='w-3/5 flex flex-row justify-end items-center pr-24'>
        <div className="h-fit w-fit p-1 rounded-full">
          <User  className='w-12 h-12'/>
        </div>
        <span>Patient XXXXX</span>
      </div>
    </div>
  )
}

export default Header