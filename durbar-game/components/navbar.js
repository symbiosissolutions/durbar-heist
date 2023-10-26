import React from "react";

const navbar = () => {
  return (
    <nav className=" w-full flex justify-start items-center fixed ml-10 mt-5  z-10">
      <div className=" flex gap-x-2">
        <img
          src="/symbiosis/symbiosis-logo-b.png"
          alt="symbiosis logo"
          className=" w-24 h-24"
        />
        <div className=" text-black self-center  flex gap-x-2  ">
          <h1
            className=" font-sourceCode text-2xl
    font-semibold"
          >
            Symbiosis Solutions
          </h1>
          <div className=" bg-secondary px-3 py-1 text-primary mt-4 rotate-[-5deg] hover:rotate-0 transition-all duration-300 ">
            <p className=" text-sm self-end font-normal"> Presents </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
