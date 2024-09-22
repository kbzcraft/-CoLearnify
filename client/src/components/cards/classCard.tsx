import Image from "next/image";
import React from "react";

interface classCardProps {
  thumbnail: string;
  logo: string;
  title: string;
  creator: string;
}

const ClassCard = ({ thumbnail, logo, title, creator }: classCardProps) => {
  return (
    <div className="flex flex-col gap-2  items-center">
      <Image
        alt="class thumbnail unavailable"
        src={thumbnail}
        width={300}
        height={200}
        className="classThumbnail max-w-80 w-full h-full aspect-video bg-text rounded-md"
      />
      <div className="flex gap-2  self-start md:self-center">
        <Image
          alt="logo"
          src={logo}
          height={40}
          width={40}
          className="bg-text rounded-full aspect-square max-w-10 w-full h-10"
        />
        <div>
          <p>{title}</p>
          <em>{creator}</em>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
