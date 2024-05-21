import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:float-left ">
      <div className="p-12 mt-3 mb-3 left-[200px]">
        <h1 className="
        bg-gradient-to-r from-[#F87516] via-[#5E11FF] to-[#5E11FF] 
          bg-clip-text text-transparent font-Sora text-[22px] font-light p-1 
        ">Transform Your <span className=" line-clamp-2">Website</span></h1>
        <h3 className="font-Sora text-center text-lg  font-semibold text-[#E5E5E7]">
          With Motion<span className="tracking-wider sm:line-clamp-1md:tracking-wider ">Art Effect</span>
        </h3>
      </div>
    </div>
  );
};

export default Main;
