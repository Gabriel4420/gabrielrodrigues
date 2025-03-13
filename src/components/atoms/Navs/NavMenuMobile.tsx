import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { PropertiesNavMenuIcon } from "@/interfaces";
import { MenuRendering } from "@/helpers";

const NavMenuMobile: FC<PropertiesNavMenuIcon> = ({
  haveNav,
}: PropertiesNavMenuIcon) => {
  return (
    <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
      <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
        <div>
          <div className="flex w-full items-center justify-between ">
            <Image
              src="/assets/logogabriel.png"
              alt="logo"
              width="87"
              height="25"
            />

            <div
              onClick={haveNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4 text-center font-bold">
              Vamos construir algo incrivel juntos ?
            </p>
          </div>
        </div>
        <div className="py-4 flex flex-col ">
          <ul className="uppercase">
            {MenuRendering().map((item, index) => (
              <Link key={index} href={item.url}>
                <li onClick={haveNav} className="py-4 text-sm hover:font-bold">
                  {item.menuItemName}
                </li>
              </Link>
            ))}
          </ul>

          <div className="pt-10  ">
            <p className="uppercase tracking-widest text-[#5651e5] font-bold py-2">
              Vamos nos conectar !
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <a
                  title="linkedin"
                  rel="no-referrer noopener no-follow"
                  target="_blank"
                  href="https://www.linkedin.com/in/gabriel442021/"
                >
                  <FaLinkedinIn size={25} />
                </a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <a
                  title="github"
                  rel="no-referrer noopener no-follow"
                  target="_blank"
                  href="https://github.com/Gabriel4420"
                >
                  <FaGithub size={25} />
                </a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <a
                  title="email"
                  rel="no-referrer noopener no-follow"
                  target="_blank"
                  href="mailto:gabriel_rodrigues_perez@hotmail.com"
                >
                  <AiOutlineMail size={25} />
                </a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
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
  );
};

export default NavMenuMobile;
