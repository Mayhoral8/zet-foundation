'use client'

import React, { useState, useContext, useReducer, useEffect} from 'react'
import { ContextCreate } from './context/context'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from '../../public/navbar/logo.png'


interface State {
    donateIsActive: boolean
    aboutIsActive: boolean,
    contactIsActive: boolean,
    projectsIsActive: boolean
}

type Action = {
    type: string
}


const Navbar = () => {
    const {ref1, ref2} = useContext(ContextCreate)


  const checkNav = ()=>{
        console.log(ref1.current?.getBoundingClientRect().height)
    }
    const scrollTo = ()=>{
        const projectCoord = ref2.current?.getBoundingClientRect()
        const navbarHeight = ref1.current?.getBoundingClientRect().height === 297.5 ? 60 : ref1.current?.getBoundingClientRect().height
        
        window.scrollTo({
            left: projectCoord?.left && projectCoord.left + window.scrollX,
            top:  navbarHeight && projectCoord?.top && projectCoord.top + window.scrollY - navbarHeight,
            behavior: 'smooth'
          })
    }
    const pathname = usePathname()
    const [openNavBar, setOpenNavBar] = useState<boolean>(false)

   
    
    const initialState = {
        donateIsActive: false,
        aboutIsActive: false,
        contactIsActive: false,
        projectsIsActive: false
    }
        const reducerFunc = (state: State, action:Action)=>{
            switch(action.type){
                case 'DONATE':
                    
                        return{...state, donateIsActive: true, aboutIsActive:false, contactIsActive:false, projectsIsActive:false}
                    
                case 'ABOUT':
                    
                        return {...state, aboutIsActive: true, contactIsActive:false, donateIsActive:false, projectsIsActive:false}
                    
                case 'CONTACT':
                
                        return{...state, contactIsActive: true, aboutIsActive:false, donateIsActive:false, projectsIsActive:false}
                    
                case 'PROJECTS':

                        return{...state, projectsIsActive: true, aboutIsActive:false, donateIsActive:false, contactIsActive:false}

                case 'DEFAULT':
                    return initialState
                    default:
                        return state
            }
        }
    
    
 const [state, dispatch] = useReducer(reducerFunc, initialState);

    const navBarHandler = (type:string | undefined)=>{
        if (type === 'home'){
                setOpenNavBar(false)
                return dispatch({type: 'DEFAULT'})
        }else{
            setOpenNavBar(!openNavBar)
        }

        if(type === 'about'){
           return dispatch({type: 'ABOUT'});
        }else if(type === 'contact')
        {
           return dispatch({type: 'CONTACT'});

        }else if(type === 'projects')
        {
           return dispatch({type: 'PROJECTS'});

        }else if(type === 'donate')
        {
          return  dispatch({type: 'DONATE'});
        }
    }
    useEffect(()=>{
        if(pathname === '/donate')
        {
            return dispatch({ type: "DONATE" });
        }else if(pathname === '/contact'){
            return dispatch({ type: "CONTACT" });
        }else if(pathname === '/about'){
            return dispatch({ type: "ABOUT" });
        }else if(pathname === '/projects'){
            return dispatch({ type: "PROJECTS" });
        }else if(pathname === '/'){
            return dispatch({ type: "DEFAULT" });
        }
    }, [pathname])



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
        <ul className='flex items-start px-2 justify-evenly lg:justify-end lg:space-x-20 lg:items-center  text-sm flex-col lg:flex-row  h-full'>
            <li className={`${openNavBar ? 'visible': 'hidden'} lg:block ${state.aboutIsActive && 'lg:bg-darkGreen lg:text-white '} text-white lg:text-gray-900 lg:h-8 lg:w-20 lg:text-center lg:flex lg:items-center lg:justify-center transition-all delay-400 duration-300`} onClick={()=> navBarHandler('about')}>
                <Link href='/about'>
                About Us
                </Link>
                </li>
                    <div onClick={scrollTo} className={`${pathname !== '/' ? 'hidden':'lg:lg:h-8 lg:w-20 lg:text-center lg:flex lg:items-center lg:justify-center'} text-white lg:text-gray-900 cursor-pointer ${openNavBar && pathname == '/'  ? 'visible': 'hidden'} ${state.projectsIsActive && 'bg-darkGreen text-white'} `}>
                <li  onClick={()=> navBarHandler('projects')}>
                Projects
                </li>
                    </div>
                <li  className={`${openNavBar ? 'visible': 'hidden'} lg:block ${state.donateIsActive && 'lg:bg-darkGreen lg:text-white'} lg:text-gray-900 text-white lg:h-8 lg:w-20 lg:text-center lg:flex lg:items-center lg:justify-center transition-all delay-400 duration-300`} onClick={()=> navBarHandler('donate')}>
                <Link href='/donate'>
                Donate
                </Link>
                </li>
                <li className={`${openNavBar ? 'visible': 'hidden'} lg:block ${state.contactIsActive && 'lg:bg-darkGreen lg:text-white'} lg:text-gray-900 text-white lg:h-8 lg:w-20 lg:text-center lg:flex lg:items-center lg:justify-center transition-all delay-400 duration-300`}  onClick={()=> navBarHandler('contact')}>
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