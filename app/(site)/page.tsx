import Image from "next/image";

import { twMerge } from "tailwind-merge";
import TitleSection from "@/components/landing-page/title-section";
import { PRICING_CARDS, USERS } from "@/lib/constants";
import { AppBanner, cal } from "@/public/images";
import ScrollingCard from "@/components/landing-page/ScrollingCard";
import TestimonialCard from "@/components/landing-page/TestimonialCard";
import clsx from "clsx";
import PricingPlanCard from "@/components/landing-page/PricingPlanCard";
import BorderMagicButton from "@/components/ui/borderMagicButton";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function Home() {
  return (
    <>
      <section className=" relative overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
        <ContainerScroll
          titleComponent={
            <>
              <TitleSection
                pill="✨ Your Workspace, Perfected"
                title="All-In-One Collaboration and Productivity Platform"
              />
              <BorderMagicButton
                className="w-full md:w-1/4 my-4 md:my-7"
                content="Get Cypress for free"
              />
            </>
          }
        >
          <Image
            alt="hero"
            src={AppBanner}
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
        <div className="absolute bottom-0 left-0 right-0 z-10 top-1/2 bg-gradient-to-t dark:from-background " />
      </section>
      <section className="relative">
        <ScrollingCard />
      </section>
      <section
        className="px-4
        sm:px-6
        flex
        justify-center
        items-center
        flex-col
        relative
      "
      >
        <div
          className="w-[30%]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          top-22
        "
        />
        <TitleSection
          title="Keep track of your meetings all in one place"
          subheading="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
          pill="Features"
        />
        <div
          className="mt-10
          max-w-[450px]
          flex
          justify-center
          items-center
          relative
          sm:ml-0
          rounded-2xl
          border-8
          border-washed-purple-300 
          border-opacity-10
        "
        >
          <Image src={cal} alt="Banner" className="rounded-2xl" />
        </div>
      </section>
      <section className="z-10 relative">
        <div className="w-full blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple/50 -z-10 top-56" />
        <div
          className="mt-20
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
        >
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={index}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "flex-row-reverse": index === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                  "ml-[100vw]": index === 1,
                }),
                "hover:paused"
              )}
            >
              {USERS.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  index={index}
                  {...testimonial}
                  className="shrink-0 dark:bg-gradient-to-t dark:from-divider dark:to-background"
                />
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="z-10 mt-20 px-4 sm:px-6 relative">
        <TitleSection
          title="The Perfect Plan For You"
          subheading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
          pill="Pricing"
        />

        <div
          className="flex 
        flex-col-reverse
        sm:flex-row-reverse
        gap-7
        justify-center
        sm:items-stretch
        items-center
        mt-10
        "
        >
          <div className="w-[40%] blur-[160px] rounded-full h-32 absolute bg-brand-primaryBlue/80 top-22 left-32 -z-10" />
          {PRICING_CARDS.map((card, index) => (
            <PricingPlanCard key={index} index={index} {...card} />
          ))}
        </div>
      </section>
    </>
  );
}
