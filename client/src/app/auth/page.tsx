// import AuthForm from "@/components/auth";
"use client";
import UserContextProvider from "@/contexts/userContextProvider";
import { useRef, useState } from "react";
import AuthOption from "@/components/authOptions";
// import Image from "next/image";
import CoLearnify from "@/../public/logo";
import RegisterModal from "@/components/register";
// import logo from "@/../public/learnify.png";
const AuthPage = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleShow = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };
  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };
  return (
    <UserContextProvider>
      <main className="px-5 sm:px-1 flex flex-col sm:flex-row  items-center justify-center min-h-[100vh]">
        <section className="w-full flex-col flex items-center">
          <div className="max-w-lg sm:max-w-full sm:w-fit w-full">
            <CoLearnify />
          </div>
        </section>
        <section className="w-full flex-col flex items-center">
          <div>
            <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold">
              Enhanced Learning
            </h1>
            <h3 className=" mt-8 mb-2 text-xl sm:text-2xl font-semibold">
              Start today
            </h3>
            <div className="max-w-lg">
              <AuthOption onCreateAccount={handleShow} />
            </div>
          </div>
        </section>
      </main>
      <dialog
        ref={dialogRef}
        className="bg-crust border-none outline-t rounded-md p-4 max-w-lg w-full"
      >
        <RegisterModal handleClose={handleClose} />
      </dialog>
    </UserContextProvider>
  );
};

export default AuthPage;
