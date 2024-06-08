"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { cn } from "@/cn";

type Props = {
  name: string;
  message: string;
  className?: string;
  index: number;
};

const TestimonialCard = (props: Props) => {
  return (
    <Card className={cn("w-[500px] py-3", props.className)}>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={`/avatars/${props.index + 1}.png`}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {props.name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{props.name}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{props.message}</p>
      </CardBody>
    </Card>
  );
};

export default TestimonialCard;
