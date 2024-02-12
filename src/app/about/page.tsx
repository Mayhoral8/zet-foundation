import React from 'react'
import Image from 'next/image'
import aboutImg from '../../../public/about/about.png'
import aboutA from '../../../public/about/abouta.png'
import aboutB from '../../../public/about/aboutb.png'

const About = () => {
  return (
    <main className='lg:pt-20 pt-12'>
      <h2 className='font-light text-lightGreen text-2xl text-center'>About Us</h2>
      <section className='lg:grid lg:grid-cols-2 lg:px-24 lg:w-full lg:pt-6  '>

      <section className='lg:flex lg:flex-col lg:space-y-2  '>
        <div className=' lg:w-[470px]'>
      <Image
       src={aboutImg}
       width={519}
       height={495}
       className="w-full lg:rounded-xl  lg:h-full px-2 rounded-md mt-8 lg:mt-0 shadow-sm"
       alt="Zet foundation's about page"
       />
       </div>
       <article className='lg:flex lg:flex-row '>
        <div>
        <Image
       src={aboutA}
       width={519}
       height={495}
       className="w-full px-2 lg:h-52  hidden lg:block rounded-md mt-8 lg:mt-0 shadow-sm"
       alt="Zet foundation's about page"
       />
        </div>
        <div>
        <Image
       src={aboutB}
       width={519}
       height={495}
       className="w-full lg:h-52 px-2  hidden lg:block rounded-md mt-8 lg:mt-0 shadow-sm"
       alt="Zet foundation's about page"
       />
        </div>

       </article>
       </section>

      <article className=''>
        
      <div className='flex font-light indent-8 px-2 flex-col space-y-3 mt-4 lg:mt-0 text-sm '>
      <p className=''>
      Welcome to Zion Eminent Trust Foundation, a place that gives hope to the hopeless and seeks to find happiness in making others happy. Zion Eminent Foundation was established in 2019 and incorporated in 2023.
      </p>
      <p className=' '>
      We have since focused on making impact in Education, Healthcare, empowering people particularly the youths and widows with skills and various other support to enable them live a meaningful and sustainable life. 
      </p>

      <p>
      We have been working with the following aims and objectives in mind:
      </p>
        </div>
     
     <div className='px-3 font-light text-sm '>
        <li>
        To provide social amenities to communities in need.
        </li>
        <li>
          To empower rural children with educational materials and facilities such as library and class rooms
        </li>
        <li>
          To provide health facilities, medications and preventive measures to tackle sicknesses like Malaria, HIV/AIDS, tuberculosis and other deadly diseases in communities and refugee camps.
        </li>
        <li>
          To provide scholarship/financial aid to less privileged and disadvantaged areas.
        </li>
        <li>
          To provide support under health and nutrition service for women, children, widows and the aged.
        </li>
        <li>
          To provide support for people affected by natural disasters such as flood, earthquakes etc.
        </li>
        <li>
          To empower people through trainings, materials and equipment.
        </li>
        <li>
          To raise funds through donations, partnership and make investments that will bring about the achievement of the aims of ZION EMINENT TRUST FOUNDATION.
        </li>
        <li>
          To provide skill acquisition training for graduate and undergraduate on vocational skills and ICT.
        </li>
        <li>
          To be involved in any other assignment or work that may be beneficial to the welfare of the general public
        </li>
     </div>

        <p className='indent-8 px-2 font-light lg:text-sm'>
          You can join our team of volunteers and Donors to further aid us make our world a better place to live, remember that happiness lies in making others happy.
        </p>

    </article>
    </section>

    </main>

  )
}

export default About