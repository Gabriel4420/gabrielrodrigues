import { PropertiesProjectItem } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  title,
  backgroundImg,
  projectUrl,
  key,
}: PropertiesProjectItem) => {
  return (
    <div
      className="relative block items-center justify-center h-[500px]  w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#98e49e] to-[#19ba5f]"
      key={key}
    >
      <Image
        className="rounded-xl w-full h-full  group-hover:opacity-10"
        width="800"
        height="400"
        src={backgroundImg[0]}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center py-3">
          {title}
        </h3>
        <Link href={projectUrl}>
          <p className="text-center py-2 px-10 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:underline">
            Saiba mais
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
