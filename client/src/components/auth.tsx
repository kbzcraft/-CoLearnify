"use client";
import Input from "@/components/input";
import { useState } from "react";
import DobSelectList from "./dobSelectList";

const AuthForm = () => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [day, setDay] = useState(29);
  const [month, SetMonth] = useState(1);
  const [year, setYear] = useState(2014);
  return (
    <form>
      <strong>Create your account</strong>
      <Input label="Email" value={value} setValue={setValue} />
      <Input
        label="Password"
        type="password"
        value={password}
        setValue={setPassword}
      />
      <DobSelectList
        month={month}
        year={year}
        setDay={setDay}
        setMonth={SetMonth}
        setYear={setYear}
      />
    </form>
  );
};

export default AuthForm;
