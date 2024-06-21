import React from "react";

const Updates = () => {
  return (
    <main className="bg-[#255ea8] ">
      <section className="grid grid-cols-2 px-[9vw]  py-[4vw]">
        <p className="text-white font-bold text-[3vw]">Receive Event Updates</p>
        <form action="" className="flex flex-col mt-[1.5vw]">
          <input
            type="text"
            placeholder="YOUR EMAIL ADDRESS"
            name=""
            className="w-full max-w-[90vw] border-[1px] border-white text-white placeholder:white bg-transparent p-[0.5vw] rounded-full focus:outline-none"
          />
        </form>
      </section>
      <button
        type="submit"
        className="bg-[#fe5f97] transition-all duration-300 hover:bg-blue-900 text-white font-bold rounded-full ml-[49.5vw] py-[0.7vw] px-[3vw] translate-y-[-3vw]"
      >
        SIGNUP
      </button>
    </main>
  );
};

export default Updates;
