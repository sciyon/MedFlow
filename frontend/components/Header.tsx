"use client"

import { User, LogOut } from 'lucide-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setUserId } from '@/lib/features/user/userSlice';


const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    // Remove the JWT token
    document.cookie = 'token=; path=/; Max-Age=0; SameSite=Lax; Secure';

    // Clear the Redux user context
    dispatch(setUserId(""));

    // Redirect to the root page
    router.push('/');
  };


  return (
    <div className='flex flex-row w-full text-secondary h-20'>
      <h1 className='w-3/5 flex justify-start items-center text-5xl pl-6 font-inter'>Page Title</h1>
      <div className='w-2/5 flex flex-row justify-end items-center'>
        <div className="h-fit w-fit p-1 rounded-full">
          <User  className='w-12 h-12'/>
        </div>
        <span className='mr-16'>User XXXXX</span>
        <button  onClick={handleLogout} className='bg-primary text-white text-2xl px-6 py-2 rounded-full hover:bg-cyan-600 flex flex-row justify-center items-center mr-12'>
          <LogOut />
          Logout
          </button>
      </div>
    </div>
  )
}

export default Header