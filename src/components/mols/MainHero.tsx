import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

// import { Container } from './styles';

const MainHero: React.FC = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-gray-600 text-xl 2xl:text-2xl">
            Vamos construir algo juntos !
          </p>
          <h1 className="py-4 text-gray-800 uppercase  text-2xl 2xl:text-4xl">
            Olá, sou <span className="text-[#3ddb80]">Gabriel</span> Rodrigues{" "}
          </h1>
          <h1 className="py-4 font-thin text-gray-800 uppercase text-lg 2xl:text-2xl ">
            {" "}
            Dev Fullstack
          </h1>
          <p className="py-4 text-md 2xl:text-xl text-gray-600 max-w-[70%] m-auto">
            Sou formado em analise e desenvolvimento de sistemas, tenho 3 anos
            de experiência com desenvolvimento de sites e sistemas web,e estou
            em busca de uma oportunidade na área de desenvolvimento como
            frontend.
            <br />
            <br />
            Acredito que sempre podemos ir além, basta ter 99% de transpiração e
            1% de inspiração, como já dizia Albert Einstein.
          </p>

          <div className="flex items-center justify-center pt-2">
            <div className="flex justify-center my-2 w-3 sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn
                  size={25}
                  href="https://www.linkedin.com/in/gabriel442021/"
                />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub size={25} />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail
                  size={25}
                  href="mailto:gabriel_rodrigues_perez@hotmail.com"
                />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill size={25} href="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
