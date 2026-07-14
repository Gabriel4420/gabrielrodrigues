import { PropertiesProjectItem } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePreferences } from "@/contexts/PreferencesContext";

const ProjectItem = ({
  title,
  backgroundImg,
  projectUrl,
  priority = false,
}: PropertiesProjectItem) => {
  const imageUrl = backgroundImg.find(Boolean);
  const { t } = usePreferences();

  return (
    <Link
      href={projectUrl}
      className="project-card group"
      aria-label={t("card.open", { title })}
    >
      {imageUrl ? (
        <Image className="project-card__image" fill priority={priority} sizes="(max-width: 768px) 92vw, 1100px" src={imageUrl} alt={t("card.preview", { title })} />
      ) : (
        <div className="project-card__fallback" aria-hidden="true" />
      )}
      <div className="project-card__scrim" />
      <div className="project-card__content">
        <span className="project-card__eyebrow">{t("card.selected")}</span>
        <h3>{title}</h3>
        <span className="project-card__link">{t("card.explore")} <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
};

export default ProjectItem;
