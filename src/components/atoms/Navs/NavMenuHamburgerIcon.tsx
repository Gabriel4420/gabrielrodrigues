import { PropertiesNavMenuIcon } from "@/interfaces";
import { FC } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { usePreferences } from "@/contexts/PreferencesContext";

const NavMenuHamburguerIcon: FC<PropertiesNavMenuIcon> = ({ haveNav }) => {
  const { t } = usePreferences();
  return (
    <button type="button" onClick={haveNav} className="site-nav__menu-button" aria-label={t("nav.open")}>
      <AiOutlineMenu aria-hidden="true" size={24} />
    </button>
  );
};

export default NavMenuHamburguerIcon;
