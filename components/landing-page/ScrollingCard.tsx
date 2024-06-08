"use client";
import Image from "next/image";
import React from "react";
import { CLIENTS } from "@/lib/constants";

const ScrollingCard = () => {
  return (
    <div
      className="overflow-hidden
    flex
    after:content['']
    after:dark:from-brand-dark
    after:to-transparent
    after:from-background
    after:bg-gradient-to-l
    after:right-0
    after:bottom-0
    after:top-0
    after:w-20
    after:z-10
    after:absolute

    before:content['']
    before:dark:from-brand-dark
    before:to-transparent
    before:from-background
    before:bg-gradient-to-r
    before:left-0
    before:top-0
    before:bottom-0
    before:w-20
    before:z-10
    before:absolute
  "
    >
      {[...Array(2)].map((arr) => (
        <div
          key={arr}
          className="flex
          flex-nowrap
          animate-slide
    "
        >
          {CLIENTS.map((client) => (
            <div
              key={client.alt}
              className=" relative
              w-[200px]
              m-20
              shrink-0
              flex
              items-center
            "
            >
              <Image
                alt={client.alt}
                className="object-contain max-w-none"
                src={client.logo}
                width={200}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ScrollingCard;
