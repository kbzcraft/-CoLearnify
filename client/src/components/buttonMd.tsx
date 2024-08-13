import React, { ReactElement } from "react";
interface btnProps {
  value?: string;
  icon?: ReactElement;
  classname?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const ButtonMd: React.FC<btnProps> = ({
  icon,
  value = "Create account",
  classname,
  onClick,
}) => {
  classname =
    " flex border border-blue rounded-2xl p-2 w-full justify-center gap-1 " +
    classname;

  return (
    <button onClick={onClick} className={classname}>
      <i>{icon}</i>
      <p>{value}</p>
    </button>
  );
};

export default ButtonMd;
