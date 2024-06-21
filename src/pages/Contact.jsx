import React from "react";
import { contactData, formData } from "../data";

const Contact = () => {
  return (
    <main className="bg-[#255ea8] pt-[5vw] pb-[2vw] mt-[1vw]">
      <h1 className="text-white font-bold text-[5vw] ml-[10vw]">Contacts</h1>
      <article className="bg-[#32cfbc] flex p-[2vw] gap-[9vw] justify-center items-center mt-[3vw]">
        {contactData?.map((item, index) => (
          <div key={index} className="flex flex-col">
            <p className="text-white text-[2vw]  font-medium">{item.tuitle}</p>
            <p className="text-white text-[1.3vw] w-full max-w-[20vw] mt-[1vw] transition-all duration-300 hover:cursor-pointer hover:text-[#fe5f97]">
              {item.content}
            </p>
          </div>
        ))}
      </article>
      <section className="ml-[15vw] mt-[2vw]">
        <form className="w-full max-w-[50vw]">
          {formData?.map((item, index) => (
            <div key={index} className="flex flex-col ">
              <label
                htmlFor={item.name}
                className="text-white mb-[0.5vw] text-[1.3vw] font-medium"
              >
                {item.label}
              </label>
              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                className="text-white focus:outline-none p-[0.5vw]  bg-transparent mb-[2vw] border-b-2 border-white"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-[#fe5f97] transition-all duration-300 hover:bg-blue-900 text-white font-bold py-[1vw] px-[2.5vw] rounded-full"
          >
            submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
