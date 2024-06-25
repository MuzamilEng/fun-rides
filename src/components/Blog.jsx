import React from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogData } from "../data";
import { Link } from "react-router-dom";

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
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="bg-[#32cfbc] flex lg:flex-row flex-col justify-center gap-[5vw] lg:gap-[3vw] items-center pt-[5vw] px-[4vw] lg:px-[vw] pb-[2vw]">
      <section>
        <figure>
          <img src="/img/blog.png" alt="blog" />
        </figure>
      </section>
      <section>
        <h1 className="text-white font-bold text-[8vw] lg:text-[6vw]">Blog</h1>
        <article className="w-full max-w-[80vw]  lg:max-w-[40vw]">
          <Slider {...settings}>
            {blogData?.map((item, index) => (
              <div key={index} className="team-card mt-[3vw] lg:mt-[vw]">
                <h2 className="text-white font-bold text-[5vw] lg:text-[3vw] transition-all duration-300 hover:text-[#fe5f97] hover:cursor-pointer">
                  {item.title}
                </h2>
                <p className="text-white">{item.desc}</p>
              </div>
            ))}
          </Slider>
          <button className="bg-[#fe5f97] transition-all duration-300 hover:bg-blue-900 text-white font-bold py-[3vw] px-[5vw] lg:p-[1vw] rounded-full mt-[4vw] lg:mt-[2vw]">
            <Link to="/blog">
            More info
            </Link>
          </button>
        </article>
      </section>
    </main>
  );
};

export default Blog;
