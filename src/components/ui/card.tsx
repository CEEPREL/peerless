import React from "react";
import Image from "next/image";

interface CardProps {
  imgUrl: string;
  role: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imgUrl, role, description }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md dark:hover:hover:bg-[#F9E9E9] hover:bg-[#F9E9E9] bg-white dark:bg-gray-700">
      <div className="flex p-3  mb-2 w-[50px] rounded-full bg-gray-100">
        <Image src={imgUrl} alt="company logo" width={50} height={50} />
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{role}</h3>
      </div>

      <p className="text-xs text-center text-gray-600 dark:text-gray-400 mt-2">
        {description}
      </p>
    </div>
  );
};

export default Card;
