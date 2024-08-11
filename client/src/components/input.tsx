import React, { Dispatch, SetStateAction } from "react";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  radius?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  value,
  setValue,
  radius = "10px",
}) => {
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <label
      style={{ borderRadius: radius }}
      className={`flex flex-col border border-text relative min-h-12 focus-within:border-blue text-text`}
    >
      <input
        onChange={handelChange}
        type={type}
        value={value}
        className="bg-[transparent] outline-none px-3 pt-1 peer absolute inset-0"
      />
      <p
        className={
          value
            ? "px-3 text-sm text-[#cdd6f470]"
            : "px-3 top-1/2  translate-y-1/2 peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:transition-all peer-focus:duration-200"
        }
      >
        {label}
      </p>
    </label>
  );
};

export default Input;
