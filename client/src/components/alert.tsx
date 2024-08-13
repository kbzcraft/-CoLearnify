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
  const bg =
    status === "success"
      ? "bg-green"
      : status === "error"
        ? "bg-red"
        : "bg-yellow";

  // Combine classes into classname
  const classname = `absolute right-1 top-12 sm:top-2 min-h-10 max-w-sm w-full rounded-sm flex items-center justify-between text-text font-medium ${bg}`;

  useEffect(() => {
    // Set timer to hide alert after 5 seconds
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [setShowAlert]); // Ensure setShowAlert is in dependencies array

  return (
    showAlert && (
      <div className={classname}>
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
