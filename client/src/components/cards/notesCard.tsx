import React from "react";

const NotesCard = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center w-64 h-10 bg-text text-base px-2 rounded-md">
      {title}
    </div>
  );
};

export default NotesCard;
