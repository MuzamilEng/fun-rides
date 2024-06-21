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
      <h1 className="text-white font-bold text-[5vw] text-center mb-[2vw]">
        Kid Parties Services
      </h1>
      <section className="flex flex-wrap gap-[3vw] justify-center">
        {servicesData2.map((service, ind) => {
          return (
            <div
              className="flex flex-col items-center justify-center"
              key={ind}
            >
              <img
                src={service.img}
                className="w-[20vw] h-[20vw] object-cover rounded-md"
              />
              <button
                className={`${btnColors[ind]} text-white font-bold p-[1vw] w-[10vw] h-[4vw] rounded-md mt-[1vw] transition-all duration-300 hover:scale-105`}
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
