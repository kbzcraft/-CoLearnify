import { IconCaretRightFilled } from "@tabler/icons-react";
import Image from "next/image";
import { SidebarMenu } from "./sidebarMenu";
import { useContext } from "react";
import { navContext } from "@/contexts/navContextProvider";
export const DesktopSidebar = () => {
  const { open, setOpen } = useContext(navContext);
  return (
    <section
      className={`py-4 ${open ? "px-6" : "px-4 items-center"} min-h-screen max-h-screen hidden md:flex flex-col relative bg-crust `}
    >
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className={`absolute top-6 -right-3 z-[100] rounded-full bg-text border border-blue transition-transform duration-300 ease-in-out transform ${open ? "rotate-180 scale-100" : "rotate-0 scale-90"}`}
      >
        <IconCaretRightFilled color="#1e1e2e" />
      </button>
      <div className="flex items-center mb-4 gap-2">
        <Image src="/learnify.png" width={40} height={40} alt="Co-Learnify" />
        {open && (
          <strong className="text-[16px] font-semibold">Colearnify</strong>
        )}
      </div>
      <SidebarMenu />
    </section>
  );
};
