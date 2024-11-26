import { reviewType } from "@/lib/types";
import Image from "next/image";
import React from "react";

function Review({ review }: { review: reviewType }) {
  return (
    <div className="text-black flex flex-col items-start gap-5">
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={review.image}
            width={40}
            height={40}
            alt=""
            className="w-full "
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="font-bold">{review.ownerName}</span>
          <span className="text-sm text-gray-400">@{review.ownerUsername}</span>
        </div>
      </div>
      <p className="ms-2 font-semibold text-lg">{review.text}</p>
      <span className="self-end text-gray-400 text-sm">{review.date}</span>
    </div>
  );
}

export default Review;
