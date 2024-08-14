import { IconMenu2 } from "@tabler/icons-react";
import { MobileMenu } from "./mobileMenu";
import { useContext } from "react";
import { navContext } from "@/contexts/navContextProvider";

export const MobileNavbar = () => {
  const { open, setOpen } = useContext(navContext);
  return (
    <nav className="md:hidden bg-t">
      <section className=" flex items-center gap-2 h-10 w-screen bg-crust px-4 ">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="flex h-full items-center"
        >
          <IconMenu2 />
        </button>
        <h1>colearnify</h1>
      </section>
      <section
        className={
          open
            ? "transition-transform duration-300  ease-in-out translate-x-0"
            : "-translate-x-14 ease-in-out transition-transform duration-300"
        }
      >
        {open && <MobileMenu />}
      </section>
    </nav>
  );
};
