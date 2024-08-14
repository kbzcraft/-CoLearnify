import { navContext } from "@/contexts/navContextProvider";
import { IconMessageCircle, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import React, { useContext } from "react";

export const MobileMenu = () => {
  const { menus, open } = useContext(navContext);
  return (
    <ul className="z-[100] h-[calc(100dvh-40px)] w-1/2 min-w-80 max-w-[90vw] bg-crust p-4 flex flex-col justify-between">
      <ul className="flex flex-col gap-2">
        {menus.map((menu, id: number) => (
          <li key={menu.label + id}>
            <Link href={menu.href} className={`flex gap-2 min-w-14  `}>
              <span>{menu.icon}</span>
              <span>{menu.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="mb-4">
        <li>
          <Link
            href="#"
            className={`flex gap-2 min-w-14 ${open ? "justify-start" : "justify-center"} `}
          >
            <i>
              <IconMessageCircle />
            </i>
            {open && <span>Notification</span>}
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className={`flex gap-2 min-w-14 ${open ? "justify-start" : "justify-center"} `}
          >
            <i>
              <IconUser />
            </i>
            {open && <span>@username</span>}
          </Link>
        </li>
      </ul>
    </ul>
  );
};
