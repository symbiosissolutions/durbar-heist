import React from "react";

const input = ({ label, icon, placeholder, onChange, type }) => {
  return (
    <div className=" flex flex-col gap-y-2  ">
      <label className="block text-base  text-[#614C41] font-knightWarrior tracking-widest">
        {label}
      </label>
      <div className="     border-[2px]  flex  rounded-md shadow-md">
        <div className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white ">
          <img
            src={"icons/game/" + icon + ".svg"}
            alt={icon}
            className=" w-5 h-5"
          />
        </div>

        <input
          type={type ? type : "search"}
          x-model="input1"
          className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none font-knightWarrior tracking-widest"
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default input;
