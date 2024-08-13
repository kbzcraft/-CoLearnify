"use client";
import Input from "@/components/input";
import { useContext, useState } from "react";
import BtnSm from "@/components/buttonSm";
import UserContext from "@/contexts/userContext";

interface Props {
  onClickFn?: VoidFunction;
  // password: string;
  // setPassword: Dispatch<SetStateAction<string>>;
  // confirmPassword: string;
  // setConfirmPassword: Dispatch<SetStateAction<string>>;
}
const ConfirmPassword: React.FC<Props> = ({ onClickFn }) => {
  const { password, setPassword } = useContext(UserContext);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passErr, setPassErr] = useState<string>("");
  const handlePass = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password.length === 0) {
      setPassErr("*required");
      return;
    }
    if (confirmPassword.includes(" ")) {
      setPassErr("white space not allowed");
      return;
    }
    if (password.length < 8) {
      setPassErr("password must be 8 char long");
      return;
    }
    if (password === confirmPassword) {
      setPassErr("");
      if (onClickFn) onClickFn();
    } else {
      setPassErr("password must be same.");
    }
  };
  return (
    <form className="flex flex-col gap-4">
      <strong className="text-text">Set your password.</strong>
      <Input
        label="password"
        type="password"
        value={password}
        setValue={setPassword}
        error={passErr}
      />
      <Input
        label="confirm password"
        type="password"
        value={confirmPassword}
        setValue={setConfirmPassword}
      />
      <div className="@container flex justify-end w-full">
        <BtnSm
          value="Confirm"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handlePass(e)}
        />
      </div>
    </form>
  );
};

export default ConfirmPassword;
