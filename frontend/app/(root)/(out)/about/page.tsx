import Image from 'next/image'
import React from 'react'
import { Scale, GraduationCap, HardHat, Heart, ListChecks, BicepsFlexed } from 'lucide-react'

const contact = () => {
  return (

    <div className='w-full flex flex-col items-center'>
      <Image 
        src="/about/stethoscope.png"
        alt="Login image"
        layout="responsive"
        width={1438}
        height={400}
      />
      <h1 className='text-8xl text-secondary font-bold py-10 font-gabarito'>About Medflow</h1>
      <h1 className='text-5xl text-secondary font-bold py-5 font-gabarito'>Our Roots Run Deep</h1>

      <p className='text-xl text-black px-28 text-justify pb-8'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      <div className="w-full grid grid-cols-2">
        <div className="bg-third p-12">
          <p className="text-2xl font-bold text-white px-20 text-justify pb-5">
            Our commitment to excellence and convenience is absolute.
          </p>
          <p className="text-lg text-white px-20 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..
          </p>
        </div>

        <Image 
          src="/about/laughingNurses.png"
          alt="Login image"
          layout="responsive"
          width={500}
          height={400}
        />

        <div className="text-center flex items-center flex-col py-10 px-14">
          <p className="text-2xl font-bold text-secondary px-20 text-justify pb-5">
            Vision 
          </p>
          <p className="text-lg text-black px-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>

        <div className="text-center flex items-center flex-col py-10 px-14">
          <p className="text-2xl font-bold text-secondary px-20 text-justify pb-5">
            Mission 
          </p>
          <p className="text-lg text-black px-20">
            Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className='text-5xl text-secondary font-bold py-10 font-gabarito'>Values</h1>
        <div className="grid grid-cols-3 gap-5 px-28 pb-10">
          <div className="flex flex-col text-secondary items-center">
            <Scale 
              className='w-36 h-36'
            />
            <p className="text-2xl font-bold px-20 text-justify pb-5 font-nunito">
              Integrity 
            </p>
          </div>
          
          <div className="flex flex-col text-secondary items-center">
            <GraduationCap 
              className='w-36 h-36'
            />
            <p className="text-2xl font-bold px-20 text-justify pb-5">
              Education 
            </p>
          </div>
          
          <div className="flex flex-col text-secondary items-center">
            <HardHat 
              className='w-36 h-36'
            />
            <p className="text-2xl font-bold px-20 text-justify pb-5">
              Safety 
            </p>
          </div>
          
          <div className="flex flex-col text-secondary items-center">
            <Heart 
              className='w-36 h-36'
            />
            <p className="text-2xl font-bold px-20 text-justify pb-5">
              Compassion 
            </p>
          </div>
          
          <div className="flex flex-col text-secondary items-center">
            <ListChecks 
              className='w-36 h-36'
            />
            <p className="text-2xl font-bold px-20 text-justify pb-5">
              Accountability 
            </p>
          </div>
          
          <div className="flex flex-col text-secondary items-center">
            <BicepsFlexed 
              className='w-36 h-36'
            />
            <p className="text-2xl font-bold px-20 text-justify pb-5">
              Teamwork 
            </p>
          </div>

        </div>

      </div>


    </div>
  )
}

export default contact