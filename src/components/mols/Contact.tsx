"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact: React.FC = () => {
  return (
    <div className="w-full lg:h-screen" id="contact">
      <div className="max-w-310 m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#3ddb80]">
          Contato
        </p>
        <h2 className="py-4">Vamos tomar um café ?</h2>
        <div className="grid lg:grid-cols-1">
          <div className="col-span-1 lg:col-span-1 lg:w-1/2 h-full shadow-xl shadow-gray-400 rounded-xl p-2">
            <div className="lg:p-2 h-full">
              <div className="flex justify-center gap-10 ">
                {/* <img
                  src="/../assets/background.jpg"
                  alt="computador em uma mesa"
                  className="rounded-xl w-full h-100 "
                /> */}
                <img
                  src="/../assets/perfil.jpg"
                  alt="Gabriel Rodrigues Perez"
                  className="rounded-full hover:scale-105 ease-in duration-300 h-52 w-52"
                />
              </div>
              <div className="flex flex-col w-full">
                <h2 className="py-2 text-gray-700 text-center">
                  Gabriel Rodrigues
                </h2>
                <p className="py-2 text-gray-700 text-center">
                  Desenvolvedor Fullstack
                </p>
                <p className="py-4 text-center">
                  Estou disponivel para freelances ou CLT. <br />
                  Entre em contato comigo e vamos conversar !
                </p>
              </div>
              <div>
                <div className="flex justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a
                      title="linkedin"
                      rel="no-referrer noopener no-follow"
                      target="_blank"
                      href="https://www.linkedin.com/in/gabriel442021/"
                    >
                      <FaLinkedinIn
                        size={25}
                        href="https://www.linkedin.com/in/gabriel442021/"
                      />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a
                      title="github"
                      rel="no-referrer noopener no-follow"
                      target="_blank"
                      href="https://www.github.com/Gabriel4420"
                    >
                      <FaGithub size={25} />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a
                      title="email"
                      rel="no-referrer noopener no-follow"
                      target="_blank"
                      href="mailto:gabriel_rodrigues_perez@hotmail.com"
                    >
                      <AiOutlineMail
                        size={25}
                        href="mailto:gabriel_rodrigues_perez@hotmail.com"
                      />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a
                      title="linktree"
                      rel="no-referrer noopener no-follow"
                      target="_blank"
                      href="https://linktr.ee/gabriel4420"
                    >
                      <BsFillPersonLinesFill
                        size={25}
                        href="https://linktr.ee/gabriel4420"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="">
            <div className="rounded-full shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#3ddb80]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
