import { AiOutlineClose } from "react-icons/ai";
import { FC } from "react";
import Link from "next/link";
import { PropertiesNavMenuIcon } from "@/interfaces";
import { usePreferences } from "@/contexts/PreferencesContext";
import PreferenceControls from "../PreferenceControls";

const NavMenuMobile: FC<PropertiesNavMenuIcon> = ({ haveNav }) => {
  const { t } = usePreferences();
  const items = [
    { label: t("nav.home"), url: "/#home" }, { label: t("nav.skills"), url: "/#skills" },
    { label: t("nav.projects"), url: "/#projects" }, { label: t("nav.contact"), url: "/#contact" },
  ];

  return (
    <div className="mobile-nav" role="dialog" aria-modal="true" aria-label={t("nav.primary")}>
      <button type="button" className="mobile-nav__backdrop" onClick={haveNav} aria-label={t("nav.close")} />
      <div className="mobile-nav__panel">
        <div className="mobile-nav__header">
          <span>Menu</span><PreferenceControls />
          <button type="button" onClick={haveNav} aria-label={t("nav.close")}><AiOutlineClose aria-hidden="true" /></button>
        </div>
        <nav aria-label={t("nav.mobile")}>
          <ul>{items.map((item) => <li key={item.url}><Link onClick={haveNav} href={item.url}>{item.label}<span aria-hidden="true">↗</span></Link></li>)}</ul>
        </nav>
        <a className="mobile-nav__contact" href="mailto:gabriel_rodrigues_perez@hotmail.com">{t("nav.conversation")}</a>
      </div>
    </div>
  );
};

export default NavMenuMobile;
