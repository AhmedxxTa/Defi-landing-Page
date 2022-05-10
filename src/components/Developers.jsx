import React from "react";
import terminalImg from '../assets/terminal.png';

const Developers = () => {
  return (
    <div className="w-full bg-black text-white text-center" id="developers">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div className="m-auto md:flex flex-col">
          <h1 className="py-4">Superpowers for DEFI developers.</h1>
          <p className="py-4 text-xl">
            Checkout the <span className="text-primaryBlue">documentation </span>, the
            <span className="text-primaryBlue ml-1">quick start</span> or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className="flex justify-center items-center w-full py-16">
          <img className="max-w-[250px] shadow-lg shadow-cyan-500/50" src={terminalImg} alt="terminal" />
        </div>
      </div>
    </div>
  );
};

export default Developers;
