"use client";

import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button";
import AuthSocialButton from "@/app/components/AuthSocialButton";
import { BsGithub, BsGoogle } from "../../../node_modules/react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
type Varient = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();

  const [varient, setVarient] = useState<Varient>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      console.log("Authenticated");
      router.push("/user");
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (varient === "LOGIN") {
      setVarient("REGISTER");
    } else {
      setVarient("LOGIN");
    }
  }, [varient]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (varient === "REGISTER") {
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("Something went wrong!"))
        .finally(() => setIsLoading(false));
    }
    if (varient === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials");
          }

          if (callback?.ok && !callback?.error) {
            toast.success("Login");
            router.push('/user')
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid credentials");
        }
        if (!callback?.error && callback?.ok) {
          toast.success("Logged in!");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="bg-white w-[50%] py-8 px-10 flex-col rounded-md shadow-md mt-10">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {varient === "REGISTER" && (
          <Input
            id="name"
            errors={errors}
            label="Name"
            type="text"
            register={register}
          />
        )}
        <Input
          id="email"
          errors={errors}
          label="Email address"
          type="email"
          register={register}
        />
        <Input
          id="password"
          errors={errors}
          label="Password"
          type="password"
          register={register}
        />
        <div>
          <Button disabled={isLoading} fullWidth type="submit">
            {varient === "LOGIN" ? "Sign in " : "Register"}
          </Button>
        </div>
      </form>

      <div className=" relative mt-5 flex items-center justify-center">
        <div className="border-t border-gray-400 w-full absolute"></div>
        <div className="relative bg-white px-2 text-gray-600">
          Or continue with
        </div>
      </div>

      <div className="mt-6 flex gap-2">
        <AuthSocialButton
          onClick={() => socialAction(`github`)}
          icon={BsGithub}
        />
        <AuthSocialButton
          onClick={() => socialAction(`google`)}
          icon={BsGoogle}
        />
      </div>

      <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
        <div>
          {varient === "LOGIN"
            ? "New to nerdChat?"
            : "Already have an account? "}
        </div>
        <div onClick={toggleVariant} className=" underline cursor-pointer">
          {varient == "LOGIN" ? "Create an account" : "Login to your account "}
        </div>
      </div>
    </div>
  );
};
export default AuthForm;
