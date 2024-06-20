import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const data = [
    { title: "Home", url: "/" },
    { title: "About us", url: "/about us" },
    { title: "Go karts", url: "/go karts" },
    { title: "Zorb Balls", url: "/zorb balls" },
    { title: "Face Painting", url: "/face painting" },
    { title: "Inflatable Dart Boards", url: "/inflatable dart boards" },
    { title: "Penalty Shoot Out", url: "/penalty shoot out" },
    { title: "Wall Painting", url: "/wall painting" },
    { title: "Contact Us", url: "/contact us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full mt-[-3vw]">
      <nav
        className={`bg-gradient-to-b  from-gradient-start to-gradient-end p-[1vw] w-full z-50 transition-all duration-300 mt-[2vw]  flex items-center `}
      >
        <>
          <figure className="w-full max-w-[15vw] pt-[1vw]">
            <img src="/img/logo.png" alt="logo" className="w-full" />
          </figure>
          <ul className="flex gap-[2vw] justify-center mt-[0.3vw] pt-[1vw]">
            {data.map((item) => (
              <>
                <li key={item.title} className="">
                  <Link
                    to={item.url}
                    className="pl-[1vw] text-white font-medium text-[1.1vw]"
                  >
                    {item.title}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </>
      </nav>
    </header>
  );
};

export default Header;
