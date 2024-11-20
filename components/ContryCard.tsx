import { contryType } from "@/lib/types";
import Image from "next/image";
import React from "react";

function ContryCard({ contry }: { contry: contryType }) {
  return (
    <div className="text-black p-10 shadow-card rounded-lg">
      <div className="flex gap-4 items-center">
        <span className="rounded-full overflow-hidden w-12 h-12 flex justify-center items-center">
          <Image
            src={contry.image}
            width={100}
            height={100}
            alt={contry.name}
            className="rounded-full h-full w-full"
          />
        </span>
        <div className="flex flex-col items-start">
          <p>{contry.name}</p>
          <span>{contry.offerNumber}</span>
        </div>
      </div>
    </div>
  );
}

export default ContryCard;
