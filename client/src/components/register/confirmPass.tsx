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
  /* const handlePass = () => {
    if (password === confirmPassword) {
      onClickFn()
    } else {
      console.log("password did not match");
    }
  }; */
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
        <BtnSm value="Confirm" onClickFn={onClickFn} />
      </div>
    </form>
  );
};

export default ConfirmPassword;
