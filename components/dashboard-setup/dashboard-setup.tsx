"use client";
import React, { useState } from "react";
import { AuthUser } from "@supabase/supabase-js";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

import { Meteors } from "../ui/meteors";
import EmojiPicker from "../global/emoji-picker";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { Subscription } from "@/lib/supabase/db.types";
import { CreateWorkspaceFormSchema } from "@/lib/formSchema";
import { z } from "zod";

type Props = { user: AuthUser; subscription: Subscription | null };

const DashBoardSetup = (props: Props) => {
  const [selectedEmoji, setSelectedEmoji] = useState("💰");
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting: isLoading, errors: errors },
  } = useForm<z.infer<typeof CreateWorkspaceFormSchema>>({
    mode: "onChange",
    defaultValues: {
      logo: "",
      workspaceName: "",
    },
  });

  return (
    <Card className="w-full h-full sm:h-auto bg-transparent sm:max-w-2xl">
      <CardHeader className="flex-col items-start">
        <h3 className="font-semibold text-3xl sm:text-5xl ">
          Create a Workspace
        </h3>
        <p className="text-sm">
          Lets create a private workspace to get you started.You can add
          collaborators later from the workspace settings tab.
        </p>
      </CardHeader>
      <CardBody>
        <form onSubmit={() => {}}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="text-5xl">
                <EmojiPicker getValue={(emoji) => setSelectedEmoji(emoji)}>
                  {selectedEmoji}
                </EmojiPicker>
              </div>
              <div className="w-full">
                <Input
                  description="This name will be visible to all other contributors."
                  disabled={isLoading}
                  label="Workspace Name"
                  labelPlacement="outside"
                  type="text"
                  variant="bordered"
                  {...register("workspaceName", {
                    required: "A Workspace name is required",
                  })}
                />
                <small className="text-red-600">
                  {errors.workspaceName?.message?.toString()}
                </small>
              </div>
            </div>
            <Input
              label="Workspace Logo"
              labelPlacement="outside"
              radius="sm"
              disabled={isLoading}
              type="file"
              variant="bordered"
              accept="image/*"
              {...register("logo", {
                required: "A Workspace logo is required",
              })}
            />
            <small className="text-red-600">
              {errors.logo?.message?.toString()}
            </small>
          </div>
        </form>
      </CardBody>
      <Meteors number={30} />
    </Card>
  );
};

export default DashBoardSetup;
