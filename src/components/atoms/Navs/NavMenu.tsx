import Link from "next/link";
import { usePreferences } from "@/contexts/PreferencesContext";

export default function NavMenu() {
  const { t } = usePreferences();
  const items = [
    { label: t("nav.home"), url: "/#home" },
    { label: t("nav.skills"), url: "/#skills" },
    { label: t("nav.projects"), url: "/#projects" },
    { label: t("nav.contact"), url: "/#contact" },
  ];

  return (
    <nav aria-label={t("nav.primary")}>
      <ul className="site-nav__links">
        {items.map((item) => <li key={item.url}><Link href={item.url}>{item.label}</Link></li>)}
      </ul>
    </nav>
  );
}
