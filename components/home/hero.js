import React from "react";

const hero = () => {
  return (
    <div>
      <h1 className=" text-[10rem] font-outline-2 font-knightWarrior tracking-wider font-medium group ">
        <div className=" flex justify-center items-center w-full">
          <span className=" text-[#E5CCA5] group-hover:-rotate-2  transition-all duration-500">
            D
          </span>
          <span className=" text-[#579796] group-hover:translate-y-3 transition-all duration-500">
            U
          </span>
          <span className=" text-[#614C41] transition-all duration-500">R</span>
          <span className=" text-[#ED7A69] group-hover:-translate-y-2 transition-all duration-500">
            B
          </span>
          <span className=" text-[#2A6F8D] group-hover:rotate-2 transition-all duration-500">
            A
          </span>
          <span className=" text-[#C14A38] group-hover:-translate-x-1 transition-all duration-500">
            R
          </span>
        </div>
      </h1>
      <p className=" font-knightWarrior float-right -mt-10 text-xl -mr-5">
        The game
      </p>
    </div>
  );
};

export default hero;
