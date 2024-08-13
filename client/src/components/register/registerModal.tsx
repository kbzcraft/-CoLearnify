"use client";

import { IconX } from "@tabler/icons-react";
import CreateAccount from "./createAccount";
import ConfirmPassword from "./confirmPass";
import OTP from "./otp";
import { useState } from "react";
import CoLearnify from "../../../public/logo";

interface Props {
  onClickFn?: VoidFunction;
  handleClose: VoidFunction;
}

const RegisterModal: React.FC<Props> = ({ handleClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const handleStep = () => {
    if (currentStep === 1 || currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 3) {
      alert("Account Created Successfully.");
    }
  };
  return (
    <>
      <div className="flex flex-row items-center mb-4">
        <CoLearnify classname="w-4 h-4 fill-text" />
        <button className="ml-[90%]" onClick={handleClose}>
          <IconX color="#cdd6f4" />
        </button>
      </div>
      {currentStep === 1 && <CreateAccount onClickFn={handleStep} />}
      {currentStep === 2 && <ConfirmPassword onClickFn={handleStep} />}
      {currentStep === 3 && <OTP onClickFn={handleStep} />}
    </>
  );
};

export default RegisterModal;
