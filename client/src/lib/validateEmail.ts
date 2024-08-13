import { Dispatch, SetStateAction } from "react";

const validateEmail = (
  email: string,
  setEmailErr?: Dispatch<SetStateAction<string>>,
): boolean => {
  email = email.trim();
  if (email.length === 0) {
    if (setEmailErr) {
      setEmailErr("*required");
    }
    return false;
  }

  const p = email.match(
    /^(\w+)([\.+\-\/=]?)(\w*)([\.+\-\/=]?)([\w]*)@([a-z\-]+)\.([a-z]{2,})(\.[a-z]{2,})?$/,
  );
  if (p === null) {
    if (setEmailErr) {
      setEmailErr("invalid email");
    }
    return false;
  }

  // check if email is used or not
  // ..
  if (setEmailErr) {
    setEmailErr("");
  }
  return true;
};

export default validateEmail;
