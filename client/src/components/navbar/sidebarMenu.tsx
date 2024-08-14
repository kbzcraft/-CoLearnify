import { navContext } from "@/contexts/navContextProvider";
import { IconMessageCircle, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useContext } from "react";
export const SidebarMenu = () => {
  const { menus, open } = useContext(navContext);
  return (
    <ul className={`flex flex-col h-full justify-between  grow`}>
      <ul className={`flex flex-col gap-2 `}>
        {menus.map((menu, id: number) => (
          <li key={menu.label + id}>
            <Link
              href={menu.href}
              className={`flex gap-2 min-w-14 ${open ? "justify-start" : "justify-center"} `}
            >
              <span>{menu.icon}</span>
              {open && <span>{menu.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
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
