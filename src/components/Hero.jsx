import React from "react";
import heroVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute opacity-95 -z-10"
        src={heroVid}
        autoPlay
        loop
        muted
      />

      <div className="w-full h-[90%] flex flex-col justify-center items-center text-center text-white px-4">
        <h1>Decentralized</h1>
        <h1 className="py-2">
          <span className="text-primaryBlue">Trading</span> Protocol
        </h1>
        <p className="text-xl py-4">
          Guaranteed Liquidity trading for millions of users and top Ethereum
          applications.
        </p>

        <div className="flex justify-center items-center">
          <button className="bg-gradient-to-r from-primaryPurple to-primaryBlue m-2 py-3 px-7 rounded-3xl active:scale-[0.97]">
            Use Defi
          </button>
          <button className="bg-transparent hover:bg-gradient-to-r from-primaryPurple to-primaryBlue text-primaryBlue hover:text-white border-[1px] border-primaryBlue m-2 py-3 px-7 rounded-3xl active:scale-[0.97]">
            FAQ
          </button>
        </div>
      </div>
      <div>
        <p className="text-white text-center text-2xl font-bold">Total Volume Secured: $42,104,783,662,47</p>
      </div>
    </div>
  );
};

export default Hero;
