'use client'

import React, { useState, useContext} from 'react'
import { ContextCreate } from './context/context'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from '../../public/navbar/logo.png'

const Navbar = () => {
    const {ref1, ref2} = useContext(ContextCreate)


  const checkNav = ()=>{
        console.log(ref1.current?.getBoundingClientRect().height)
    }
    const scrollTo = ()=>{
        const projectCoord = ref2.current?.getBoundingClientRect()
        const navbarHeight = ref1.current?.getBoundingClientRect().height === 297.5 ? 60 : ref1.current?.getBoundingClientRect().height

        console.log(navbarHeight);
        
        window.scrollTo({
            left: projectCoord?.left && projectCoord.left + window.scrollX,
            top:  navbarHeight && projectCoord?.top && projectCoord.top + window.scrollY - navbarHeight,
            behavior: 'smooth'
          })
    }
    const pathname = usePathname()
    const [openNavBar, setOpenNavBar] = useState<boolean>(false)

    const navBarHandler = (type:string | undefined)=>{
        if (type === 'home'){
                setOpenNavBar(false)
        }else{
            setOpenNavBar(!openNavBar)
        }
    }

  return (
    <section onClick={checkNav} ref={ref1} className='lg:px-24 lg:h-16 lg:items-center pt-2 flex lg:flex-row flex-col fixed top-0 left-0 right-0 z-30 bg-white '>

<div className='px-4 lg:px-0 lg:w-1/4 flex flex-row justify-between items-center'>
    <Link href='/'>
        <Image
        src={logo}
        width={168}
        height={33.5}
        className='items-center'
        alt='Zet Foundation Logo'
        onClick={()=>navBarHandler('home')}
        />
        </Link>
        
        <div className='lg:hidden'>
            { openNavBar ?
                 <i onClick={()=> navBarHandler('')} className='fa-solid fa-x '/> :

                <i onClick={()=> navBarHandler('')} className='fa-solid fa-bars'/> 
            }
        </div>
        </div>


    <div onClick={checkNav} className={`${openNavBar? 'bg-darkGreen h-64 text-white ': ' h-0'} shadow-md transition-all delay-400 duration-300 lg:h-0 w-full lg:text-black lg:bg-white `}>
        <ul className='flex items-start px-2 justify-evenly lg:justify-end lg:space-x-40 lg:items-center  text-sm flex-col lg:flex-row  h-full'>
            <li className={`${openNavBar ? 'visible': 'hidden'} lg:block`} onClick={()=> navBarHandler('')}>
                <Link href='/about'>
                About Us
                </Link>
                </li>
                    <div onClick={scrollTo} className={`${pathname !== '/' && 'hidden'} cursor-pointer ${openNavBar && pathname == '/'  ? 'visible': 'hidden lg:block'} `}>
                <li  onClick={()=> navBarHandler('')}>
                
                Projects
                
                </li>
                    </div>
                <li  className={`${openNavBar ? 'visible': 'hidden'} lg:block` } onClick={()=> navBarHandler('')}>
                <Link href='/donate'>
                Donate
                </Link>
                </li>
                <li className={`${openNavBar ? 'visible': 'hidden'} lg:block`}  onClick={()=> navBarHandler('')}>
                <Link href='/contact'>
                Contact Us
                </Link>
                </li>

        </ul>
    </div>
    </section>
  )
}

export default Navbar