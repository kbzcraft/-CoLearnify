"use client";
import Input from "@/components/input";
import { useContext, useState } from "react";
import DobSelectList from "@/components/dobSelectList";
import BtnSm from "@/components/buttonSm";
import UserContext from "@/contexts/userContext";
import validateEmail from "@/lib/validateEmail";
import validateUsername from "@/lib/validateUsername";

interface Props {
  onClickFn?: VoidFunction;
}

const CreateAccount: React.FC<Props> = ({ onClickFn }) => {
  const [usernameError, setUsernameErr] = useState<string>("");
  const [emailError, setEmailErr] = useState<string>("");
  const {
    userName,
    setUserName,
    email,
    setEmail,
    year,
    setYear,
    month,
    setMonth,
    setDay,
  } = useContext(UserContext);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validateUsername(userName, setUsernameErr)) return;
    if (!validateEmail(email, setEmailErr)) return;
    if (onClickFn) onClickFn();

    //
  };
  return (
    <form className="flex flex-col gap-5">
      <strong className="text-text">Create your account</strong>
      <Input
        label="username"
        value={userName}
        setValue={setUserName}
        error={usernameError}
      />

      <Input
        label="Email"
        value={email}
        setValue={setEmail}
        error={emailError}
      />
      <DobSelectList
        month={month}
        year={year}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
      />
      <div className="@container flex justify-end w-full">
        <BtnSm
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            handleSubmit(e);
          }}
        />
      </div>
    </form>
  );
};

export default CreateAccount;
