import PropertiesDataApi from "@/interfaces/PropertiesDataApi";
import { useCarousel } from "@/hooks/useCarousel";
import Image from "next/image";
import React from "react";
import { usePreferences } from "@/contexts/PreferencesContext";

type Technology = {
  id?: string;
  name: string;
  logo?: { url: string };
};

const Skills: React.FC<PropertiesDataApi> = ({ data }) => {
  const technologies: Technology[] = Array.isArray(data) ? data : [];
  const { t } = usePreferences();
  const { viewportRef, activeIndex, canGoBack, canGoForward, move, updatePosition } = useCarousel(technologies.length);

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="carousel-shell">
        <header className="carousel-header">
          <div>
            <p className="section-kicker">{t("skills.kicker")}</p>
            <h2 id="skills-title">{t("skills.title")}</h2>
          </div>
          {technologies.length > 1 && (
            <div className="carousel-controls" aria-label={t("skills.controls")}>
              <span className="carousel-count" aria-live="polite">
                {String(activeIndex + 1).padStart(2, "0")} / {String(technologies.length).padStart(2, "0")}
              </span>
              <button type="button" onClick={() => move(-1)} disabled={!canGoBack} aria-label={t("skills.previous")}>←</button>
              <button type="button" onClick={() => move(1)} disabled={!canGoForward} aria-label={t("skills.next")}>→</button>
            </div>
          )}
        </header>

        {technologies.length ? (
          <div ref={viewportRef} onScroll={updatePosition} className="skills-carousel" tabIndex={0} aria-label={t("skills.label")}>
            {technologies.map((tech, index) => (
              <article data-carousel-item className="skill-card" key={tech.id ?? `${tech.name}-${index}`}>
                <span className="skill-card__index">{String(index + 1).padStart(2, "0")}</span>
                <div className="skill-card__logo">
                  {tech.logo?.url ? (
                    <Image src={tech.logo.url} fill sizes="80px" className="object-contain" alt="" />
                  ) : (
                    <span aria-hidden="true">{tech.name.slice(0, 2).toUpperCase()}</span>
                  )}
                </div>
                <h3>{tech.name}</h3>
              </article>
            ))}
          </div>
        ) : (
          <p className="carousel-empty">{t("skills.empty")}</p>
        )}
      </div>
    </section>
  );
};

export default Skills;
