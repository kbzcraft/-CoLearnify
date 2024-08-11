// import AuthForm from "@/components/auth";
import AuthOption from "@/components/authOptions";
// import Image from "next/image";
import CoLearnify from "@/../public/logo";
// import logo from "@/../public/learnify.png";

const AuthPage = () => {
  return (
    <main className="px-5 sm:px-1 flex flex-col sm:flex-row  items-center justify-center min-h-[100vh]">
      <section className="w-full flex-col flex items-center">
        <div className="max-w-lg sm:max-w-full sm:w-fit w-full">
          <CoLearnify />
        </div>
      </section>
      <section className="w-full flex-col flex items-center">
        <div>
          <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold">
            Enhanced Learning
          </h1>
          <h3 className=" mt-8 mb-2 text-xl sm:text-2xl font-semibold">
            Start today
          </h3>
          <div className="max-w-lg">
            <AuthOption />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthPage;
