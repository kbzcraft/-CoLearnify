"use client";
import { IconX } from "@tabler/icons-react";
import React, { Dispatch, SetStateAction, useEffect } from "react";

interface AlertProps {
  alertMsg?: string;
  status?: "error" | "success" | "warning";
  setShowAlert: Dispatch<SetStateAction<boolean>>;
  showAlert: boolean;
}
const Alert: React.FC<AlertProps> = ({
  alertMsg = "Something went wrong",
  status = "error",
  setShowAlert,
  showAlert,
}) => {
  useEffect(() => {
    if(showAlert){
    //debugger
    const timer = setTimeout(() => {
      //debugger
      setShowAlert(false);
    }, 5000);
    return () => clearTimeout(timer);
  }
  }, []);
  const bg =
    status === "success"
      ? "bg-green"
      : status === "error"
        ? "bg-red"
        : "bg-yellow";
  return (
    showAlert && (
      <div
        className={`absolute right-1 top-12 sm:top-2 min-h-10 max-w-sm w-full rounded-sm flex items-center justify-between text-text font-medium ${bg}`}
      >
        {alertMsg}
        <div className="h-full relative">
          <button
            onClick={() => {
              setShowAlert(false);
            }}
          >
            <IconX
              size={20}
              strokeWidth={3}
              className="absolute -translate-y-1 top-0 right-1 font-black"
            />
          </button>
        </div>
      </div>
    )
  );
};

export default Alert;
