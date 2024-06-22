import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const Pagination = () => {
  let paginationData = [1, 2];

  return (
    <main className="flex gap-[1vw] mt-[2vw]">
      {paginationData?.map((elem, ind) => (
        <>
          <div
            key={ind}
            className="text-white bg-[#fe5f97] h-[6vw] w-[6vw] lg:h-[2vw] lg:w-[2vw] flex items-center justify-center"
          >
            <p className="text-center font-medium text-[3vw] lg:text-[1.3vw]">
              {elem}
            </p>
          </div>
        </>
      ))}
      <div className="text-white bg-[#fe5f97] h-[6vw] w-[6vw] lg:text-[1vw] text-[2vw] lg:h-[2vw] lg:w-[2vw] flex items-center justify-center">
        <DoubleArrowIcon style={{ color: "white", cursor: "pointer" }} />
      </div>
      <div className="text-white bg-[#fe5f97] h-[6vw] w-[6vw] lg:text-[1vw] text-[2vw] lg:h-[2vw] lg:w-[2vw] flex items-center justify-center">
        <ArrowForwardIcon style={{ color: "white", cursor: "pointer" }} />
      </div>
    </main>
  );
};

export default Pagination;
