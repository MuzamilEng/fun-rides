import React from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";

import Clients from "../components/Clients";
const CustomPrevArrow = (props) => (
  <button {...props} className="slick-arrow slick-prev">
    Previous
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="slick-arrow slick-next">
    Next
  </button>
);
const Home = () => {
  const slideImages = [
    { src: "/img/fixedbg.jpg" },
    { src: "/img/fixedbg2.jpg" },
    { src: "/img/fixedbg3.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Enable fade effect
    arrows: true, // Enable arrows
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Layout>
      <main>
        <Slider {...settings}>
          {slideImages.map((image, index) => (
            <figure key={index} className="w-full h-[43vw] relative">
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </figure>
          ))}
        </Slider>
        <section className="p-[2vw] ">
          <Clients />
        </section>
      </main>
    </Layout>
  );
};

export default Home;
