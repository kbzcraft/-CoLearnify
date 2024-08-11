"use client";

import { IconX } from "@tabler/icons-react";
import CoLearnify from "../../public/logo";
import CreateAccount from "./createAccount";
import ConfirmPassword from "./confirmPass";
import OTP from "./otp";

interface Ref {
  refObj: React.RefObject<HTMLDialogElement>;
}

const RegisterModal: React.FC<Ref> = ({ refObj }) => {
  const handleShow = () => {
    if (refObj.current) {
      refObj.current.showModal();
    }
  };
  const handleClose = () => {
    if (refObj.current) {
      refObj.current.close();
    }
  };
  return (
    <>
      <dialog
        ref={refObj}
        className="bg-crust border-none outline-t rounded-md p-4 max-w-lg w-full"
      >
        <div className="flex flex-row items-center mb-4">
          <CoLearnify classname="w-4 h-4 fill-text" />
          <button className="ml-[90%]" onClick={handleClose}>
            <IconX color="#cdd6f4" />
          </button>
        </div>
        <CreateAccount />
        <ConfirmPassword />
        <OTP />
      </dialog>
      <button onClick={handleShow}>create account</button>
    </>
  );
};

export default RegisterModal;
