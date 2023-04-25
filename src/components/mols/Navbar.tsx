import { useState, FC, useEffect } from "react";
import Image from "next/image";

import { NavMenu, NavMenuHamburgerIcon, NavMenuMobile } from "../Atoms";

const Navbar: FC = () => {
  //

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleShow = () =>
      window.scrollY >= 90 ? setShadow(true) : setShadow(false);

    window.addEventListener("scroll", handleShow);
  }, []);

  return (
    <header
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[999] bg-[#ececf3] "
          : "fixed w-full h-20  z-[999] bg-[#ececf3] "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/logo gabriel.png"
          width="100"
          height="100"
          alt="logo"
        />
        <NavMenu />
        <NavMenuHamburgerIcon haveNav={handleNav} />
      </div>
      {nav && <NavMenuMobile haveNav={handleNav} />}
    </header>
  );
};

export default Navbar;
