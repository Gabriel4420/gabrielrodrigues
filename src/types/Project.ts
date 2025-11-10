export interface Project {
  id: string;

  titulo: string;
}

export interface ProjectsData {
  data: {
    allProjetos: Project[];
  };
}