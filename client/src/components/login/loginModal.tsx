"use client";
import Input from "@/components/input";
import BtnSm from "@/components/buttonSm";
import { useState } from "react";
import CoLearnify from "../../../public/logo";
import { IconX } from "@tabler/icons-react";
import validateEmail from "@/lib/validateEmail";
import validatePass from "@/lib/validatePass";
import Alert from "../alert";
import { useRouter } from "next/navigation";

interface Props {
  handleClose?: VoidFunction;
}

const LoginModal: React.FC<Props> = ({ handleClose }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authErr, setAuthErr] = useState<string>("");
  const [showAlertErr, setShowAlertErr] = useState<boolean>(false);
  const router = useRouter();
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateEmail(email)) {
      if (validatePass(password)) {
        router.push("/");
      } else {
        setAuthErr("Invalid email or password");
        setShowAlertErr(true);
      }
    } else {
      setAuthErr("Invalid email or password.");
      setShowAlertErr(true);
    }
    //...
  };
  return (
    <>
      <div className="flex flex-row items-center mb-4">
        <CoLearnify classname="w-4 h-4 fill-text" />
        <button className="ml-[90%]" onClick={handleClose}>
          <IconX color="#cdd6f4" />
        </button>
      </div>

      <form className="flex flex-col gap-4">
        <strong className="text-text">Sign in to coLearnify.</strong>
        <Input label="Email" value={email} setValue={setEmail} />
        <Input
          label="password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        {showAlertErr && (
          <Alert
            alertMsg={authErr}
            status="error"
            setShowAlert={setShowAlertErr}
            showAlert={showAlertErr}
          />
        )}
        <div className="@container flex justify-end w-full">
          <BtnSm
            onClick={(e) => {
              handleLogin(e);
            }}
          />
        </div>
      </form>
    </>
  );
};

export default LoginModal;
