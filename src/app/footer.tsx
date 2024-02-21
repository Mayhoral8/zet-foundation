import React from "react";
import Image from "next/image";
import footerLogo from "../../public/landing-page-images/footer/footer-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

import "./page.css";
const Footer = () => {
  return (
    <section className="bg-darkGreen flex items-center flex-col text-white mt-2 h-[380px] justify-around lg:px-40">
      <article className="lg:flex lg:flex-row space-y-3 lg:space-y-0 lg:justify-between w-full">
        <div>
          <Image
            src={footerLogo}
            width={141}
            height={141}
            className="mx-auto lg:mx-0 lg:w-64 "
            alt="jarumi thomas, founder of zet foundation"
          />
          <span className="text-xs hidden lg:block lg:mt-2 quote2">
            The beauty of life does not depend on how happy you are, <br />
            <span className="font-light">
              {" "}
              but on how happy others can be because of you
            </span>
          </span>
        </div>
        <div className="text-center lg:text-start lg:mr-28">
          <h3 className="text-sm lg:text-base">Head Office Address</h3>
          <span className="font-thin text-xs  text-center  leading-1">
            No 4, Opposite ECWA Church Osere, Irewolede Area, <br /> Ilorin,
            Kwara State, Nigeria.
          </span>
        </div>
      </article>

      <article className="lg:flex space-y-5 lg:flex-row lg:justify-between lg:items-center lg:w-full">
        <div className="">
          <h3 className="text-center">Follow us</h3>
          <div className="text-white justify-center lg:justify-start space-x-4 flex flex-row">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaXTwitter />
          </div>
        </div>

        <article className="  w-full lg:w-96 flex justify-center lg:just text-sm space-x-6 lg:space-x-10 flex-row px-1">
          <div className=" flex  flex-col lg:items-start items-center space-y-2">
            <h1>Projects</h1>
            <div className="text-xs text-center  font-thin lg:text-start">
              <h1>Scholarship</h1>
              <h1>Outreach</h1>
              <h1>Healthcare</h1>
              <h1>Awareness</h1>
            </div>
          </div>

          <div className="flex  flex-col lg:items-start items-center space-y-2">
            <h1>Support</h1>
            <div className="text-xs text-center font-thin lg:text-start">
              <h1>Helpline</h1>
              <h1>Team</h1>

              <h1>Community</h1>
            </div>
          </div>
          <div className="flex  flex-col items-center lg:items-start space-y-2">
            <h1>Resources</h1>
            <div className="text-xs text-center  font-thin lg:text-start">
              <h1>Blog</h1>
              <h1>Developer</h1>
              <h1>Privacy Policy</h1>
            </div>
          </div>
          <div className="flex  flex-col items-center lg:items-start space-y-2">
            <h1>Donate</h1>
            <div className="lg:w-20 text-xs font-thin text-center lg:text-start">
              <h1>How to Donate</h1>
              <h1>Contact Person</h1>
              <h1>Disclaimer</h1>
            </div>
          </div>
        </article>
      </article>

      <div className="w-11/12 lg:w-full lg:space-x-4 lg:text-start lg:text-xs lg:justify-start flex flex-row justify-evenly items-center lg:border-0 border-t text-sm mt-4">
        <h1>ZET Foundation</h1>
        <FaRegCopyright />
        <span>{new Date().getFullYear()}</span>
        <span>All rights reserved.</span>
      </div>
    </section>
  );
};

export default Footer;
