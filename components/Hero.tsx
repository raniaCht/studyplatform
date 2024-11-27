import { MoveRight, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import ButtonWithShadow from "./ButtonWithShadow";
import ReviewCount from "./ReviewCount";

function Hero() {
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between items-start py-16 gap-16 lg:gap-5 container mx-auto">
        <div className="flex flex-col items-start gap-16 w-full">
          <div className="flex flex-col items-start gap-8">
            <p className="font-bold text-lg text-center lg:text-start w-full text-gray-400">
              The new generation of Student card with real benifit
            </p>
            <h1 className="font-bold text-7xl text-center lg:text-start text-black">
              Digital Card For Student
            </h1>
            <p className="font-normal text-center lg:text-start w-full text-6xl text-black">
              Lead your success path
            </p>
          </div>
          <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-6 ">
            <p className="text-gray-400 text-center lg:text-start">
              Discover Best opportunities that will help you to succeed in
              Future path with our card
            </p>
            <ButtonWithShadow
              text="Order your card"
              icon={<MoveRight className="text-white" />}
            />
          </div>
        </div>
        <div className="relative w-full flex justify-center items-center">
          <div className="w-[400px] h-[400px] rounded-full border border-gray-400 border-opacity-20 flex justify-center items-center">
            <Image src="/images/hero.png" width={375} height={462} alt="" />
          </div>
          <span className="bg-primary w-8 h-8 rounded-full absolute top-1 left-10"></span>
          <span className="bg-primary w-8 h-8 rounded-full absolute bottom-1 left-5"></span>
          <span className="bg-primary w-8 h-8 rounded-full absolute top-1 right-10"></span>
          <span className="bg-primary w-8 h-8 rounded-full absolute bottom-1 right-5"></span>
          <div className="bg-white rounded-full flex justify-center items-center gap-3 py-2 px-3 absolute top-10 left-20">
            <span className="bg-green-400 text-white rounded-full text-xs w-8 h-8 flex justify-center items-center font-semibold">
              24%
            </span>
            <span className="text-black text-sm font-medium">
              Up to benefits
            </span>
          </div>
          <div className="border border-black bg-gray-50 rounded-full flex justify-center items-center gap-3 py-2 px-3 absolute bottom-10 right-20">
            <span className="text-black rounded-full text-xs flex flex-col justify-center items-center font-semibold">
              <span>4.5/5</span>
              <span>rating</span>
            </span>
            <span className="flex justify-center items-center gap-1">
              <Star className="fill-yellow-400 text-yellow-400" />
              <Star className="fill-yellow-400 text-yellow-400" />
              <Star className="fill-yellow-400 text-yellow-400" />
              <Star className="fill-yellow-400 text-yellow-400" />
              <Star className="text-yellow-400" />
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-8">
        <ReviewCount />
      </div>
    </div>
  );
}

export default Hero;
