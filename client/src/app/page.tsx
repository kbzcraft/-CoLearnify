"use client";
import { useState } from "react";
import Tabs from "@/components/tabs";
import Navbar from "@/components/navbar/navbar";
import HomeContent from "@/components/contentBox/home";

const Home = () => {
  interface Itab {
    title: string;
    value: string;
    isActive: boolean;
    content?: string | React.ReactNode | any;
  }
  const [tabs, setTabs] = useState<Itab[]>([
    {
      title: "Home",
      value: "Hometab",
      content: <HomeContent />,
      isActive: true,
    },
  ]);
  return (
    <main className="md:flex w-full h-full">
      <Navbar />
      <section className="grow">
        <Tabs tabs={tabs} setTabs={setTabs} />
        <div className="p-2">
          {tabs
            .filter((tab) => tab.isActive)
            .map((tab) => (
              <section key="activeTab">{tab.content}</section>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
