"use client";
import RegisterModal from "@/components/register";

import { useRef } from "react";

const TestPage = () => {
  const step1ref = useRef<HTMLDialogElement>(null);
  return <RegisterModal refObj={step1ref} />;
};

export default TestPage;
