import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-white border-t pt-10">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row items-center gap-5 justify-evenly">
          <div>
            <h1 className="flex justify-center items-center gap-2 text-xl font-bold">
              <Image src="/logo.png" width={50} height={50} alt="logo" />
              <span className="text-black">Study Platform</span>
            </h1>
            <span className="text-gray-400 font-bold text-sm mt-10 block">
              BE PART OF OUR COMMUNITY
            </span>
            <div className="text-black mt-2 lg:mt-4 flex items-center gap-5">
              <Facebook />
              <Twitter />
              <Youtube />
              <Linkedin />
              <Instagram />
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-5 text-black">
            <h3 className="text-gray-400 font-bold">Pages</h3>
            <span className="font-semibold">Home</span>
            <span className="font-semibold">Offers</span>
            <span className="font-semibold">Contact us</span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-5 text-black">
            <h3 className="text-gray-400 font-bold">Social Links</h3>
            <span className="font-semibold">LinkedIn</span>
            <span className="font-semibold">Facebook</span>
            <span className="font-semibold">Youtube</span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-5 text-black">
            <h3 className="text-gray-400 font-bold">Speed Links</h3>
            <span className="font-semibold">Universities</span>
            <span className="font-semibold">Job Offers</span>
            <span className="font-semibold">Career</span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-5 text-black">
            <h3 className="text-gray-400 font-bold">Contact Us</h3>
            <div className="flex flex-col">
              <span className="font-semibold text-center lg:text-start">
                Email
              </span>
              <span className="ms-1">contact@study-platform.com</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-center lg:text-start">
                Phone
              </span>
              <span className="ms-1">+21354012078</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-center lg:text-start">
                Address
              </span>
              <span className="ms-1">Ali Mendjeli, Constantine, Algeria.</span>
            </div>
          </div>
        </div>
        <div className="border-t">
          <span className="text-gray-400 text-xl block pt-10">
            © All rights reserved to Study Platform
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
