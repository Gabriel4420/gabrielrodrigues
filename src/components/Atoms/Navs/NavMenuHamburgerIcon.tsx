import PropertiesNavMenuIcon from "@/interfaces/PropertiesNavMenuIcon";
import {FC} from "react";
import { AiOutlineMenu } from "react-icons/ai";

// import { Container } from './styles';

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
