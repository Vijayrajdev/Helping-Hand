import React from "react";
import { RiHandHeartFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="text-white flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <RiHandHeartFill className="h-8 w-8 text-orange-500" />
        <h1 className="text-3l font-bold">Helping Hand</h1>
      </div>
      <div>
        <button className="border px-4 py-1 text-sm md:text-base md:px-6 md:py-2 md:font-bold hover:bg-orange-400 hover:border-orange-400 hover:text-black">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
