import { IconPlus, IconX } from "@tabler/icons-react";
import React, { Dispatch, SetStateAction } from "react";
interface Itab {
  title: string;
  value: string;
  isActive: boolean;
  content?: string | React.ReactNode | any;
}
interface TabProps {
  setTabs: Dispatch<SetStateAction<Itab[]>>;
  tabs: Itab[];
}
const Tabs = ({ tabs, setTabs }: TabProps) => {
  const newTab: Itab[] = [
    { title: "new tab", value: "newTab" + tabs.length, isActive: true },
  ];
  const addTab = () => {
    console.log("add tab");
    const tempTabs = [...tabs];
    tempTabs.filter((tab) => tab.isActive)[0].isActive = false;
    tempTabs.push(...newTab);
    setTabs([...tempTabs]);
  };
  const handleTabSelect = (id: number) => {
    console.log("handleTabSelect");
    const tempTabs = [...tabs];
    tempTabs.filter((tab) => tab.isActive)[0].isActive = false;
    tempTabs[id].isActive = true;
    setTabs([...tempTabs]);
  };
  const closeTab = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    if (tabs.length === 1 && id == 0) {
      setTabs([...newTab]);
    } else if (tabs[id].isActive) {
      const tempTabs = [...tabs];
      if (id === 0) {
        tempTabs.shift();
        setTabs([...tempTabs]);
      } else {
        tempTabs[id - 1].isActive = true;
        const updatedTabs = tempTabs.filter((_, index) => id != index);
        setTabs([...updatedTabs]);
      }
    } else {
      const updatedTabs = tabs.filter((_, index) => index != id);
      setTabs([...updatedTabs]);
    }
  };

  return (
    <header className="hidden md:flex bg-crust w-full">
      <nav className="flex items-center">
        <ul className="flex gap-4 items-center cursor-pointer">
          {tabs.map((tab, id) => (
            <li
              className={
                tab?.isActive
                  ? "min-h-10 flex items-center justify-center relative  bg-base rounded-t-xl px-2"
                  : "min-h-10 flex items-center justify-center  relative"
              }
              key={tab.value}
              onClick={() => {
                handleTabSelect(id);
              }}
            >
              <span className="mr-2">{tab.title}</span>
              <button
                className="mx-2 cursor-default aspect-square h-5 w-5 flex justify-center items-center hover:rounded-md hover:bg-[#cdd6f430]"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  closeTab(e, id);
                }}
              >
                {!tab.isActive && <IconX size={14} opacity={0.2} />}
                {tab.isActive && <IconX size={14} opacity={0.7} />}
              </button>
              {!tab.isActive && (
                <div className="opacity-75 h-6 w-[2px] bg-[#cdd6f460] rounded-md block"></div>
              )}
            </li>
          ))}
        </ul>
        <button onClick={addTab} className="px-2">
          <IconPlus size={18} />
        </button>
      </nav>
    </header>
  );
};

export default Tabs;
