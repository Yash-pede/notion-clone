"use client";
import React, { useState } from "react";

import { cn } from "@/cn";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Link } from "@nextui-org/link";
import { Input } from "@/components/ui/input";
import { LoginFormSchema } from "@/lib/formSchema";
import { IconArrowRight } from "@tabler/icons-react";
import Logo from "@/public/cypresslogo.svg";
import Image from "next/image";

import { actionLoginUser } from "@/lib/server-action/auth-actions";
import { toast } from "sonner";
import BorderMagicButton from "@/components/ui/borderMagicButton";
const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");

  const { register, handleSubmit, formState, reset } = useForm<
    z.infer<typeof LoginFormSchema>
  >({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof LoginFormSchema>> = async (
    data
  ) => {
    toast.loading("Logging in...");
    const { error } = await actionLoginUser(data);

    if (error) {
      reset();
      toast.error(error.message);
      setSubmitError(error.message);
    } else {
      toast.success("Logged in!");
      router.replace("/dashboard");
    }
  };

  return (
    <div className="max-w-md h-fit w-full mx-auto md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-brand-dark/10 backdrop-blur-[5rem] border-[0.5px] border-neutral-700 rounded-xl space-y-4 ">
      <Link
        href="/"
        className="
          w-full
          flex
          justify-left
          items-center"
      >
        <Image src={Logo} alt="cypress Logo" width={50} height={50} />
        <span
          className="font-semibold
          dark:text-white text-4xl first-letter:ml-2"
        >
          cypress.
        </span>
      </Link>
      <p className="text-foreground/60">
        An all-In-One Collaboration and Productivity Platform
      </p>

      <form
        className="my-8"
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => {
          if (submitError) setSubmitError("");
        }}
      >
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            {...register("email")}
            id="email"
            placeholder="bhai@cypress.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            {...register("password")}
            id="password"
            placeholder="••••••••"
            type="password"
          />
        </LabelInputContainer>
        <BorderMagicButton
          type="submit"
          className="w-full "
          content={
            <div className="flex items-center space-x-4">
              Login <IconArrowRight />
            </div>
          }
        />
      </form>
      <Link
        href="/auth/sign-up"
        className="text-sm dark:text-washed-purple-200"
      >
        Don&apos;t have an account?{" "}
        <span className="underline underline-offset-2 ml-1 dark:no-underline dark:text-primary-purple-500">
          Sign up
        </span>
      </Link>
    </div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default LoginPage;
