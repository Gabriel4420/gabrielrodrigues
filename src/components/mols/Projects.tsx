import React from "react";
import { ProjectItem } from "../atoms";
import PropertiesDataApi from "@/interfaces/PropertiesDataApi";
import { useCarousel } from "@/hooks/useCarousel";
import { usePreferences } from "@/contexts/PreferencesContext";

type ProjectSummary = {
  id: string;
  titulo: string;
  imagemDoProjeto?: Array<{ url: string }>;
};

const Projects: React.FC<PropertiesDataApi> = ({ data }) => {
  const projects: ProjectSummary[] = Array.isArray(data) ? data : [];
  const { t } = usePreferences();
  const { viewportRef, activeIndex, canGoBack, canGoForward, move, updatePosition } = useCarousel(projects.length);

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="carousel-shell">
        <header className="carousel-header">
          <div>
            <p className="section-kicker">{t("projects.kicker")}</p>
            <h2 id="projects-title">{t("projects.title")}</h2>
          </div>
          {projects.length > 1 && (
            <div className="carousel-controls" aria-label={t("projects.controls")}>
              <span className="carousel-count" aria-live="polite">
                {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <button type="button" onClick={() => move(-1)} disabled={!canGoBack} aria-label={t("projects.previous")}>←</button>
              <button type="button" onClick={() => move(1)} disabled={!canGoForward} aria-label={t("projects.next")}>→</button>
            </div>
          )}
        </header>

        {projects.length ? (
          <div ref={viewportRef} onScroll={updatePosition} className="project-carousel" tabIndex={0} aria-label={t("projects.label")}>
            {projects.map((item, index) => (
              <article data-carousel-item className="project-slide" key={item.id}>
                <ProjectItem
                  title={item.titulo}
                  backgroundImg={(item.imagemDoProjeto ?? []).map((image) => image.url)}
                  projectUrl={`/projects/${item.id}`}
                  priority={index === 0}
                />
              </article>
            ))}
          </div>
        ) : (
          <p className="carousel-empty">{t("projects.empty")}</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
