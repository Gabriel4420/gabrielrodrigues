import { MenuRendering } from "@/helpers";
import Link from "next/link";
import React from "react";

const NavMenu: React.FC = () => {
  return (
    <div>
      <ul className="hidden md:flex">
        {MenuRendering.map((item, index) => (
          <Link key={index} href={item.url}>
            <li className="ml-10 text-sm uppercase font-medium hover:font-bold hover:border-b-2 hover:border-[#3ddb80] ">
              {item.menuItemName}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
