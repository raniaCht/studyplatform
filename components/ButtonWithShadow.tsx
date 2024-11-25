import { MoveRight } from "lucide-react";
import React, { ReactNode } from "react";

type props = {
  text: string;
  icon: ReactNode;
  isReverse?: boolean;
};

function ButtonWithShadow({ text, icon, isReverse = false }: props) {
  return (
    <button
      className={`flex ${
        isReverse ? "flex-row-reverse" : ""
      } flex-nowrap justify-center items-center gap-2 px-4 py-2 shadow-primary bg-sky-950 rounded-lg active:shadow-none active:-translate-x-1 active:translate-y-1`}
    >
      <span className="whitespace-nowrap text-white">{text}</span>
      {icon}
    </button>
  );
}

export default ButtonWithShadow;
