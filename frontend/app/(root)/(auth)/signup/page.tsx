import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex h-full text-black m-8'>
        <div className="w-3/5 flex flex-col justify-start items-center">
            <div className="flex text-8xl font-bold mb-8">
              <h1>User</h1>
              <h1 className='text-primary pl-6 text-left'>Registration</h1>
            </div>
            <form action="" className="flex flex-col w-full p-5">
                <div className="flex flex-row w-full gap-2 pb-4">
                    <div className="flex flex-col w-2/5">
                        <label className='input-label'>
                            First Name
                        </label>
                        <input type="text"
                            className='input-field'
                            placeholder='Juan'
                        />
                    </div>
                    <div className="flex flex-col w-2/5">
                        <label className='input-label'>
                            Last Name
                        </label>
                        <input type="text"
                            className='input-field'
                            placeholder='Dela Cruz'
                        />
                    </div>
                    <div className="flex flex-col w-1/5">
                        <label className='input-label'>
                            Middle Name (Optional)
                        </label>
                        <input type="text"
                            className='input-field'
                            placeholder='N'
                        />
                    </div>
                </div>                
                <div className="flex flex-row w-full gap-2 pb-4">
                    <div className="flex flex-col w-3/5">
                        <label className='input-label'>
                            Email
                        </label>
                        <input type="text"
                            className='input-field'
                            placeholder='juandelacruz@gmail.com'
                        />
                    </div>
                    <div className="flex flex-col w-2/5">
                        <label className='input-label'>
                            Phone Number
                        </label>
                        <input type="text"
                            className='input-field'
                            placeholder='09123456789'
                        />
                    </div>
                </div>                
                <div className="flex flex-row w-full gap-2 pb-4">
                    <div className="flex flex-col w-2/4">
                        <label className='input-label'>
                            Password
                        </label>
                        <input type="password"
                            className='input-field'
                            placeholder='Juan'
                        />
                    </div>
                    <div className="flex flex-col w-2/4">
                        <label className='input-label'>
                            Confirm Password
                        </label>
                        <input type="password"
                            className='input-field'
                            placeholder='Dela Cruz'
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className='bg-primary text-white text-2xl px-6 py-2 rounded-full'>Submit</button>
                </div>
                
            </form>
        </div>
        <div className="w-2/5 h-3/4 rounded-lg">
            <Image 
                className='rounded-xl'
                src="/signup.jpg"
                alt="Login image"
                width={500}
                height={400}
            />
        </div>
    </div>
  )
}

export default page