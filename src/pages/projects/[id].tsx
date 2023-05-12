import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { api } from "@/services";

const Property = ({ project }) => {
  return (
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
                Code
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
                {project.tecnologiaAside.map((item: string, index: number) => {
                  return (
                    <p
                      key={index}
                      className="text-gray-600 py-2 flex items-center"
                    >
                      <RiRadioButtonFill className="pr-1 text-[#3ddb80]" />{" "}
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <Link href="/#projects">
          <button className="hover:underline bg-slate-600  px-8 py-2 cursor-pointer">
            Back
          </button>
        </Link>
      </div>
    </div>
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
