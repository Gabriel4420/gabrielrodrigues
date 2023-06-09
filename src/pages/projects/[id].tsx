import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { api } from "@/services";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Head from "next/head";

const Property = ({ project }) => {
  return (
    <>
      <Head>
        <title>Gabriel Rodrigues: Fullstack Developer </title>
        <meta name="title" content="Gabriel Rodrigues: Fullstack Developer" />
        <meta
          name="description"
          content="Gabriel Rodrigues Perez: Desenvolvedor Fullstack"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Facebook */}

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://gabrielrodrigues.vercel.app/"
        />
        <meta
          property="og:title"
          content="Gabriel Rodrigues: Fullstack Developer"
        />
        <meta
          property="og:description"
          content="Gabriel Rodrigues Perez: Desenvolvedor Fullstack"
        />
        <meta property="og:image" content="/assets/logogabriel.png" />

        {/* Twitter */}

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://gabrielrodrigues.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Gabriel Rodrigues: Fullstack Developer"
        />
        <meta
          property="twitter:description"
          content="Gabriel Rodrigues Perez: Desenvolvedor Fullstack"
        />
        <meta property="twitter:image" content="/assets/logogabriel.png" />

        <link rel="icon" type="image/png" href="/assets/logogabriel.png" />
      </Head>
      <div className="w-full overflow-x-hidden ">
        <div className="w-screen h-[60vh] relative">
          <div className="absolute top-0 left-0 w-full h-[60vh] bg-black/50 z-10" />
          {project.imagemDoProjeto[0] && (
            <Image
              className="absolute z-1"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 0"
              src={project.imagemDoProjeto[0].url}
              alt="/"
            />
          )}

          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">{project.titulo}</h2>
            <h3>{project.tecnologias}</h3>
            <div className="flex justify-start gap-3 py-6">
              <div className="rounded-full bg-sky-700 shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
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
              <div className="rounded-full bg-black shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <a
                  title="github"
                  rel="no-referrer noopener no-follow"
                  target="_blank"
                  href="https://www.github.com/Gabriel4420"
                >
                  <FaGithub size={25} />
                </a>
              </div>
              <div className="rounded-full bg-orange-600 shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
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
              <div className="rounded-full bg-lime-600 shadow-lg shadow-gray-400 mr-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
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

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p className="text-[#19ba5f] font-bold">Projeto</p>
            <h2>Overview</h2>
            <br />
            <div
              dangerouslySetInnerHTML={{
                __html: project.descricao,
              }}
            />
            {project.linkDoCodigoDoProjeto && (
              <a
                href={project.linkDoCodigoDoProjeto}
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-[#98e49e] to-[#19ba5f]">
                  Código
                </button>
              </a>
            )}
            <a
              href={project.linkDoProjeto}
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="px-8 py-2 mt-4 bg-gradient-to-r from-[#98e49e] to-[#19ba5f]">
                Site Ao vivo
              </button>
            </a>
          </div>
          {project.tecnologiaAside && (
            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
              <div className="p-2">
                <p className="text-start px-2 font-bold pb-2 ">Tecnologias</p>
                <div className="grid grid-cols-3 md:grid-cols-1">
                  {project.tecnologiaAside.map(
                    (item: string, index: number) => {
                      return (
                        <p
                          key={index}
                          className="text-gray-600 py-2 flex items-center"
                        >
                          <RiRadioButtonFill className="pr-1 text-[#3ddb80]" />{" "}
                          {item}
                        </p>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          )}
          <Link href="/#projects">
            <button className="hover:underline bg-slate-600  px-8 py-2 cursor-pointer">
              Voltar ao inicio
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ params }) {
  const id = params?.id;
  const projects = await api.AllProjects();
  const project = projects.data.allProjetos.find((s) => s.id === id) || null;

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
      allProjects: projects,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const projects = await api.AllProjects();
  const ids = projects.data.allProjetos.map((s) => ({ params: { id: s.id } }));
  return { paths: ids, fallback: false };
}

export default Property;
