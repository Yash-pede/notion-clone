"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import BorderMagicButton from "@/components/ui/borderMagicButton";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Error occurred
        </p>
        <BorderMagicButton content="Try Reseting" onClick={reset}/>
      </div>
    </BackgroundGradientAnimation>
  );
}
