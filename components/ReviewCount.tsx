import { Star } from "lucide-react";
import React from "react";

function ReviewCount() {
  return (
    <div className="container mx-auto flex justify-start text-black gap-4">
      <div className="flex justify-start items-center gap-3">
        <span className="text-3xl flex justify-center items-end">
          <span className="text-5xl font-semibold">4.7</span> /5
        </span>
        <Star size={40} className="fill-green-400 text-green-400" />
      </div>
      <p className="flex flex-col items-start justify-end">
        <span>Based on 29000+</span>
        <span>
          customer reviews on <span className="text-lg">Trustpilot</span>
        </span>
      </p>
    </div>
  );
}

export default ReviewCount;
