import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

function Payments() {
  return (
    <div className="bg-gray-50 pb-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <h1 className="flex flex-nowrap justify-center items-center gap-3 text-black">
            <ShieldCheck size={40} />
            <span className="text-3xl whitespace-nowrap font-bold">
              Pay Safely
            </span>
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <Image
              src="/images/visa_icon.svg.png"
              width={100}
              height={40}
              alt=""
            />
            <Image
              src="/images/mastercard-icon.svg.png"
              width={100}
              height={40}
              alt=""
            />
            <Image
              src="/images/GooglePay.svg.png"
              width={100}
              height={40}
              alt=""
            />
            <Image
              src="/images/paypal-icon.svg.png"
              width={100}
              height={40}
              alt=""
            />
            <Image
              src="/images/apple-pay-icon.svg.png"
              width={100}
              height={40}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
