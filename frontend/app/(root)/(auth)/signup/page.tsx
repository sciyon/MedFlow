import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='grid grid-cols-3 h-full w-full text-black m-8'>
        <div className="col-span-2 flex flex-col justify-start items-center px-14">
            <div className="flex text-8xl font-bold mb-8 justify-start font-gabarito">
              <h1>User</h1>
              <h1 className='text-primary pl-6 text-left'>Registration</h1>
            </div>
            <form action="" className="flex flex-col w-full p-5">
                <div className="flex flex-row w-full gap-2 pb-4">
                    <div className="flex flex-col w-2/5">
                        <label className='text-secondary font-nunito text-lg font-semibold'>
                            First Name *
                        </label>
                        <input type="text"
                            className='input-field'
                            placeholder='Juan'
                        />
                    </div>
                    <div className="flex flex-col w-2/5">
                        <label className='text-secondary font-nunito text-lg font-semibold'>
                            Last Name *
                        </label>
                        <input type="text"
                            className='input-field'
                            placeholder='Dela Cruz'
                        />
                    </div>
                    <div className="flex flex-col w-1/5">
                        <label className='text-secondary font-nunito text-lg font-semibold'>
                            Middle Name
                        </label>
                        <input type="text"
                            className='input-field'
                            placeholder='N'
                        />
                    </div>
                </div>                
                <div className="flex flex-row w-full gap-2 pb-4">
                    <div className="flex flex-col w-3/5">
                        <label className='text-secondary font-nunito text-lg font-semibold'>
                            Email *
                        </label>
                        <input type="text"
                            className='input-field'
                            placeholder='juandelacruz@gmail.com'
                        />
                    </div>
                    <div className="flex flex-col w-2/5">
                        <label className='text-secondary font-nunito text-lg font-semibold'>
                            Phone Number *
                        </label>
                        <input type="text"
                            className='input-field'
                            placeholder='09123456789'
                        />
                    </div>
                </div>                
                <div className="flex flex-row w-full gap-2 pb-4">
                    <div className="flex flex-col w-2/4">
                        <label className='text-secondary font-nunito text-lg font-semibold'>
                            Password *
                        </label>
                        <input type="password"
                            className='input-field'
                            placeholder='Juan'
                        />
                    </div>
                    <div className="flex flex-col w-2/4">
                        <label className='text-secondary font-nunito text-lg font-semibold'>
                            Confirm Password *
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
                        Sign up with Google
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
                        Sign up with Facebook
                    </button>
                </div>
            </div>
        </div>
        <div className="rounded-lg">
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