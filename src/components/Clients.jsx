import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientCard from "./Card"; // Adjust path as needed
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../customcss/clients.css"; // Create this CSS file for custom styles

// Custom arrow components using Material-UI icons
const CustomPrevArrow = (props) => (
  <ChevronLeftIcon {...props} className="slick-arrow slick-prev text-black" />
);

const CustomNextArrow = (props) => (
  <ChevronRightIcon {...props} className="slick-arrow slick-next text-black" />
);

const Clients = () => {
  let clientsData = [
    {
      title: "Face Painting",
      img: "/img/2.jpg",
    },
    {
      title: "Face Painting",
      img: "/img/1.jpg",
    },
    {
      title: "Face Painting",
      img: "/img/4.jpg",
    },
    {
      title: "Face Painting",
      img: "/img/6.jpg",
    },
    {
      title: "Face Painting",
      img: "/img/7.jpg",
    },
    {
      title: "Face Painting",
      img: "/img/1.jpg",
    },
    {
      title: "Face Painting",
      img: "/img/2.jpg",
    },
    {
      title: "Face Painting",
      img: "/img/4.jpg",
    },
    {
      title: "Face Painting",
      img: "/img/6.jpg",
    },
    {
      title: "Face Painting",
      img: "/img/7.jpg",
    },
    {
      title: "Face Painting",
      img: "/img/7.jpg",
    },
    {
      title: "Face Painting",
      img: "/img/7.jpg",
    },
    {
      title: "Face Painting",
      img: "/img/7.jpg",
    },
    {
      title: "Face Painting",
      img: "/img/7.jpg",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: true,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-[80vw] m-auto ">
      <Slider {...settings} className="custom-slider">
        {clientsData.map((client, index) => (
          <div key={index} className="grid grid-cols-4 gap-[1vw]">
            <ClientCard title={client.title} img={client.img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Clients;
