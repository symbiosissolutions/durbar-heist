import React from "react";

const background = () => {
  return (
    <div>
      <div className=" absolute top-[50%] -left-10 rotate-12 opacity-50 ">
        <div className="max-w-xs  bg-secondary border border-secondary rounded-lg shadow-lg">
          <img className="rounded-t-lg" src="/durbar/1.jpg" alt="" />
          <div className=" bg-[#E5CCA5] p-20" />
        </div>
      </div>

      <div className=" absolute top-1/4 -right-10 rotate-[-16deg] opacity-40 ">
        <div className="max-w-xs bg-secondary border border-secondary rounded-lg shadow-lg">
          <img className="rounded-t-lg" src="/durbar/12.jpg" alt="" />
          <div className=" bg-[#C3B19B] p-20" />
        </div>
      </div>

      <div className=" absolute top-3/4 left-1/3 rotate-[-18deg] opacity-20 ">
        <div className="max-w-xs bg-secondary border border-secondary rounded-lg shadow-lg">
          <img className="rounded-t-lg" src="/durbar/22.jpg" alt="" />
        </div>
      </div>

      <div className=" absolute bottom-3/4 left-2/5 rotate-[184deg] opacity-40 ">
        <div className=" max-w-xs bg-secondary border border-secondary rounded-lg shadow-lg">
          <img className="rounded-t-lg" src="/durbar/18.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default background;
