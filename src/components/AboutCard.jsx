import React from "react";

const AboutCard = ({ icon, heading, text }) => {
  return (
    <div className="flex flex-col border text-left rounded-2xl py-12 px-8 duration-500 ease-in-out hover:transform hover:scale-105 hover:rotate-1">
      <div>
        <div className="bg-primaryBlue inline-block p-2 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-bold py-4">{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AboutCard;
