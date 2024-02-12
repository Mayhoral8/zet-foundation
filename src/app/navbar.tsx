'use client'

import React, { useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from '../../public/navbar/logo.png'

const Navbar = () => {
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
    <section className='lg:px-24 lg:h-16 lg:items-center pt-2 flex lg:flex-row flex-col fixed top-0 left-0 right-0 z-20 bg-white '>

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


    <div className={`${openNavBar? 'bg-darkGreen h-64 text-white ': ' h-0'} shadow-md transition-all delay-400 duration-300 lg:h-0 w-full lg:text-black lg:bg-white `}>
        <ul className='flex items-start px-2 justify-evenly lg:justify-end lg:space-x-40 lg:items-center  text-sm flex-col lg:flex-row  h-full'>
            <li className={`${openNavBar ? 'visible': 'hidden'} lg:block`} onClick={()=> navBarHandler('')}>
                <Link href='/about'>
                About Us
                </Link>
                </li>
                    <div className={`${pathname !== '/' && 'hidden'} ${openNavBar && pathname == '/'  ? 'visible': 'hidden'} `}>
                <li  onClick={()=> navBarHandler('')}>
                <Link href='/projects' >
                Projects
                </Link>
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