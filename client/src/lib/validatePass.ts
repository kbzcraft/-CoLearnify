import { Dispatch, SetStateAction } from "react";

const validatePass = (
  password: string,
  setPasswordErr?: Dispatch<SetStateAction<string>>,
): boolean => {
  if (password.length < 8) {
    if (setPasswordErr) {
      setPasswordErr("Email or password did not match");
    }
    return false;
  } else {
    // validate from db
    // setPasswordErr("Email or password did not match");
    if (setPasswordErr) {
      setPasswordErr("");
    }
    return true;
  }
};

export default validatePass;
