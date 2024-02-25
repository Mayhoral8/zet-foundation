"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import donate from "../../../public/donate/donate.webp";
import { IoIosSend } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
const Donate = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <main>
      <section className="lg:grid lg:grid-cols-2 lg:justify-between lg:pt-20 w-full">
        <article className="bg-darkGreen pt-24">
          <div className="text-6xl text-white flex items-center justify-center mx-autotext-start">
            <div className="font-bold">
              Your <br />
              <span className="font-light">Little Help</span>
            </div>
          </div>
          <span className="text-sm font-light text-white text-center block mx-auto">
            will go a long way to help others in need.
          </span>
          <article>
            <button
              data-aos="fade-right"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
              data-aos-once="true"
              className=" animate-bounce absolute z-10 bg-white ml-28 min-[667px]:ml-64 lg:ml-64 min-[667px]:mt-36 shadow-xl mt-10 lg:mt-8 h-12 lg:h-8 lg:w-28 items-center rounded-lg w-36 justify-center   lg:text-sm flex flex-row"
            >
              Send Fund <IoIosSend />
            </button>
            <button
              data-aos="fade-right"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
              data-aos-once="true"
              className=" animate-bounce absolute hidden lg:block z-10 bg-white ml-28 min-[667px]:ml-64 lg:ml-[400px] min-[667px]:mt-36 shadow-xl lg:mt-24  mt-10 h-12 lg:h-8 lg:w-28 items-center rounded-lg w-36 justify-center   lg:text-sm flex flex-row"
            >
              Hospital Bill <IoIosSend />
            </button>
            <button
              data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-once="true"
              data-aos-duration="1200"
              className=" animate-bounce absolute z-10 bg-white ml-48 shadow-xl min-[667px]:mt-96 min-[667px]:ml-96 mt-56 lg:ml-[380px] lg:mt-52 h-12 lg:h-8 lg:w-28 lg:text-sm  items-center   rounded-lg w-36 justify-center flex flex-row"
            >
              Scholarship <IoIosSend />
            </button>

            <div className=" lg:h-72" data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-once="true"
              data-aos-duration="1200">
              <Image
                src={donate}
                width={519}
                height={495}
                className="w-full lg:h-[300px] lg:w-3/5 lg:mx-auto px-2 rounded-md mt-8 lg:mt-0 shadow-sm"
                alt="Zet foundation's donation page"
              />
            </div>
          </article>
        </article>
        <article className="lg:flex lg:flex-col lg:justify-center lg:items-center">
          <div className="flex flex-col space-y-2 px-2 text-sm">
            <h1 className="text-center font-bold text-xl lg:text-3xl text-gray-900">Donate</h1>
            <p className="mt-6 lg:text-start lg:mt-12 min-[667px]:indent-0 min-[667px]:text-center min-[667px]:px-10 indent-8 lg:px-36 lg:indent-0">
              At Zet Foundation, funds are implemented on actual projects
              reaching the targeted group of individuals. Your little help will
              go a long way to help change the sad stories heard from various
              children and widows in many poor communities in Nigeria.
            </p>
            <p className="mt-2 lg:mt-4 lg:text-start indent-2 lg:px-36 lg:indent-0 min-[667px]:indent-0 min-[667px]:text-center">
              Willing to help? You can send funds to the following Account
              details:
            </p>
          </div>
          <article className="  min-[667px]:justify-center lg:w-full lg:justify-center flex flex-row text-sm items-center space-x-2 mt-4">
            <div className="flex flex-col  ">
              <h1 className="font-light">Account Name:</h1>
              <h1 className="font-light">Bank:</h1>
              <h1 className="font-light">Naira Account:</h1>
            </div>
            <div className="font-bold">
              <h1>Zion Eminent Trust Foundation</h1>
              <h1>Sterling Bank</h1>
              <h1>0095714063</h1>
            </div>
          </article>
          <div className="px-2  lg:items-center lg:justify-center lg:w-full lg:px-0">
            <h1 className="mt-4  min-[667px]:text-center lg:text-center">Dollar Accounts</h1>
            <article className="w-full flex flex-row text-sm  min-[667px]:justify-center lg:items-start items-center space-x-2">
              <div className="flex flex-col  ">
                <h1 className="font-light">Cash:</h1>
                <h1 className="font-light">Transfer:</h1>
              </div>
              <div className="font-bold">
                <h1>0095714946</h1>
                <h1>0095717985</h1>
              </div>
            </article>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Donate;
