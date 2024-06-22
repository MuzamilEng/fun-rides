import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { footerData } from "../data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#15427E] text-white py-10">
      <section className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[10vw] items-start">
          <div className="lg:mr-8">
            <figure className="mt-8 lg:mt-[2vw] w-full max-w-[25vw]">
              <img
                src="/img/footerLogo.png"
                alt="Kiddaboo"
                className="w-full"
              />
            </figure>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <FacebookIcon fontSize="small" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <TwitterIcon fontSize="small" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <InstagramIcon fontSize="small" />
              </a>
            </div>
          </div>
          <nav className="flex flex-col sm:flex-row flex-wrap gap-8 lg:gap-[10vw] w-full mt-8 lg:mt-4">
            {footerData?.map((section, index) => (
              <article key={index} className="px-4">
                <h3 className="font-bold mb-4 text-xl lg:text-[2vw]">
                  {section.title}
                </h3>
                {section.links && (
                  <ul>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="mb-2">
                        <Link to={link.url} className="hover:underline">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                    {section.links.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-2">
                        {item.address && (
                          <p className="flex items-center">
                            <LocationOnIcon className="mr-2" />
                            {item.address}
                          </p>
                        )}
                        {item.email && (
                          <p className="flex items-center">
                            <EmailIcon className="mr-2" />
                            Email: {item.email}
                          </p>
                        )}
                        {item.phoneNumber && <p>Phone: {item.phoneNumber}</p>}
                      </li>
                    ))}
                  </ul>
                )}
                {section.hours && (
                  <ul className="flex flex-col">
                    {section.hours.map((hour, hourIndex) => (
                      <li key={hourIndex} className="mb-2">
                        {hour}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </nav>
        </div>
      </section>
      <p className="text-white mt-8 lg:mt-[5vw] ml-4 lg:ml-[3vw] text-center lg:text-left">
        Copyright 2018 Kiddaboo. All Rights Reserved. Privacy Policy. Designed
        by MotoCMS.com
      </p>
    </footer>
  );
};

export default Footer;
