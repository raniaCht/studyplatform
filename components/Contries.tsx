import { contryType } from "@/lib/types";
import React from "react";
import ContryCard from "./ContryCard";

const contries: contryType[] = [
  {
    image: "/images/d1.png",
    name: "USA",
    offerNumber: "13 Offer available",
  },
  {
    image: "/images/d2.png",
    name: "Europe",
    offerNumber: "13 Offer available",
  },
  {
    image: "/images/d3.png",
    name: "Egypte",
    offerNumber: "13 Offer available",
  },
  {
    image: "/images/d4.png",
    name: "Japan",
    offerNumber: "13 Offer available",
  },
  {
    image: "/images/d5.png",
    name: "Turkey",
    offerNumber: "13 Offer available",
  },
  {
    image: "/images/d6.png",
    name: "Mexico",
    offerNumber: "13 Offer available",
  },
  {
    image: "/images/d7.png",
    name: "Thailand",
    offerNumber: "13 Offer available",
  },
  {
    image: "/images/d8.png",
    name: "United Kingdom",
    offerNumber: "13 Offer available",
  },
  {
    image: "/images/d9.png",
    name: "Switrezland",
    offerNumber: "13 Offer available",
  },
];

function Contries() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl text-black">
          Your opportunities are diverse across the world
        </h2>
        <span className="text-sm text-black">
          We always try to provide you with opportunities and expand your goals
        </span>
        <div className="grid grid-cols-3 gap-10 mt-6 w-2/3">
          {contries.map((contry) => (
            <ContryCard contry={contry} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contries;
