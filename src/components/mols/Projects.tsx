import React from "react";
import { ProjectItem } from "../atoms";
import PropertiesDataApi from "@/interfaces/PropertiesDataApi";
import { Carousel } from "flowbite-react";

// import { Container } from './styles';

const Projects: React.FC<PropertiesDataApi> = ({ data }: PropertiesDataApi) => {
  console.log(data);
  return (
    <div className="w-full h-full" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#3ddb80]">
          Meus Projetos
        </p>
        <h2>O que eu construi </h2>
        <div className="mt-10">
          <Carousel indicators={false}>
            {data.map(
              (
                item: {
                  id: string;

                  titulo: string;
                  linkDoProjeto: string;
                  imagemDoProjeto: [{ url: string }];
                },
                index: number
              ) => {
                const projectPath = item.id;
                const bg = Array.isArray(item.imagemDoProjeto)
                  ? item.imagemDoProjeto.map((x) => x.url)
                  : [];
                return (
                  <ProjectItem
                    title={item.titulo}
                    backgroundImg={bg}
                    projectUrl={`/projects/${projectPath}`}
                    key={index}
                  />
                );
              }
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;
