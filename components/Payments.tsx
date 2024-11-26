import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

function Payments() {
  return (
    <div className="bg-gray-50 pb-10">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-10">
          <h1 className="flex justify-center items-center gap-3 text-black">
            <ShieldCheck size={40} />
            <span className="text-3xl font-bold">Pay Safely</span>
          </h1>
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
  );
}

export default Payments;
