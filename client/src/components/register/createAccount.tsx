"use client";
import Input from "@/components/input";
import { useContext } from "react";
import DobSelectList from "@/components/dobSelectList";
import BtnSm from "@/components/buttonSm";
import UserContext from "@/contexts/userContext";

interface Props {
  onClickFn?: VoidFunction;
}

const CreateAccount: React.FC<Props> = ({ onClickFn }) => {
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
  return (
    <form className="flex flex-col gap-4">
      <strong className="text-text">Create your account</strong>
      <Input label="username" value={userName} setValue={setUserName} />
      <Input label="Email" value={email} setValue={setEmail} />
      <DobSelectList
        month={month}
        year={year}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
      />
      <div className="@container flex justify-end w-full">
        <BtnSm onClickFn={onClickFn} />
      </div>
    </form>
  );
};

export default CreateAccount;
