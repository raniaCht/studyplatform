import Image from "next/image";
import React, { PropsWithChildren } from "react";

type PropsType = {
  title: string;
  image: string;
  bgColor: string;
  isReverse: boolean;
};

function Step(props: PropsWithChildren<PropsType>) {
  return (
    <div className={props.bgColor}>
      <div
        className={`container text-black mx-auto flex w-2/3 ${
          props.isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } flex-col-reverse justify-between gap-6 items-center`}
      >
        <div className="w-full p-5">
          <Image
            src={props.image}
            width={300}
            height={300}
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-full flex flex-col items-center lg:items-start gap-3 ms-5">
          <h3 className="text-xl font-bold mt-5">{props.title}</h3>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Step;
