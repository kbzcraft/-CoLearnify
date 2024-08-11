"use client";
import Input from "@/components/input";
import { useState } from "react";
import DobSelectList from "./dobSelectList";
import BtnSm from "./buttonSm";

const CreateAccount = () => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [day, setDay] = useState(29);
  const [month, SetMonth] = useState(1);
  const [year, setYear] = useState(2014);
  return (
    <form className="flex flex-col gap-4">
      <strong className="text-text">Create your account</strong>
      <Input label="username" value={password} setValue={setPassword} />
      <Input label="Email" value={value} setValue={setValue} />
      <DobSelectList
        month={month}
        year={year}
        setDay={setDay}
        setMonth={SetMonth}
        setYear={setYear}
      />
      <div className="@container flex justify-end w-full">
        <BtnSm />
      </div>
    </form>
  );
};

export default CreateAccount;
