"use client";
import { Circle } from "lucide-react";
import React, { useState } from "react";

const questions = [
  {
    Q: "What is a Payment Gateway?",
    A: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players. \n Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.",
  },
  {
    Q: "Do I need to pay to StudyPlatform even when there is no transaction going on in my business?",
    A: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    Q: "What platforms does StudyPlatform payment gateway support?",
    A: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
  },
  {
    Q: "Does StudyPlatform provide international payments support?",
    A: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    Q: "What is a Payment Gateway?",
    A: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];

function FAQs() {
  const [qSelected, setQSelected] = useState(0);
  return (
    <div className="bg-white min-h-[600px] ">
      <div className="container mx-auto py-20">
        <h1 className="text-black text-center text-3xl mb-5">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col lg:flex-row relative justify-end">
          <div className="w-full lg:w-1/2 h-auto relative lg:absolute top-6 left-0 lg:left-10 border border-opacity-10 border-gray-400 bg-white text-black flex flex-col">
            {questions.map((question, index) => (
              <button
                className={`w-full px-4 py-4 flex justify-start items-center gap-2 border-opacity-10 border-b border-b-gray-400 ${
                  index == qSelected ? "bg-gray-200 font-bold" : ""
                } `}
                onClick={() => setQSelected(index)}
              >
                <Circle
                  size={20}
                  className={`text-gray-700 ${
                    index == qSelected ? "fill-gray-700" : ""
                  }`}
                />
                <span className="text-start">{question.Q}</span>
              </button>
            ))}
          </div>
          <div className="min-h-72 bg-gray-200 w-full lg:w-1/2 text-black p-10 ps-12 shadow-answer rounded-lg">
            {questions[qSelected].A}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
