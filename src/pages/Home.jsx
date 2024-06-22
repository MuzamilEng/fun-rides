import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Team from "../components/Team";
import LatestEvent from "../components/LatestEvent";
import Blog from "../components/Blog";
import Updates from "../components/Updates";

const Home = () => {
  return (
    <main>
      <section
        className="w-full "
        style={{
          backgroundImage: "url(/img/home.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",

          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="w-full">
          <h1 className="text-[#fe5f97] font-bold text-[10vw] lg:text-[5vw] ml-[23vw] lg:ml-[35vw] mt-[10vw] lg:mt-[4vw]">
            WELL COME
          </h1>
          <p className="text-[#113769] font-bold text-[5vw] lg:text-[3vw] ml-[19vw] lg:ml-[30.5vw] mt-[4vw]">
            MAGIC SPACE FOR HIDREN
          </p>
          <button className="bg-[#32cfbc]  ml-[30vw] lg:ml-[45vw] mt-[10vw] lg:mt-[5vw] transition-all duration-300 hover:bg-blue-900 text-white font-bold py-[1vw] px-[4vw] lg:p-[1vw] rounded-full">
            DISCOVER NOW
          </button>
        </section>
      </section>

      <AboutSection />
      <Services />
      <Gallery />
      <Team />
      <LatestEvent />
      <Blog />
      <Updates />
    </main>
  );
};

export default Home;
