import React from "react";

const AboutSection = () => {
  return (
    <main className="bg-[#32cfbc] p-[4vw]">
      <section className="flex justify-center gap-[9vw] items-center lg:flex-row flex-col">
        <figure>
          <img src="/img/aboutImg.png" alt="about image" />
        </figure>
        <article className="flex flex-col gap-[3vw] w-full max-w-[90vw] lg:max-w-[30vw]">
          <h1 className="text-white font-bold text-[5vw]">ABOUT US</h1>
          <p className="text-white lg:font-medium">
            Specializing in organizing all kinds of events for toddlers, kids
            and teenagers, we mainly focus on clowns and birthdays. Kiddaboo is
            LA’s go-to site for the best Summer Camps in Los Angeles, Things To
            Do in Los Angeles with Kids, After School Classes, Birthday Party
            Places, and so much more.
          </p>
          <p className="text-white lg:font-medium">
            Specializing in organizing all kinds of events for toddlers, kids
            and teenagers, we mainly focus on clowns and birthdays. Kiddaboo is
            LA’s go-to site for the best Summer Camps in Los Angeles, Things To
            Do in Los Angeles with Kids, After School Classes, Birthday Party
            Places, and so much more.
          </p>
          <button className="bg-[#fe5f97] transition-all duration-300 hover:bg-blue-900 text-white font-bold p-[1vw] rounded-full">
            More info
          </button>
        </article>
      </section>
    </main>
  );
};

export default AboutSection;
