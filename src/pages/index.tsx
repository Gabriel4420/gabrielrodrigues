import Head from "next/head";
import { MainHero, Skills, Projects, Contact } from "@/components";

import { api } from "@/services";

export async function getStaticProps() {
  const projects = await api.AllProjects();

  const dataSummaryProjects = projects.data.allProjetos;

  const skills = await api.AllSkills();

  const { data } = skills;

  const { allTechnologies } = data;

  return {
    props: { dataSummaryProjects, allTechnologies },
    revalidate: 10,
  };
}

export default function Home({ dataSummaryProjects, allTechnologies }: any) {
  return (
    <>
      <Head>
        <title>Gabriel Rodrigues: Fullstack Developer </title>
        <meta
          name="description"
          content="Gabriel Rodrigues Perez: Desenvolvedor Fullstack"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHero />
      <Skills data={allTechnologies} />
      <Projects data={dataSummaryProjects} />
      <Contact />
    </>
  );
}
