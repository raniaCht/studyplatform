import React from "react";
import Step from "./Step";
import Link from "next/link";
import { UserRoundPlus } from "lucide-react";
import ButtonWithShadow from "./ButtonWithShadow";

function Steps() {
  return (
    <div className="bg-white flex flex-col items-center py-10">
      <h2 className="text-2xl text-black">How does StudyPlatform card work?</h2>
      <div className="flex flex-col mt-5 w-full relative">
        <span className="absolute w-[1px] h-[69%] opacity-10 bg-black top-[15%] right-1/2 -translate-x-1/2"></span>
        <span className="w-5 h-5 rounded-full bg-black absolute top-[15%] left-1/2 -translate-x-1/2"></span>
        <span className="w-5 h-5 rounded-full bg-black absolute top-1/2 left-1/2 -translate-x-1/2"></span>
        <span className="w-5 h-5 rounded-full bg-black absolute bottom-[15%] left-1/2 -translate-x-1/2"></span>

        <Step
          bgColor="bg-white"
          image="/images/about-1.png"
          isReverse={false}
          title="Fill the information form to open an account "
        >
          <div className="flex flex-col items-start text-lg gap-2">
            <p className="">
              The information that we receive will help us to send you right
              offers and opportunities that matched with your filed of study &
              guide you in a good path
            </p>
            <Link
              href=""
              className="flex justify-center items-center gap-2 px-3 py-2"
            >
              <UserRoundPlus /> <span>Open an account</span>
            </Link>
          </div>
        </Step>
        <Step
          bgColor="bg-white"
          image="/images/about-2.png"
          isReverse={true}
          title="pay for you card subscription"
        >
          <p className="text-lg">
            The subscription fee is annual and includes all the features of the
            card without any difference in payment plans
          </p>
        </Step>
        <Step
          bgColor="bg-gray-50"
          image="/images/about-3.png"
          isReverse={false}
          title="Start using your card in few second"
        >
          <div className="flex flex-col items-start text-lg gap-2">
            <p className="">
              You can get your card virtually to start using it or wait to get
              your Physical card
            </p>
            <ButtonWithShadow
              icon={<UserRoundPlus className="text-white" />}
              text="Open an account"
              isReverse={true}
            />
          </div>
        </Step>
      </div>
    </div>
  );
}

export default Steps;
