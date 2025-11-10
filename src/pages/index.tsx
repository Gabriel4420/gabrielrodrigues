import Head from "next/head";
import { MainHero, Skills, Projects, Contact } from "@/components";

import { api } from "@/services";

export async function getStaticProps() {
  try {
    const projects = await api.AllProjects();
    const skills = await api.AllSkills();

    const dataSummaryProjects = Array.isArray(projects?.data?.allProjetos)
      ? projects.data.allProjetos
      : [];

    console.log(dataSummaryProjects);

    const allTechnologies = Array.isArray(skills?.data?.allTechnologies)
      ? skills.data.allTechnologies
      : [];

    return {
      props: { dataSummaryProjects, allTechnologies },
      revalidate: 10,
    };
  } catch (error) {
    console.error("[Home:getStaticProps] Falha ao obter dados:", error);
    return {
      props: { dataSummaryProjects: [], allTechnologies: [] },
      revalidate: 10,
    };
  }
}

export default function Home({ dataSummaryProjects, allTechnologies }: any) {
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

      <MainHero />
      <Skills data={allTechnologies} />
      <Projects data={dataSummaryProjects} />
      <Contact />
    </>
  );
}
