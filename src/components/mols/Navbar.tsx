import { useEffect, useState, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavMenu, NavMenuHamburgerIcon, NavMenuMobile } from "../atoms";
import PreferenceControls from "../atoms/PreferenceControls";
import { usePreferences } from "@/contexts/PreferencesContext";

const Navbar: FC = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = usePreferences();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <div className="site-nav__inner">
        <Link href="/#home" className="site-nav__brand" aria-label={`Gabriel Rodrigues — ${t("nav.home")}`}>
          <Image src="/assets/logogabriel.png" width={54} height={54} alt="" priority />
          <span>Gabriel Rodrigues</span>
        </Link>
        <NavMenu />
        <PreferenceControls />
        <NavMenuHamburgerIcon haveNav={() => setNav(true)} />
      </div>
      {nav && <NavMenuMobile haveNav={() => setNav(false)} />}
    </header>
  );
};

export default Navbar;
