import { MenuRendering } from "@/helpers";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ProjectsData } from "@/types/Project";
import DropdownMenu from "../DropdownMenu";

export default function NavMenu() {
  const [data, setData] = useState<ProjectsData | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://graphql.datocms.com/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
          body: JSON.stringify({
            query: `
              query ProjectsQuery {
                allProjetos {
                  id
                  titulo
                }
              }
            `,
          }),
        });

        const responseData: ProjectsData = await res.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const menuItems = MenuRendering();

  return (
    <div>
      <ul className="hidden md:flex">
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.hasDropdown ? (
              <ul className="group hidden md:flex">
                <li className="relative">
                  <div className="ml-10 text-sm uppercase text-black font-medium hover:font-bold hover:border-b-2 hover:border-[#3ddb80] cursor-pointer">
                    {item.menuItemName}
                  </div>
                  <ul className="bg-white absolute left-0 top-full group-hover:flex group-hover:flex-col hidden border border-gray-300 py-1 shadow-md rounded min-w-[200px]">
                    {data?.data.allProjetos.map(
                      (dropdownItem, dropdownIndex) => (
                        <li key={dropdownIndex}>
                          <Link
                            href={`/projects/${dropdownItem.id}`}
                            className="block p-2 text-sm uppercase font-medium hover:font-bold hover:border-b-2 hover:border-[#3ddb80]"
                          >
                            {dropdownItem.titulo}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              </ul>
            ) : (
              <Link href={item.url}>
                <li className="group ml-10 text-sm uppercase font-medium hover:font-bold hover:border-b-2 hover:border-[#3ddb80]">
                  {item.menuItemName}
                </li>
              </Link>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
