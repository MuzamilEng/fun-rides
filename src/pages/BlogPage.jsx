import React from "react";
import EventIcon from "@mui/icons-material/Event"; // Import Event icon from Mui icons
import PanoramaIcon from "@mui/icons-material/Panorama";
import Pagination from "../components/Pagination";
import { blogPageData } from "../data";

const BlogPage = () => {
  return (
    <main className="bg-[#255ea8] overflow-y-hidden pt-[5vw] pb-[2vw] mt-[1vw]">
      <h1 className="text-white font-bold text-[6vw] ml-[8.5vw]">Blog</h1>

      <section className="flex w-full justify-center gap-[10vw] items-start">
        <article className="w-full max-w-[50vw]">
          {blogPageData?.map((elem, ind) => (
            <div className="flex flex-col gap-[2vw]" key={ind}>
              <div className="flex items-center gap-[0.5vw]">
                <EventIcon style={{ fontSize: "2vw", color: "white" }} />{" "}
                {/* Calendar icon */}
                <p className="text-white font-medium text-[1.5vw]">
                  {elem.date}
                </p>
              </div>
              <figure>
                <img src={elem.img} alt="" className="w-full" />
              </figure>
              <p className="text-white text-[1vw] w-full max-w-[50vw]">
                {elem.desc}
              </p>
              <div>
                <button className="bg-[#fe5f97] transition-all duration-300 hover:bg-blue-900 text-white font-bold py-[1vw] px-[2vw] rounded-full">
                  Read more
                </button>
              </div>
              <div className="mt-[2vw] border-solid border-[2px] mb-[1vw] border-b-white"></div>
            </div>
          ))}
          <Pagination />
        </article>
        <aside>
          <h1 className="text-white font-bold text-[3vw]">Recent Posts</h1>
          <article className="flex flex-col gap-[2vw]">
            {blogPageData?.map((elem, ind) => (
              <div key={ind}>
                <figure className="w-full max-w-[20vw]">
                  <img src={elem.img} alt="aside" className="w-full" />
                </figure>
                <p className="text-white transition-all duration-300 hover:text-[#fe5f97] hover:cursor-pointer w-full max-w-[20vw] text-[1.1vw] mt-[1vw]">
                  {elem.info}
                </p>
              </div>
            ))}
          </article>
        </aside>
      </section>
    </main>
  );
};

export default BlogPage;
