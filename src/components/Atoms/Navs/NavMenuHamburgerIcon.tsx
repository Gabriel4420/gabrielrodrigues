import { PropertiesNavMenuIcon } from "@/interfaces";
import { FC } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const NavMenuHamburguerIcon: FC<PropertiesNavMenuIcon> = ({
  haveNav,
}: PropertiesNavMenuIcon) => {
  return (
    <div onClick={haveNav} className="md:hidden">
      <AiOutlineMenu className="cursor-pointer" size={25} />
    </div>
  );
};

export default NavMenuHamburguerIcon;
