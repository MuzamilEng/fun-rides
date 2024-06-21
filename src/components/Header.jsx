import React from "react";
import { Facebook, Twitter, Instagram, Call } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { linkData } from "../data";

const Header = () => {
  // Get the current location using useLocation hook from react-router-dom
  const location = useLocation();

  return (
    <header>
      <section className="flex justify-between w-full max-w-[90vw] m-auto">
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton
            component="a"
            href="tel:112334555"
            sx={{ color: "#fe5f97" }}
          >
            <Call />
          </IconButton>
          <p className="text-[#fe5f97] font-bold transition-all duration-300 hover:text-black hover:cursor-pointer text-[1.4vw]">
            (1) 12334555
          </p>
        </Box>
        <Box display="flex" gap={1}>
          <IconButton
            component="a"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fe5f97" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fe5f97" }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fe5f97" }}
          >
            <Instagram />
          </IconButton>
        </Box>
      </section>
      <section className="flex ml-[42vw] gap-[30.5vw] items-center mt-[3vw]">
        <figure className="w-full max-w-[14vw]">
          <img src="/img/kidLogo.png" alt="kig logo" className="w-full" />
        </figure>
        <button className="bg-[#32cfbc] transition-all duration-300 hover:bg-blue-900 text-white font-bold p-[1vw] rounded-full">
          RESERVATION
        </button>
      </section>
      <section>
        <nav className="w-full flex justify-center mt-[3vw]">
          <div className="flex gap-[5vw]">
            {linkData?.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className={`text-[#fe5f97] text-[1.3vw] font-bold transition-all duration-300 rounded-full ${
                  location.pathname === link.url
                    ? "bg-[#fe5f97] text-white"
                    : ""
                }`}
              >
                <p className="py-[0.6vw] px-[2vw] text-[#255ea8] hover:text-white hover:bg-[#fe5f97] transition-all duration-300 hover:rounded-full">
                  {link.title}
                </p>
              </Link>
            ))}
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Header;
