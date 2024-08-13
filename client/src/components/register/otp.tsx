"use client";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  onClickFn?: VoidFunction;
}

type OtpType = [
  number | "",
  number | "",
  number | "",
  number | "",
  number | "",
  number | "",
];

const OTP: React.FC<Props> = ({ onClickFn }) => {
  const router = useRouter();
  const [userOtp, setUserOtp] = useState<OtpType>(["", "", "", "", "", ""]);
  const inputRef = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    if (userOtp.join("").length === 6) {
      handleOTP();
    }
  }, [userOtp]);

  const handleChange = (
    e: React.KeyboardEvent<HTMLInputElement>,
    i: number,
  ) => {
    const key = e.key;

    if (!isNaN(Number(key)) && key.trim() !== "") {
      const newOtp = [...userOtp];
      newOtp[i] = Number(key);
      setUserOtp(newOtp as OtpType);

      if (i < inputRef.length - 1 && inputRef[i + 1].current) {
        inputRef[i + 1].current?.focus();
      }
    }

    if (e.code.includes("Backspace")) {
      if (userOtp[i] !== "") {
        const newOtp = [...userOtp];
        newOtp[i] = "";
        setUserOtp(newOtp as OtpType);
      } else if (i >= 1 && inputRef[i - 1].current) {
        inputRef[i - 1].current?.focus();
      }
    }
  };

  const handleOTP = () => {
    // const otp = userOtp.join("");
    router.push("/");
    //if (onClickFn) onClickFn();
  };

  return (
    <form className="flex flex-col gap-4 pb-8">
      <strong className="text-text">Verify it's your email.</strong>
      <div>
        <p className="text-text pb-1">
          Enter the OTP that has been sent to your email.
        </p>
        <div className="flex gap-2">
          {inputRef.map((ref: RefObject<HTMLInputElement>, i: number) => (
            <input
              required
              key={i}
              ref={ref}
              onKeyDown={(e) => handleChange(e, i)}
              type="text"
              maxLength={1}
              value={userOtp[i]}
              className="w-full max-w-10 appearance-none aspect-square bg-t border border-text rounded-md flex justify-center text-text text-center"
            />
          ))}
        </div>
      </div>
    </form>
  );
};

export default OTP;
