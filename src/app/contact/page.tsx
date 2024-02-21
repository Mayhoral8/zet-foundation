import React from "react";
import Image from "next/image";
import contact from "../../../public/contact/contact.webp";
import contactWeb from "../../../public/contact/contact-web.webp";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const page = () => {
  return (
    <section className="lg:px-24 lg:pt-8">
      <Image
        src={contact}
        width={519}
        height={495}
        className="w-full lg:h-[300px] px-2 lg:hidden rounded-md mt-8 shadow-sm"
        alt="Zet foundation's contact page"
      />
      <Image
        src={contactWeb}
        width={519}
        height={495}
        className="w-full px-2 lg:block hidden rounded-md mt-8 shadow-sm"
        alt="Zet foundation's contact page"
      />
      <article className="font-quickSand flex flex-col py-10 space-y-8 justify-around">
        <div className="text-center">
          <span className="font-bold">Head Office Address</span>
          <p>
            No 4, Opposite ECWA Church Osere, Irewolede Area, Ilorin, KWara
            State, Nigeria.
          </p>
        </div>
        <div className="text-center">
          <span className="font-bold">Send us a mail</span>
          <p>zetfoundation4@gmail.com</p>
        </div>
        <div className="text-center">
          <span className="font-bold">Call us</span>
          <p>+2348031599068, +2348150817632</p>
        </div>
        <div className="text-center">
          <span className="font-bold">Follow us on social media</span>
          <div className="flex flex-row items-center justify-center gap-x-2">
            <FaFacebook /> zetfoundation
          </div>
          <div className="flex flex-row items-center justify-center gap-x-2">
            <FaInstagram /> zet_foundation
          </div>
          <div className="flex flex-row items-center justify-center gap-x-2">
            <FaXTwitter />
            @zetfoundation24
          </div>
        </div>
      </article>
    </section>
  );
};

export default page;
