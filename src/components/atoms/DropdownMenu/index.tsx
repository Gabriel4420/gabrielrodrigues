import React, { useEffect, useState } from "react";

interface Project {
  id: string;
  slug?: string;
  titulo: string;
}

interface ProjectsData {
  data?: {
    allProjetos?: Project[];
  };
}

const DropdownMenu: React.FC = () => {
  const [data, setData] = useState<ProjectsData | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const fetchProjects = async () => {
    try {
      const res = await fetch("https://graphql.datocms.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        body: JSON.stringify({
          query: `
            query ProjectsQuery {
              allProjetos {
                id
                titulo
              }
            }
          `,
        }),
      });

      const responseData: ProjectsData = await res.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Projetos
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {data?.data?.allProjetos?.map((project) => {
              return (
                <a
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {project.titulo}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
