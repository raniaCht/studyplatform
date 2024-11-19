import { Globe, Headset, LogIn, UserRoundPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="text-black flex justify-around items-center py-4">
      <h1 className="flex justify-center items-center gap-2 text-xl font-bold">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
        <span>Study Platform</span>
      </h1>
      <nav className="flex justify-center items-center gap-3 font-normal">
        <Link href="">Home</Link>
        <Link href="">Blog</Link>
        <Link href="">FAQs</Link>
        <Link href="">Contact us</Link>
      </nav>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-2 pe-3 me-2 border-e border-black border-opacity-10">
          <button className="flex justify-center items-center gap-1 px-4 py-2 rounded-lg bg-black text-gray-50">
            <UserRoundPlus />
            <span>Create account</span>
          </button>
          <button className="flex justify-center items-center gap-1 px-4 py-2 rounded-lg border border-opacity-40 bg-white border-black">
            <span>Login</span>
            <LogIn />
          </button>
          <button className="flex justify-center items-center gap-1 px-4 py-2 rounded-lg bg-white">
            <Globe />
            <span> EN - EUR (€)</span>
          </button>
        </div>
        <button className="flex justify-center items-center px-4 py-2 rounded-lg bg-white">
          <Headset />
        </button>
      </div>
    </header>
  );
}

export default Header;
