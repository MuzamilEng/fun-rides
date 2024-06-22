import React from "react";
import { servicesData2 } from "../data";

const Services = () => {
  const btnColors = [
    "bg-[#fe5f97]",
    "bg-[#32cfbc]",
    "bg-[#255ea8]",
    "bg-[#ff6347]",
  ];

  return (
    <main className="bg-[#f8d311] px-[2vw] pt-[5vw] pb-[2vw]">
      <h1 className="text-white font-bold text-[10vw] lg:text-[5vw] text-center mb-[2vw]">
        Kid Parties Services
      </h1>
      <section className="flex lg:flex-row flex-col lg:flex-wrap gap-[5vw] lg:gap-[3vw] justify-center">
        {servicesData2.map((service, ind) => {
          return (
            <div
              className="flex flex-col items-center justify-center"
              key={ind}
            >
              <img
                src={service.img}
                className="lg:w-[20vw] lg:h-[20vw] w-[90vw]  object-cover rounded-md"
              />
              <button
                className={`${btnColors[ind]} text-white font-bold p-[1vw] w-[25vw] h-[10vw] lg:w-[10vw] lg:h-[4vw] rounded-md mt-[1vw] transition-all duration-300 hover:scale-105`}
              >
                {service.btn}
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Services;
