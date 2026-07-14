import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import HeroOrbField from "../atoms/HeroOrbField";
import { usePreferences } from "@/contexts/PreferencesContext";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gabriel442021/", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/Gabriel4420", icon: FaGithub },
  { label: "E-mail", href: "mailto:gabriel_rodrigues_perez@hotmail.com", icon: AiOutlineMail },
];

const MainHero: React.FC = () => {
  const { t } = usePreferences();
  return (
    <main className="hero" id="home">
      <HeroOrbField />
      <div className="hero__wash" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__copy">
          <p className="hero__status"><span /> {t("hero.available")}</p>
          <h1>
            Gabriel <span>Rodrigues</span>
          </h1>
          <p className="hero__role">{t("hero.role")}</p>
          <p className="hero__intro">{t("hero.intro")}</p>
          <div className="hero__actions">
            <a className="hero__primary" href="#projects">{t("hero.projects")} <span aria-hidden="true">↗</span></a>
            <a className="hero__secondary" href="#contact">{t("hero.talk")}</a>
          </div>
        </div>

        <div className="hero__footer">
          <div className="hero__socials" aria-label={t("hero.social")}>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a href={href} key={label} aria-label={label} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} target={href.startsWith("http") ? "_blank" : undefined}>
                <Icon aria-hidden="true" /> <span>{label}</span>
              </a>
            ))}
          </div>
          <a className="hero__scroll" href="#skills">{t("hero.explore")} <HiArrowDown aria-hidden="true" /></a>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
