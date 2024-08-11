import React, { ReactElement } from "react";
interface btnProps {
  value?: string;
  icon?: ReactElement;
  classname?: string;
}
const ButtonMd: React.FC<btnProps> = ({
  icon,
  value = "Create account",
  classname,
}) => {
  classname =
    " flex border border-blue rounded-2xl p-2 w-full justify-center gap-1 text-text " +
    classname;
  return (
    <button className={classname}>
      <i>{icon}</i>
      <p>{value}</p>
    </button>
  );
};

export default ButtonMd;
