import { Dispatch, SetStateAction } from "react";

const validateUsername = (
  username: string,
  setUsernameErr: Dispatch<SetStateAction<string>>,
): boolean => {
  // is valid username
  username = username.trim();
  if (username.length === 0) {
    setUsernameErr("*required");
    return false;
  }
  if (username.length < 2) {
    setUsernameErr("*must be 2char long");
    return false;
  }
  //is username already taken check db
  //
  setUsernameErr("");
  return true;
};

export default validateUsername;
