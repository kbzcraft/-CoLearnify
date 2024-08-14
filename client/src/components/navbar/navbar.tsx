import { DesktopSidebar } from "./desktopSidebar";
import NavContextProvider from "@/contexts/navContextProvider";
import { MobileNavbar } from "./mobileNavbar";

/* interface SidebarProps {
  menus: TypeMenu[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
} */
const Navbar = () => {
  return (
    <NavContextProvider>
      <DesktopSidebar />
      <MobileNavbar />
    </NavContextProvider>
  );
};

export default Navbar;
