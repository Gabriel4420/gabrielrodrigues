import PropertiesDataApi from "@/interfaces/PropertiesDataApi";
import Image from "next/image";
import React from "react";

const Skills: React.FC<PropertiesDataApi> = ({ data }: any) => {
  return (
    <div className="w-full p-2 z-10" id="skills">
      <div className="max-w-[77.5rem] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase font-bold text-[#3ddb80]  hover:underline-4">
          Habilidades
        </p>
        <h2 className="py-2 ">O que eu posso fazer</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
          {data.map(
            (tech: { name: string; logo: { url: string } }, index: number) => {
              // {name:string, logo:{url:string}}

              return (
                <div
                  key={index}
                  className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
                >
                  <div className="grid  justify-center items-center place-items-center">
                    <div className="m-auto">
                      <Image
                        src={tech.logo.url}
                        width="200"
                        height="100"
                        alt="/"
                        title={tech.name}
                        className="py-10"
                      />
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
