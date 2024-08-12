"use client";
import React, { useRef } from "react";
import BtnSm from "./buttonSm";

interface Props {
  onClickFn?: VoidFunction;
}
const OTP: React.FC<Props> = ({ onClickFn }) => {
  const inputRef = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const handleChange: Function =
    (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (i < inputRef.length && e.target.value.length === 1) {
        inputRef[i].current?.focus();
      }
    };
  return (
    <form className="flex flex-col gap-4">
      <strong className="text-text">Verify it's your email.'</strong>
      <div>
        <p className="text-text pb-1">
          Enter the otp that had been sent to your email.
        </p>
        <div className="flex gap-2">
          {inputRef.map((ref, i) => (
            <input
              required
              key={i}
              ref={ref}
              onChange={handleChange(i + 1)}
              type="number"
              max={9}
              min={0}
              maxLength={1}
              className="w-full max-w-10 appearance-none aspect-square bg-t border border-text rounded-md flex justify-center text-text text-center"
            />
          ))}
        </div>
      </div>
      <div className="@container flex justify-end w-full">
        <BtnSm value="Verify" onClickFn={onClickFn} />
      </div>
    </form>
  );
};

export default OTP;
