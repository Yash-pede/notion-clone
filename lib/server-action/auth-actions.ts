"use server";

import { z } from "zod";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { LoginFormSchema, SignUpFormSchema } from "../formSchema";

export async function actionLoginUser({
  email,
  password,
}: z.infer<typeof LoginFormSchema>) {
  const supabase = createRouteHandlerClient({ cookies });
  const response = await supabase.auth.signInWithPassword({ email, password });
  return response;
}

export async function actionSignUpUser({
  email,
  password,
}: z.infer<typeof SignUpFormSchema>) {
  const supabase = createRouteHandlerClient({ cookies });
  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`,
    },
  });
  return response;
}
