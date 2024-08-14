"use client";
import { useState } from "react";
import Tabs from "@/components/tabs";
import Navbar from "@/components/navbar/navbar";

const Home = () => {
  interface Itab {
    title: string;
    value: string;
    isActive: boolean;
    content?: string | React.ReactNode | any;
  }
  const [tabs, setTabs] = useState<Itab[]>([
    { title: "Home", value: "Hometab", content: "content", isActive: true },
  ]);
  return (
    <main className="md:flex w-full h-full">
      <Navbar />
      <section className="grow">
        <Tabs tabs={tabs} setTabs={setTabs} />
        <div className="">
          {" "}
          content|kljadksjf asdkfj;k ak
          <br />
          content|kljadksjf asdkfj;k ak
          <br />
          content|kljadksjf asdkfj;k ak
          <br />
          ccccontent|kljadksjf asdkfj;k ak
          <br />
          ontent|kljadksjf asdkfj;k ak
          <br />
          ontent|kljadksjf asdkfj;k ak
          <br />
          ontent|kljadksjf asdkfj;k ak
          <br />
        </div>
      </section>
    </main>
  );
};

export default Home;
