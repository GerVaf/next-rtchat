import Image from "@/node_modules/next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center h-[100vh]">
      <div className="flex flex-col items-center">
        <Image alt="logo" height={"48"} width="48" src="/images/logo.svg" />
        <p className="font-bold text-lg">Sign up in your acc</p>
      </div>
      <AuthForm />
    </div>
  );
}
