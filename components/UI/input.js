import React from "react";

const input = ({ label, icon, placeholder, onChange, type }) => {
  return (
    <div className=" flex flex-col gap-y-2  ">
      <label className="block text-base  text-[#614C41] font-knightWarrior tracking-widest">
        {label}
      </label>
      <div className="     border-[2px]  flex  rounded-md shadow-md">
        <button
          type=" submit"
          className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-900"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <input
          type={type ? type : "search"}
          x-model="input1"
          className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none font-knightWarrior tracking-widest"
          font-knightWarrior
          tracking-widest
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default input;
