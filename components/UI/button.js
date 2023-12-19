import React from "react";

const button = ({ text, font, tracking }) => {
  return (
    <button className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-full group">
      <span className="absolute inset-0 w-full h-full mt-2  bg-[#4d3c34] transition-colors group-hover:bg-[#352a24] ease px-9 md:w-auto  rounded-full " />
      <span className="absolute inset-0 w-full h-full  bg-[#614C41] transition-colors duration-300 group-hover:bg-[#4d3c34] ease px-9 md:w-auto  rounded-full  " />
      <span
        className={`relative text-white transition-colors duration-200 ease-in-out delay-100 font-${font} ${
          tracking && "tracking-widest"
        }`}
      >
        {text}
      </span>
    </button>
  );
};

export default button;
