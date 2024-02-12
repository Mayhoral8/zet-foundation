'use client'
import React, {useEffect} from 'react'
import Image from "next/image";
import { quicksand } from "./ui/fonts";


import hero1 from '../../public/landing-page-images/section-a/hero-a-mobile.png'
import heroWeb from '../../public/landing-page-images/section-a/hero-a-web.png'

import hero2 from '../../public/landing-page-images/section-a/hero2.png'
import hero3 from '../../public/landing-page-images/section-a/hero3.png'
import jthomas from '../../public/landing-page-images/section-a/jarumi-thomas.png'
import chgLiv from '../../public/landing-page-images/section-b/changingLives-mobile.png'
import chgLiv2 from '../../public/landing-page-images/section-b/chLives-web.png'


import project1 from '../../public/landing-page-images/projects/project-1.png'
import project2 from '../../public/landing-page-images/projects/project-2.png'
import project3 from '../../public/landing-page-images/projects/project-3.png'
import project4 from '../../public/landing-page-images/projects/project-4.png'

import { MdArrowOutward } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { TbBulb } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiHandHeartLight } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { LiaPeopleCarrySolid } from "react-icons/lia";

import Aos from "aos";
import "aos/dist/aos.css";
import './page.css'

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <main>

    
    <section className={` ${quicksand.className} pt-16 lg:pt-14  font-quickSand font-bold  px-3 antialiased`}>
      <article className="lg:flex lg:flex-row lg:justify-between lg:px-24">
        <div className="lg:order-last lg:w-4/5 lg:mt-10">
          <div className="lg:flex lg:flex-center lg:flex-col">
            <div   data-aos="zoom-in"
    data-aos-easing="ease-out"
    data-aos-duration="1200"
    data-aos-once = 'true'>
    <Image
    src={hero1}
    width={519}
    height={495}
    className="w-full lg:w-[400px] border lg:h-[320px] lg:ml-auto lg:hidden  rounded-xl shadow-lg"
    alt="Screenshots of the dashboard project showing mobile version"
    />
    </div>
    <Image
    src={heroWeb}
    width={2076}
    height={1980}
    className="w-full  lg:h-[400px] lg:w-[400px] lg:ml-auto hidden lg:block  rounded-xl "
    alt="Screenshots of the dashboard project showing mobile version"
    />
    
    <article className="flex flex-row justify-around lg:justify-end lg:space-x-20 mt-[-130px] lg:mt-0 items-center w-full">
      <div className="w-2/5  lg:w-2/6 rounded-lg mt-16 lg:mt-4  shadow-lg">
        <div data-aos="fade"
    data-aos-easing="ease-out"
    data-aos-duration="1200"
    data-aos-once = 'true'>
    <Image
    src={hero2}
    width={519}
    height={495}
    className="lg:h-40"
    alt="Screenshots  of the dashboard project showing mobile version"
    />
    </div>
              <button  data-aos="fade-left"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
              data-aos-once = 'true' className=" z-40 animate-bounce text-regular lg:space-x-2 bg-white text-center mx-auto font-medium lg:h-14 h-12 w-32 ml-16  items-center absolute lg:w-40 lg:left-auto lg:ml-40 lg:mt-[-12px] mt-[-20px] rounded-xl  left-0  flex flex-row justify-center  shadow-lg">Scholarship <IoIosSend/></button>

    </div>

      <div className="w-2/5 lg:w-2/6 rounded-lg mt-16 lg:mt-4 shadow-lg">
        <button data-aos="fade-right"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
              data-aos-once = 'true' className=" z-40 animate-bounce text-lightGreen text-regular bg-white items-center h-12 w-32  lg:space-x-4 text-center font-medium lg:h-14 rounded-xl lg:w-40 mt-[-32px] lg:mt-[-140px] lg:right-[430px]  ml-6  flex flex-row justify-center absolute shadow-lg">Send fund <IoIosSend/> </button>

<div data-aos="fade-down"
    data-aos-easing="ease-out"
    data-aos-duration="1200"
    data-aos-once = 'true'>
    <Image
    src={hero3}
    width={519}
    height={495}
    className="lg:h-40"
    alt="Screenshots of the dashboard project showing mobile version"
    />
    </div>
    </div>
    </article>
    </div>
    </div>
    <section className=" w-full flex flex-col justify-between space-y-8 mt-10 ">
    <div className="font-medium quote text-center lg:text-start">
      <p className=" font-bold lg:w-full lg:text-4xl ">The beauty of life does not<br className="hidden lg:block"/> depend on how happy you <br className="hidden lg:block"/> are,<br className="lg:hidden"/><span className="font-medium"> but on how happy others<br className="hidden lg:block"/> can  be because of you.</span> </p>
    </div>
    <div className="font-medium quote2 mt-4 lg:mt-2 flex space-y-4 lg:space-y-4 flex-col  text-center lg:text-start lg:items-start items-center">
      <p>A quote from T.B Joshua  which explains the deep concerns <br className="lg:block hidden"/> every privileged individual needs to express to the less privileged <br className="lg:block hidden"/> within our communities in order to attain true happiness</p>
     <button className="bg-lightGreen rounded-3xl  text-medium w-32 h-10 text-gray-700">
    <div className="flex flex-row items-center justify-center space-x-2">
   <h3 className="text-xs ">
   Find out more 
   </h3> 
    <MdArrowOutward/>  
    </div>
    </button>
    </div>
    <div className="font-medium quote2 mt-4 flex space-y-2 lg:space-y-4 flex-col justify-center text-center lg:items-start lg:text-start items-center">
      <p>Welcome to Zion Eminent Foundation, a place that <br className="lg:block hidden"/> gives hope to the hopeless and seeks to find <br className="lg:block hidden"/> happiness in making others happy ...</p>
  
    <button className="bg-darkGreen rounded-3xl text-white text-medium w-32 h-10">
    <div className="flex flex-row items-center  space-x-2 justify-center">
    <h3 className="text-xs">
   Read more 
   </h3> 
    <MdArrowOutward/>  
    </div>
    </button>
   
    </div>
    <article className="mt-8 space-y-2 items-center flex flex-col justify-center lg:justify-start lg:flex lg:flex-row  lg:space-x-2">
      <Image
      src={jthomas}
      width={141}
      height={141}
      className="lg:w-[120px]"
      alt="jarumi thomas, founder of zet foundation"
      />
      <div className=" text-center lg:text-start">
      <span className="">Jarumi<span className="font-light ml-1">Thomas</span></span>
      <p className="font-light text-sm">Chairman/Founder ZET Foundation</p>
      </div>
    </article>
    </section>
    </article>
    <section className="lg:grid  lg:grid-cols-2 lg:justify-center  lg:items-center ">
    <article className="mt-12">
      <Image
      src={chgLiv}
    className="lg:w-[665px] lg:h-[800px] lg:hidden"
    alt="Screenshots of the dashboard project showing mobile version"/>
     <Image
      src={chgLiv2}
    className=" hidden lg:block"
    alt="Screenshots of the dashboard project showing mobile version"/>
    
    </article>
    <section className="grid grid-rows-2 h-96 lg:items-center lg:space-y-32 lg:justify-center mt-8 lg:mt-0 w-full">
    <article 
     data-aos="fade-up"
     data-aos-easing="ease-out"
     data-aos-duration="1200"
     data-aos-once = 'true'>
      <span className=" block lg:flex lg:flex-row lg:items-center lg:text-lg lg:space-x-4 lg:justify-center text-center">Our Vision  <TbBulb/> </span>
      <div className="w-[320px] lg:w-[500px] h-28 lg:h-40 border font-light px-4 leading-relaxed text-start rounded-2xl text-xs flex items-center mx-auto bg-lightGreen">
        <p>To Empower Lives, Transform Communities, and create a world where every individual thrives in Dignity, Equality, and Hope</p>
      </div>
    </article>
    <article
    data-aos="fade-up"
     data-aos-easing="ease-out"
     data-aos-duration="1200"
     data-aos-once = 'true'>
      <span className="block lg:flex lg:flex-row lg:items-center lg:text-lg lg:space-x-4 lg:justify-center text-center">Our Mission  <IoRocketOutline/></span>
      <div className="w-[320px] h-28 lg:w-[500px] lg:h-40  border font-light px-4 leading-relaxed rounded-2xl text-start  text-xs flex items-center mx-auto bg-darkGreen text-white">
        <p>To provide humanitarian support to the less privileged in communities and refugee camps in the areas of education, health and social amenities in Nigeria and the African continent.</p>
      </div>
    </article>
    </section>
    </section>
    <section className="w-full lg:mt-8 lg:flex lg:flex-col lg:justify-evenly bg-darkGreen lg:h-[600px]">
      <div>
        <h2 className="text-white text-center pt-4">Our Focused Areas</h2>
        <p className=" text-white font-light px-4 text-xs mt-5 leading-relaxed lg:px-40 lg:text-center">ZION EMINENT TRUST FOUNDATION is a non-profit organization dedicated to providing humanitarian aids through donations to the less privileged and communities in Nigeria and has since been committed to making a positive by donating out several educational materials to less privileged students, by supporting widows with food stuff and other basic provisions and also educating local communities on basic hygiene and health care information needed to maintain a safe and healthy growth for their children and for themselves.</p>
      </div>


      <article className="flex flex-col items-center justify-center space-y-4 mt-4 py-2">

      <div data-aos="fade-down"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
              data-aos-once = 'true' className="lg:flex  flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12">
      <div className="w-[320px] h-28 py-2 border lg:h-40 font-light px-3 text-start rounded-2xl flex flex-col justify-around mx-auto bg-lightGreen ">
      <h2><RiGraduationCapLine/></h2>
        <span className="font-bold lg:text-xl">Education</span>
        <p className="text-xs">To Empower Lives, Transform Communities, and create a world where every individual thrives in Dignity, Equality, and Hope</p>
      </div>
      <div data-aos="fade-down"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
              data-aos-once = 'true'  className="w-[320px] h-28 py-2 border lg:h-40 font-light px-3 text-start rounded-2xl flex flex-col justify-around mx-auto bg-lightGreen ">
      <h2><PiHandHeartLight/></h2>
        <span className="font-bold lg:text-xl">Health</span>
        <p className="text-xs">To Empower Lives, Transform Communities, and create a world where every individual thrives in Dignity, Equality, and Hope</p>
      </div>
      </div>

      <div data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
              data-aos-once = 'true'  className="lg:flex flex-col space-y-4 lg:space-y-0  lg:flex-row lg:space-x-12">
      <div className="w-[320px] h-28 py-2 border lg:h-40 font-light px-3 text-start rounded-2xl flex flex-col justify-around mx-auto bg-white ">
      <h2><GiSkills/></h2>
        <span className="font-bold lg:text-xl">Skill Acquisitions</span>
        <p className="text-xs">To Empower Lives, Transform Communities, and create a world where every individual thrives in Dignity, Equality, and Hope</p>
      </div>
      <div data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
              data-aos-once = 'true'  className="w-[320px] h-28 py-2 border lg:h-40 font-light px-3 text-start rounded-2xl flex flex-col justify-around mx-auto bg-white ">
        <h2><LiaPeopleCarrySolid/></h2>
        <span className="font-bold lg:text-xl">Humanitarian</span>
        <p className="text-xs">We provide financial aids, Food and provisions as well as
          advocacy for the less privileged in our society</p>
      </div>
      </div>
      </article>

    </section>
    <section className="mt-8">
      <h3 className="text-center">SOME OF OUR PROJECTS</h3>
      <article className="flex flex-col lg:justify-center lg:flex-col lg:w-full lg:items-center space-y-8 py-3">

<div className="lg:flex flex-col space-y-5 lg:flex-row lg:space-x-8 lg:justify-center">
      <div
      data-aos="fade-up"
      data-aos-easing="ease-out"
      data-aos-duration="1200"
      data-aos-once = 'true'
      className="lg:w-2/5">
            
      <Image
      src={project1}
      width={519}
      height={495}
      className="lg:mx-auto "
      alt="Screenshots of the dashboard project showing mobile version"/>
         <p className="text-xs font-normal lg:mt-4 text-center">Intervention to Students Without Study Materials  in Bafin Kogi Kafinta, Janda Sarki, Ung Magaji & Janda Madaki, Kaduna State, Nigeria, 2020.</p>
      </div>    

      <div 
       data-aos="fade-up"
       data-aos-easing="ease-out"
       data-aos-duration="1200"
       data-aos-once = 'true'
      className="lg:w-2/5">
         <Image
      src={project2}
      width={519}
      height={495}
      className="lg:mx-auto"
      alt="Screenshots of the dashboard project showing mobile version"/>
           <p className="text-xs font-normal lg:mt-4 text-center">Outreach to Children Reception Centre (Home Of The Needy)  Gaa-Akanbi, Ilorin, Kwara State, Nigeria</p>
      </div>    
      </div>


<div className="lg:flex flex-col space-y-5 lg:flex-row lg:space-x-8 lg:justify-center">
      <div 
      
      data-aos="fade-up"
      data-aos-easing="ease-out"
      data-aos-duration="1200"
      data-aos-once = 'true'
      className="lg:w-2/5">

         <Image
      src={project3}
      width={519}
      height={495}
      className="lg:mx-auto "
      alt="Screenshots of the dashboard project showing mobile version"/>
           <p className="text-xs lg:px-10 font-normal lg:mt-4 text-center">Outreach to Pupils of Wesley Primary School, Yidi Road, Ilorin, Kwara State, Nigeria</p>
      </div>    
      <div 
       data-aos="fade-up"
       data-aos-easing="ease-out"
       data-aos-duration="1200"
       data-aos-once = 'true'
       className="lg:w-2/5">
         <Image
      src={project4}
      width={519}
      height={495}
      className="lg:mx-auto "
      alt="Screenshots of the dashboard project showing mobile version"/>
        <p className="text-xs font-normal lg:px-20 lg:mt-4 break-words text-center">Outreach to Janda Bakin Kogi and Ruga Alhaji Tanko Community where mosquito nets, diapers for young girls were distributed, health talks were given and widows were reached with fabrics and other materials</p>
      </div>  
      </div>
      </article>
    </section>
    </section>
    {/* <Footer/> */}
    </main>
  );
}
