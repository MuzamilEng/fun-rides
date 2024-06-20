// ClientCard.js
import React from "react";

const ClientCard = ({ title, img }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full max-w-[20vw] border-[4px] border-red-900">
      <img src={img} alt={title} className="w-full max-w-[10vw]" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-end">
          <div className="w-full py-4 px-6">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
