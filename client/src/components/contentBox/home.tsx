import React from "react";

import ClassCard from "../cards/classCard";
import NotesCard from "../cards/notesCard";
import { recentClasss } from "@/contexts/tempDB";
import AddNotesBtn from "../addNotesBtn";
import AssignmentCard from "../cards/assignmentCard";

const HomeContent = () => {
  return (
    <section className="overflow-y-scroll max-h-[calc(100vh-55px)] flex flex-col gap-4">
      <section className="recent_classes">
        <h1>Recent Classes</h1>
        <ul className="flex flex-wrap justify-center  gap-4 ">
          {recentClasss.map((recentClass, i) => (
            <li key={i} className="grow">
              <ClassCard
                thumbnail={recentClass.thumbnail}
                logo={recentClass.logo}
                title={recentClass.title}
                creator={recentClass.creator}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="recent_notes">
        <h1>Recent Notes</h1>
        <ul className="flex gap-2 flex-wrap">
          <li>
            <NotesCard title="untitled.." />
          </li>
          <li>
            <NotesCard title="untitled.." />
          </li>
          <li>
            <NotesCard title="untitled.." />
          </li>
          <li>
            <NotesCard title="untitled.." />
          </li>
          <li>
            <NotesCard title="untitled.." />
          </li>
          <li>
            <AddNotesBtn />
          </li>
        </ul>
      </section>
      <section className="recent_assignment">
        <h1>Recect Assignments</h1>
        <ul>
          <li>
            <AssignmentCard />
          </li>
        </ul>
      </section>
    </section>
  );
};

export default HomeContent;
