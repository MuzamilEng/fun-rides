import React from "react";

const Updates = () => {
  return (
    <main className="bg-[#255ea8] pb-[5vw] pt-[5vw] lg:pt-[1vw] lg:pb-[1vw]">
      <section className="grid grid-cols-1 lg:grid-cols-2 px-[9vw]  py-[4vw]">
        <p className="text-white font-bold text-[5vw] lg:text-[3vw]">
          Receive Event Updates
        </p>
        <form action="" className="flex flex-col mt-[3vw] lg:mt-[1.5vw]">
          <input
            type="text"
            placeholder="YOUR EMAIL ADDRESS"
            name=""
            className="w-full max-w-[90vw] border-[1px] border-white text-white placeholder:white bg-transparent p-[2vw] lg:p-[0.5vw] rounded-full focus:outline-none"
          />
        </form>
      </section>
      <button
        type="submit"
        className="bg-[#fe5f97] transition-all duration-300 hover:bg-blue-900 text-white lg:font-medium rounded-full ml-[10vw] lg:ml-[49.5vw] py-[0.7vw] px-[3vw] lg:translate-y-[-3vw]"
      >
        SIGNUP
      </button>
    </main>
  );
};

export default Updates;
