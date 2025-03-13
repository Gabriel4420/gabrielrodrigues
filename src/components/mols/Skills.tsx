"use client";
import PropertiesDataApi from "@/interfaces/PropertiesDataApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { Settings } from "react-slick";
// Dynamic import for Slider
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
}) as React.ComponentType<Settings>;

const Skills: React.FC<PropertiesDataApi> = ({ data }: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load CSS files dynamically after component mounts
    require("slick-carousel/slick/slick.css");
    require("slick-carousel/slick/slick-theme.css");
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!mounted) {
    // Return a placeholder with the same structure to prevent layout shift
    return (
      <div className="w-full p-8 z-10 bg-[#f8f9fa]" id="skills">
        <div className="max-w-[77.5rem] mx-auto flex flex-col justify-center h-full">
          <div className="mb-12">
            <p className="text-xl tracking-widest uppercase font-bold text-[#3ddb80] mb-2">
              Minhas Habilidades
            </p>
            <h2 className="text-4xl font-bold text-gray-800">
              O que eu posso agregar no desenvolvimento
            </h2>
          </div>
          <div className="min-h-[300px] flex items-center justify-center">
            <div className="animate-pulse">Carregando...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-28 px-12 z-10 bg-[#f8f9fa]" id="skills">
      <div className="max-w-[77.5rem] mx-auto flex flex-col justify-center h-full">
        <div className="mb-12">
          <p className="text-xl tracking-widest uppercase font-bold text-[#3ddb80] mb-2">
            Minhas Habilidades
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            O que eu posso agregar no desenvolvimento
          </h2>
        </div>

        <Slider {...settings} className="skill-slider">
          {data.map(
            (tech: { name: string; logo: { url: string } }, index: number) => {
              const skillPercentage = Math.floor(
                Math.random() * (95 - 75 + 1) + 75
              );

              return (
                <div key={index} className="px-2">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group h-full">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 relative flex-shrink-0">
                        <Image
                          src={tech.logo.url}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "contain" }}
                          alt={tech.name}
                          title={tech.name}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {tech.name}
                        </h3>
                        <div className="relative pt-1">
                          <div className="flex mb-2 items-center justify-between">
                            <div className="text-right">
                              <span className="text-sm font-semibold inline-block text-[#3ddb80]">
                                {skillPercentage}%
                              </span>
                            </div>
                          </div>
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                            <div
                              style={{ width: `${skillPercentage}%` }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#3ddb80] transition-all duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[#3ddb80] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  </div>
                </div>
              );
            }
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
