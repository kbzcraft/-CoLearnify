"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconBell,
  IconCalendarMonth,
  IconChecklist,
  IconMenu2,
  IconNotes,
  IconPuzzle,
  IconSettings2,
  IconSmartHome,
  IconTableColumn,
  IconUserCircle,
} from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const links = [
    {
      label: "home",
      href: "#",
      icon: (
        <IconSmartHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "classes",
      href: "#",
      icon: (
        <IconTableColumn className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "notes",
      href: "#",
      icon: (
        <IconNotes className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "assignments",
      href: "#",
      icon: (
        <IconChecklist className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "calendar",
      href: "#",
      icon: (
        <IconCalendarMonth className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "plugins",
      href: "#",
      icon: (
        <IconPuzzle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "settings",
      href: "#",
      icon: (
        <IconSettings2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={cn("w-screen md:w-fit  md:h-screen fixed top-0 left-0")}>
        <Sidebar open={open} setOpen={setOpen} animate={true}>
          <SidebarBody className="bg-crust md:flex flex-col justify-between">
            <ul>
              {links.map((link, idx) => (
                <li key={idx + link.label}>
                  <SidebarLink link={link} />
                </li>
              ))}
            </ul>
            <div>
              <SidebarLink
                link={{
                  label: "notification",
                  href: "#",
                  icon: (
                    <IconBell className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                  ),
                }}
              />
              <SidebarLink
                link={{
                  label: "@username",
                  href: "auth",
                  icon: (
                    <IconUserCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
      </nav>
    </>
  );
};
