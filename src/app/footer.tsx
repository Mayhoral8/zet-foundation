import React from 'react'
import Image from 'next/image'
import footerLogo from '../../public/landing-page-images/footer/footer-logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

import './page.css'
const Footer = () => {
  return (
    <section className='bg-darkGreen flex items-center flex-col text-white mt-8 h-[380px] justify-around'>
<Image
src={footerLogo}
width={141}
height={141}
className="mx-auto"
alt="jarumi thomas, founder of zet foundation"

/>
<div className='text-center'>
<h3 className='text-sm'>Head Office Address</h3>
<span className='font-thin text-xs text-center leading-1 px-'>No 4, Opposite ECWA Church Osere, Irewolede Area, Ilorin, Kwara State, Nigeria.</span>
</div>

<div>
  <h3 className='text-center'>Follow us</h3>
  <div className='text-white space-x-4 flex flex-row'>
    <FaFacebook/>
    <FaInstagram/>
    <FaYoutube/>
    <FaXTwitter/>
  </div>
</div>
<article className='w-full flex justify-center text-sm space-x-6  flex-row px-1'>
  <div className=' flex  flex-col items-center space-y-2'>
  <h1>
  Projects
  </h1>
  <div className='text-xs text-center font-thin'>
    <h1>
    Scholarship
    </h1>
    <h1>
    Outreach
    </h1>
    <h1>
    Healthcare
    </h1>
    <h1>
    Awareness
    </h1>
  </div>
  </div>

  
  <div className='flex  flex-col items-center space-y-2'>
  <h1>
  Support
  </h1>
  <div className='text-xs text-center font-thin'>
    <h1>
      Helpline
      </h1>
      <h1>
    Team
      </h1>

      <h1>
    Community
      </h1>
  </div>
  
  </div>
  <div className='flex  flex-col items-center space-y-2'>
  <h1>
  Resources
  </h1>
  <div className='text-xs text-center  font-thin'>
    <h1>
  Blog
    </h1>
    <h1>
  Developer
    </h1>
    <h1>
  Privacy Policy
    </h1>
  </div>
  </div>
  <div className='flex  flex-col items-center space-y-2'>
  <h1>
  Donate
  </h1>
  <div className='text-xs font-thin text-center '>
    <h1>
      How to Donate
      </h1>
      <h1>
       Contact Person
      </h1>
      <h1>
    Disclaimer
      </h1>
  </div>
  
  </div>


</article>

<div className='w-11/12 flex flex-row justify-evenly items-center border-t text-sm mt-4'>
<h1>ZET Foundation</h1>
<FaRegCopyright/>
<span>
  {new Date().getFullYear()}
  </span>
  <span>All rights reserved.</span>
</div>
    </section>
  )
}

export default Footer