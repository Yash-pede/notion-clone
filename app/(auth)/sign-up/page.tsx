"use client";
import React, { Suspense, useMemo, useState } from "react";

import { cn } from "@/cn";
import * as z from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Link } from "@nextui-org/link";
import { Input } from "@/components/ui/input";
import { SignUpFormSchema } from "@/lib/formSchema";
import { IconArrowRight, IconBellCheck } from "@tabler/icons-react";
import Logo from "@/public/cypresslogo.svg";
import Image from "next/image";

import { actionSignUpUser } from "@/lib/server-action/auth-actions";
import { toast } from "sonner";
import BorderMagicButton from "@/components/ui/borderMagicButton";
import clsx from "clsx";
import Pill from "@/components/ui/Pill";

function CheckMAil({ confirmation }: { confirmation: boolean }) {
  const searchParams = useSearchParams();
  const codeExchangeError = useMemo(() => {
    if (!searchParams) return "";
    return searchParams.get("error_description");
  }, [searchParams]);

  return (
    <>
      {confirmation ||
        (codeExchangeError && (
          <Pill
            containerClassName="mt-4 px-2 py-3 w-full bg-success"
            className="flex justify-center items-center gap-4 text-foreground text-medium"
          >
            <IconBellCheck /> Please verify your email.
          </Pill>
        ))}
    </>
  );
}

const SignUpPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm<
    z.infer<typeof SignUpFormSchema>
  >({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof SignUpFormSchema>> = async (
    data
  ) => {
    toast.loading("Signing up...");
    const response = await actionSignUpUser(data);
    if (response.error) {
      setSubmitError(response.error.message);
      toast.dismiss();
      toast.error(response.error.message);
      return;
    }
    toast.dismiss();
    toast.success("Please confirm your email address");
    setConfirmation(true);
    reset();
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
        <LabelInputContainer className="mb-4">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            {...register("confirmPassword")}
            id="confirmPassword"
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
      <Link href="/login" className="text-sm dark:text-washed-purple-200">
        Already have an account?
        <span className="underline underline-offset-2 ml-1 dark:no-underline dark:text-primary-purple-500">
          Sign up
        </span>
      </Link>
      <Suspense fallback={null}>
        <CheckMAil confirmation={confirmation} />
      </Suspense>
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

export default SignUpPage;
