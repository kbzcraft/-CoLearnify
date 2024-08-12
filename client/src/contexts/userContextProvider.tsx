"use client";
import React, { useState } from "react";
import UserContext from "./userContext";
const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [day, setDay] = useState<number>(29);
  const [month, setMonth] = useState<number>(1);
  const [year, setYear] = useState<number>(2014);
  const [password, setPassword] = useState<string>("");
  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        email,
        setEmail,
        day,
        setDay,
        month,
        setMonth,
        year,
        setYear,
        password,
        setPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
