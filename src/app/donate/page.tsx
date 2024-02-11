'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import donate from '../../../public/donate/donate.png'
import { IoIosSend } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
const Donate = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <main>
      <section className='lg:grid lg:grid-cols-2 lg:justify-between'>

        <article className='bg-darkGreen pt-24'>
        <div className='text-6xl text-white flex items-center justify-center mx-autotext-start'>
        <div className='font-bold'>
            Your <br/> 
            <span className='font-light'>
        Little Help
            </span>
        </div>
        </div>
            <span className='text-sm font-light text-white text-center block mx-auto'>will go a long way to help others in need.</span>
            <article>
               
                <button data-aos="fade-right"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
              data-aos-once = 'true' 
              className='absolute bg-white ml-28 lg:ml-64 shadow-xl mt-10 h-12 lg:h-8 lg:w-28 items-center rounded-lg w-36 justify-center   lg:text-sm flex flex-row'>Send Fund  <IoIosSend/></button>
                <button   data-aos="fade-left"
              data-aos-easing="ease-out"
              data-aos-once = 'true'
              data-aos-duration="1200" className='absolute bg-white ml-48 shadow-xl mt-56 h-12 lg:h-8 lg:w-28 lg:text-sm lg:ml-72 items-center   rounded-lg w-36 justify-center flex flex-row'>Scholarship  <IoIosSend/></button>

<div className='lg:h-72'>

        <Image
                src={donate}
                width={519}
                height={495}
                className="w-full lg:h-[280px] lg:w-2/5 lg:mx-auto px-2 rounded-md mt-8 lg:mt-0 shadow-sm"
                alt="Zet foundation's donation page"
                
                />
                </div>
                </article>

        </article>
        <article className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
        <div className='flex flex-col space-y-2 px-2 text-sm'>
            <h1 className='text-center font-bold text-xl'>Donate</h1>
            <p className='mt-6 indent-8 lg:px-36 lg:indent-0'>At Zet Foundation, funds are implemented on actual projects reaching the targeted group of individuals. Your little help will go a long way to help change the sad stories heard from various children and widows in many poor communities in Nigeria.</p>
            <p className='mt-2 indent-2 lg:px-36 lg:indent-0'>Willing to help? You can send funds to the following Account details:</p>
        </div>
        <article className='px-2 flex flex-row text-sm items-center space-x-2 mt-4'>
          <div className='flex flex-col  '>
            <h1 className='font-light'>Account Name:</h1>
            <h1 className='font-light'>Bank:</h1>
            <h1 className='font-light'>Naira Account:</h1>
          </div>
          <div className='font-bold'>
          <h1>Zion Eminent Trust Foundation</h1>
          <h1>Sterling Bank</h1>
          <h1>0095714063</h1>
         
          </div>
        </article>
          <div className='px-2'>
            <h1 className='font-bold mt-4'>Dollar Accounts</h1>
            <article className='w-full flex flex-row text-sm items-center space-x-2'>
          <div className='flex flex-col  '>
            <h1 className='font-light'>Cash:</h1>
            <h1 className='font-light'>Transfer:</h1>
          </div>
          <div className='font-bold'>
          <h1>Zion Eminent Trust Foundation</h1>
          <h1>Sterling Bank</h1>
          
         
          </div>
        </article>
          </div>
        </article>

      </section>

    </main>
  )
}


export default Donate