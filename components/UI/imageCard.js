import React from "react";
import Image from "next/image";

const imageCard = ({ src }) => {
  return (
    <div className="w-full h-full  bg-center bg-cover duration-500  bg-secondary border border-secondary rounded-lg shadow-lg relative">
      <Image
        src={src}
        fill
        style={{ objectFit: "cover", borderRadius: " 0.4rem" }}
        sizes="100%"
        priority
        alt="Durbar Image"
      />
    </div>
  );
};

export default imageCard;
