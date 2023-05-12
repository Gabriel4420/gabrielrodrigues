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
