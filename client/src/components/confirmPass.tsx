"use client";
import Input from "@/components/input";
import { useState } from "react";
import BtnSm from "./buttonSm";

const ConfirmPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <form className="flex flex-col gap-4">
      <strong className="text-text">Set your password.</strong>
      <Input
        label="password"
        type="password"
        value={password}
        setValue={setPassword}
      />
      <Input
        label="confirm password"
        type="password"
        value={confirmPassword}
        setValue={setConfirmPassword}
      />
      <div className="@container flex justify-end w-full">
        <BtnSm value="Confirm" />
      </div>
    </form>
  );
};

export default ConfirmPassword;
