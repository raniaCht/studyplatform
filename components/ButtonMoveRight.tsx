import { MoveRight } from "lucide-react";
import React from "react";

function ButtonMoveRight({ text }: { text: string }) {
  return (
    <button className="flex flex-nowrap justify-center items-center gap-2 px-4 py-2 shadow-primary bg-sky-950 rounded-lg active:shadow-none active:-translate-x-1 active:translate-y-1">
      <span className="whitespace-nowrap text-white">{text}</span>
      <MoveRight className="text-white" />
    </button>
  );
}

export default ButtonMoveRight;
