import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="grid grid-cols-2 bg-white min-h-full w-full text-black pt-10 pb-24">
      <div className="flex flex-col justify-center items-center p-10">
          <div className="flex text-8xl font-bold mb-8">
            <h1>User</h1>
            <h1 className='text-primary pl-2'>Login</h1>
          </div>
          <form action="" className="flex flex-col items-center w-full gap-4">

              <input type="text"
                  className=' input-field w-2/3'
                  placeholder='juandelacruz@gmail.com'>
              </input>
              <input type="password"
                  className='input-field w-2/3'
                  placeholder='password'>
              </input>
              <div className="flex justify-between w-2/3">
                <div className="flex gap-2">
                    <input type="checkbox" />
                    <p>Remember me</p>
                </div>
                <Link href='/forgotpassword'>Forgot Password?</Link>
              </div>
              <div className="w-2/3 flex justify-end">
                  <button className='bg-primary text-white text-2xl px-6 py-2 rounded-full'>Submit</button>
              </div>
              
          </form>
          <div className="">
              <p className='text-center'>or</p>
              <div className="flex flex-row border-2 rounded-xl mt-4">
                  <Image
                      className='rounded mr-1'
                      src="/auth/google.png"
                      alt="Login image"
                      width={40}
                      height={40}
                  />
                  <button className='font-bold'>
                      Log in with Google
                  </button>
              </div>
              <div className="flex flex-row border-2 rounded-xl mt-4">
                  <Image
                      className='rounded mr-1'
                      src="/auth/facebook.png"
                      alt="Login image"
                      width={40}
                      height={40}
                  />
                  <button className='font-bold'>
                      Log in with Facebook
                  </button>
              </div>
          </div>
      </div>
      <div className="">
          <Image 
          className=''
          src="/login.png"
          alt="Login image"
          width={800}  // specify your desired width
          height={700} // specify your desired height
          />
      </div>
    </div>
  )
}

export default page