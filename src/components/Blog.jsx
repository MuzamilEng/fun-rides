import React from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogData } from "../data";

const Blog = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide arrows
    dots: false, // Show dots
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <main className="bg-[#32cfbc] flex justify-center gap-[3vw] items-center pt-[5vw] pb-[2vw]">
      <section>
        <h1 className="text-white font-bold text-[6vw]">Blog</h1>
        <article className="w-full max-w-[40vw]">
          <Slider {...settings}>
            {blogData?.map((item, index) => (
              <div key={index} className="team-card">
                <h2 className="text-white font-bold text-[3vw] transition-all duration-300 hover:text-[#fe5f97] hover:cursor-pointer">
                  {item.title}
                </h2>
                <p className="text-white">{item.desc}</p>
              </div>
            ))}
          </Slider>
          <button className="bg-[#fe5f97] transition-all duration-300 hover:bg-blue-900 text-white font-bold p-[1vw] rounded-full mt-[2vw]">
            More info
          </button>
        </article>
      </section>
      <section>
        <figure>
          <img src="/img/blog.png" alt="blog" />
        </figure>
      </section>
    </main>
  );
};

export default Blog;
