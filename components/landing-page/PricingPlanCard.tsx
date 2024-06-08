"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { cn } from "@/cn";
import CheckIcon from "@/public/icons/check.svg";
import DiamondIcon from "@/public/icons/diamond.svg";
import Image from "next/image";
import BorderMagicButton from "../ui/borderMagicButton";

type Props = {
  className?: string;
  index: number;
  planType: string;
  price: string;
  description: string;
  highlightFeature: string;
  freatures: string[];
};

const PricingPlanCard = (props: Props) => {
  return (
    <Card
      className={cn(
        " md:w-[350px] py-3 backdrop-blur-3xlxl bg-brand-dark/60 border border-divider",
        props.className
      )}
    >
      <CardHeader className="justify-between">
        <h3 className="text-4xl md:text-5xl font-semibold text-white">
          {props.planType}
        </h3>
        <Image src={DiamondIcon} alt="check" width={40} height={40} />
      </CardHeader>
      <CardBody className="px-3 py-0 text-default-400 overflow-y-hidden space-y-5">
        <p className="text-neutral-600">
          billed annually <br /> $17 billed monthly
        </p>
        <p className="text-4xl text-white font-light">
          $ {props.price}
          <span className="text-neutral-600 font-light text-lg">/mo</span>
        </p>
        <BorderMagicButton content="Get Started" />
        <div className="flex flex-col justify-between text-start gap-3 items-start">
          {props.planType !== "Free Plan" && <p className="mb-3">{props.highlightFeature}</p>}
          {props.freatures.map((feature, idx) => (
            <div className="flex items-center justify-start gap-2" key={idx}>
              <Image src={CheckIcon} alt="diamond" width={20} height={20} />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default PricingPlanCard;
