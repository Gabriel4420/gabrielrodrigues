import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties, PointerEvent, useEffect, useRef, useState } from "react";
import { HiArrowLeft, HiArrowUpRight } from "react-icons/hi2";
import { api } from "@/services";
import { usePreferences } from "@/contexts/PreferencesContext";

type ProjectImage = { url: string; alt?: string | null };

type Project = {
  id: string;
  titulo?: string;
  descricao?: string;
  tecnologias?: string;
  tecnologiaAside?: string[];
  linkDoProjeto?: string;
  linkDoCodigoDoProjeto?: string;
  imagemDoProjeto?: ProjectImage[];
};

const ProjectPage = ({ project }: { project: Project }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const mediaRef = useRef<HTMLDivElement>(null);
  const images = Array.isArray(project.imagemDoProjeto) ? project.imagemDoProjeto : [];
  const technologies = Array.isArray(project.tecnologiaAside) ? project.tecnologiaAside : [];
  const title = project.titulo || "Projeto digital";
  const { t } = usePreferences();

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setReadingProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const media = mediaRef.current;
    if (!media || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = media.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    media.style.setProperty("--tilt-x", `${y * -3.5}deg`);
    media.style.setProperty("--tilt-y", `${x * 4.5}deg`);
    media.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
    media.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
  };

  const resetPointer = () => {
    mediaRef.current?.style.setProperty("--tilt-x", "0deg");
    mediaRef.current?.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <>
      <Head>
        <title>{title} | Gabriel Rodrigues</title>
        <meta name="description" content={`Detalhes, tecnologias e resultado do projeto ${title}.`} />
        {images[0]?.url && <meta property="og:image" content={images[0].url} />}
      </Head>

      <div className="project-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${readingProgress})` }} />
      </div>

      <main className="project-detail">
        <section className="project-detail__hero" aria-labelledby="project-title">
          <div className="project-detail__hero-copy">
            <Link className="project-detail__back" href="/#projects">
              <HiArrowLeft aria-hidden="true" /> {t("detail.all")}
            </Link>
            <p className="project-detail__kicker">{t("detail.case")} · {project.id.slice(0, 8)}</p>
            <h1 id="project-title">{title}</h1>
            <div className="project-detail__hero-meta">
              <p>{project.tecnologias || t("detail.fallback")}</p>
              <div className="project-detail__actions">
                {project.linkDoProjeto && (
                  <a href={project.linkDoProjeto} target="_blank" rel="noopener noreferrer">
                    {t("detail.live")} <HiArrowUpRight aria-hidden="true" />
                  </a>
                )}
                {project.linkDoCodigoDoProjeto && (
                  <a className="project-detail__action--ghost" href={project.linkDoCodigoDoProjeto} target="_blank" rel="noopener noreferrer">
                    {t("detail.code")} <HiArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div
            className="project-detail__media-wrap"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
          >
            <div ref={mediaRef} className="project-detail__media">
              <div className="project-detail__browser-bar" aria-hidden="true">
                <span /><span /><span />
                <div>{project.linkDoProjeto?.replace(/^https?:\/\//, "").replace(/\/$/, "") || title}</div>
              </div>
              <div className="project-detail__media-image">
                {images[0]?.url ? (
                  <Image
                    src={images[0].url}
                    alt={images[0].alt || `Tela principal do projeto ${title}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 94vw, 1200px"
                  />
                ) : (
                  <div className="project-detail__image-fallback">{title}</div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail__body" aria-labelledby="project-overview">
          <article className="project-detail__story project-reveal">
            <p className="project-detail__kicker">{t("detail.overview")}</p>
            <h2 id="project-overview">{t("detail.idea")}</h2>
            {project.descricao ? (
              <div className="project-detail__rich-text" dangerouslySetInnerHTML={{ __html: project.descricao }} />
            ) : (
              <p className="project-detail__empty">{t("detail.descriptionEmpty")}</p>
            )}
          </article>

          <aside className="project-detail__stack project-reveal" aria-label="Tecnologias do projeto">
            <p className="project-detail__kicker">{t("detail.stackApplied")}</p>
            <h2>{t("detail.technologies")}</h2>
            {technologies.length ? (
              <ul>
                {technologies.map((technology, index) => (
                  <li key={technology} style={{ "--item-index": index } as CSSProperties}>
                    <span>{String(index + 1).padStart(2, "0")}</span>{technology}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="project-detail__empty">{t("detail.stackEmpty")}</p>
            )}
          </aside>
        </section>

        {images.length > 1 && (
          <section className="project-detail__gallery" aria-labelledby="gallery-title">
            <div className="project-detail__gallery-heading project-reveal">
              <p className="project-detail__kicker">{t("detail.inside")}</p>
              <h2 id="gallery-title">{t("detail.perspectives")}</h2>
            </div>
            <div className="project-detail__gallery-grid">
              {images.slice(1).map((image, index) => (
                <figure className="project-detail__gallery-item project-reveal" key={`${image.url}-${index}`}>
                  <Image src={image.url} alt={image.alt || `${title}, tela ${index + 2}`} fill sizes="(max-width: 768px) 94vw, 60vw" />
                </figure>
              ))}
            </div>
          </section>
        )}

        <footer className="project-detail__footer project-reveal">
          <p>{t("detail.similar")}</p>
          <h2>{t("detail.next")}</h2>
          <div>
            <a href="mailto:gabriel_rodrigues_perez@hotmail.com">{t("detail.start")} <HiArrowUpRight aria-hidden="true" /></a>
            <Link href="/#projects">{t("detail.back")}</Link>
          </div>
        </footer>
      </main>
    </>
  );
};

export async function getStaticProps({ params }) {
  const id = params?.id as string;
  try {
    const response = await api.Project(id);
    const project = response?.data?.projeto ?? null;
    if (!project) return { notFound: true };

    return {
      props: {
        project: {
          ...project,
          imagemDoProjeto: Array.isArray(project.imagemDoProjeto) ? project.imagemDoProjeto : [],
          tecnologiaAside: Array.isArray(project.tecnologiaAside) ? project.tecnologiaAside : [],
        },
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("[getStaticProps] Error fetching project:", error);
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  try {
    const projects = await api.AllProjects();
    return {
      paths: projects.data.allProjetos.map((project) => ({ params: { id: String(project.id) } })),
      fallback: "blocking",
    };
  } catch (error) {
    console.error("[getStaticPaths] Error generating paths:", error);
    return { paths: [], fallback: "blocking" };
  }
}

export default ProjectPage;
