import React from "react";
import { servicesData } from "../data";

const Events = () => {
  const btnColors = [
    "bg-[#fe5f97] bg-opacity-100",
    "bg-[#32cfbc] bg-opacity-100",
    "bg-[#255ea8] bg-opacity-100",
  ];

  return (
    <main className="bg-[#255ea8] overflow-x-hidden px-[2vw] pt-[5vw] pb-[2vw] mt-[1vw]">
      <h1 className="text-white font-bold text-[10vw] lg:text-[5vw] text-center mb-[5vw] lg:mb-[2vw]">
        Events
      </h1>
      <section className="flex flex-wrap gap-[5vw] lg:gap-[3vw] justify-center">
        {servicesData?.map((service, index) => (
          <div
            className="flex flex-col items-center justify-center relative w-full sm:w-auto"
            key={index}
          >
            <img
              src={service.img}
              className="w-full sm:w-[20vw] sm:h-[20vw] object-cover rounded-md"
              alt={service.btn}
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center rounded-md">
              <button
                className={`${btnColors[index]} text-white font-medium p-[3vw] lg:p-[1vw] lg:w-[10vw] lg:h-[4vw] rounded-md transition-all duration-300 hover:scale-105 absolute bottom-[1vw]`}
              >
                {service.btn}
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Events;
