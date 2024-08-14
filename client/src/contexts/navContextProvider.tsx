import { createContext, Dispatch, ReactNode, SetStateAction } from "react";
import {
  IconCalendarMonth,
  IconChecklist,
  IconNotes,
  IconPuzzle,
  IconSettings2,
  IconSmartHome,
  IconTableColumn,
} from "@tabler/icons-react";
import { useState } from "react";

type TypeMenu = {
  label: string;
  href: string;
  icon: ReactNode;
};

interface NavContextIface {
  menus: TypeMenu[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const defaultContextValue: NavContextIface = {
  menus: [], // Default empty array for menus
  open: false,
  setOpen: () => {}, // No-op function for setOpen
};
export const navContext = createContext<NavContextIface>(defaultContextValue);
const NavContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const menus = [
    {
      label: "home",
      href: "/",
      icon: (
        <IconSmartHome className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "classes",
      href: "/classes",
      icon: (
        <IconTableColumn className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "notes",
      href: "/notes",
      icon: (
        <IconNotes className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "assignments",
      href: "/assignments",
      icon: (
        <IconChecklist className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "calendar",
      href: "/calendar",
      icon: (
        <IconCalendarMonth className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "plugins",
      href: "/plugins",
      icon: (
        <IconPuzzle className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "settings",
      href: "/settings",
      icon: (
        <IconSettings2 className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
  ];

  return (
    <navContext.Provider value={{ menus, open, setOpen }}>
      {children}
    </navContext.Provider>
  );
};
export default NavContextProvider;
