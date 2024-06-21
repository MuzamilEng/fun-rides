import React from "react";
import Slider from "react-slick"; // Import React Slick
import { teamData } from "../data";

const Team = () => {
  const settings = {
    infinite: true, // Enable infinite loop for seamless transitions
    slidesToShow: 1, // Show one image card per slide
    slidesToScroll: 1, // Scroll by one card at a time
    autoplay: true, // Enable autoplay (optional)
    autoplaySpeed: 3000, // Set autoplay interval (optional)
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint for smaller screens
        settings: {
          slidesToShow: 2, // Show two cards on smaller screens
        },
      },
    ],
  };

  return (
    <main className="bg-[#fe5f97] pt-[4vw] pb-[2vw] flex w-full items-center justify-center gap-[10vw]">
      <article className="w-full max-w-[20vw] ">
        <Slider {...settings}>
          {teamData.map((item, index) => (
            <div key={index} className="team-card">
              <img src={item.img} alt={item.name} />
              <h3 className="text-white font-bold text-[2vw] text-center">
                {item.name}
              </h3>
            </div>
          ))}
        </Slider>
      </article>
      <article className="w-full max-w-[30vw]">
        <h2 className="text-white font-bold text-[5vw]  ">MEET THE TEAM</h2>
        <p className="text-white font-medium">
          We are glad to introduce our professional staff. Qualified and
          well-educated teachers will turn the educational process into a great
          and fun holiday for your children!
        </p>
        <button className="bg-transparent border-[2px] border-white transition-all duration-300 hover:bg-[#32cfbc] mt-[3vw] text-white font-bold py-[0.8vw] px-[2vw] rounded-full">
          contact us
        </button>
      </article>
    </main>
  );
};

export default Team;
