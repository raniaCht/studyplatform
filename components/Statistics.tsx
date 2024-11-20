import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import ButtonMoveRight from "./ButtonMoveRight";

function Statistics() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <div className="flex justify-between items-start ">
          <div className="w-full flex justify-center">
            <Image src="/images/floating.png" width={464} height={536} alt="" />
          </div>
          <div className="w-full flex flex-col items-start text-black gap-10">
            <p className="text-lg font-normal">
              Save time searching for unique opportunities for your future, only
              through our card you have all the possibilities
            </p>
            <div className="flex flex-col items-start gap-6">
              <h4 className="text-lg font-medium">
                Point of Shop offers discounts
              </h4>
              <div className="flex flex-col items-start">
                <span className="text-4xl font-bold">3.5K</span>
                <span className="text-gray-400">Using our student plan</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-4xl font-bold">15K</span>
                <span className="text-gray-400">
                  Scholarship opportunity worldwide
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="">Over 20.8K+ reviews</span>
                <div className="flex justify-start">
                  <span className="rounded-full w-10 h-10 overflow-hidden bg-white flex justify-center items-center p-1">
                    <Image
                      src="/images/p1.jpeg"
                      width={32}
                      height={32}
                      alt=""
                      className="rounded-full"
                    />
                  </span>
                  <span className="rounded-full w-10 h-10 overflow-hidden bg-white flex justify-center items-center -ms-3 p-1">
                    <Image
                      src="/images/p2.jpeg"
                      width={32}
                      height={32}
                      alt=""
                      className="rounded-full"
                    />
                  </span>
                  <span className="rounded-full w-10 h-10 overflow-hidden bg-white flex justify-center items-center -ms-3 p-1">
                    <Image
                      src="/images/p3.jpeg"
                      width={32}
                      height={32}
                      alt=""
                      className="rounded-full"
                    />
                  </span>
                </div>
              </div>
              <ButtonMoveRight text="See how it works" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
