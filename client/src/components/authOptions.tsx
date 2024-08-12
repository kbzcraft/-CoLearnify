"use client";
import ButtonMd from "./buttonMd";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
interface Props {
  onCreateAccount: VoidFunction;
}

const AuthOption: React.FC<Props> = ({ onCreateAccount }) => {
  return (
    <main>
      <section className="flex flex-col gap-2">
        <ButtonMd
          icon={<IconBrandGoogle color="#a6e3a1" />}
          value="Sign in with google"
          classname="bg-surface2"
        />
        <ButtonMd
          icon={<IconBrandGithub color="#11111b" />}
          value="Sign in with github"
          classname="bg-surface2"
        />
        <div className="flex flex-row items-center gap-1">
          <span className="grow h-[1px] bg-text"></span>
          <span>or</span>
          <span className="bg-text grow h-[1px]"></span>
        </div>
        <ButtonMd classname="bg-blue text-base" fn={onCreateAccount} />
        <p className="text-sm cursor-default my-1">
          By signing up, you agree to the{" "}
          <a className="text-blue" href="https://tos.learnify.co">
            Terms of Service
          </a>{" "}
          and{" "}
          <Link className="text-blue" href="privacy">
            Privacy Policy
          </Link>
          , including{" "}
          <Link className="text-blue" href="cookie">
            Cookie
          </Link>{" "}
          Use.
        </p>
        <strong> Already have an account ?</strong>
        <ButtonMd value="Sign in" classname="text-blue border-text" />
      </section>
    </main>
  );
};

export default AuthOption;
