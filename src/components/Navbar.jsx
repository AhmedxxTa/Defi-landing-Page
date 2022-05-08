import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] h-full mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="text-primaryBlue pointer-events-none">Defi</h1>
        </div>

        <div className="hidden md:flex">
          <ul className="flex text-white items-center cursor-pointer">
            <li className="opacity-80 hover:opacity-100">Platform</li>
            <li className="opacity-80 hover:opacity-100">Developers</li>
            <li className="opacity-80 hover:opacity-100">Community</li>
            <li className="opacity-80 hover:opacity-100">About</li>
            <button className="bg-gradient-to-r from-primaryPurple to-primaryBlue ml-4 py-3 px-7 rounded-3xl active:scale-[0.97]">Use Defi</button>
          </ul>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <AiOutlineMenu size={30} className="text-white" />
            ) : (
              <AiOutlineClose size={30} className="text-white" />
              )}
        </div>

        <div className={nav ? "w-full h-screen bg-black text-white absolute top-[90px] left-0 flex justify-center items-center text-center" : "absolute left-[-100%]"}>
          <ul>
            <li className="text-2xl cursor-pointer">Platform</li>
            <li className="text-2xl cursor-pointer">Developers</li>
            <li className="text-2xl cursor-pointer">Community</li>
            <li className="text-2xl cursor-pointer">About</li>
            <button className="bg-gradient-to-r from-primaryPurple to-primaryBlue m-8 py-3 px-7 rounded-3xl active:scale-[0.97]">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
