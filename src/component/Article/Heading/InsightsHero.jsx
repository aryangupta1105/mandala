"use client";
import * as React from "react";
import { InsightsTitle } from "./InsightsTitle";
import { InsightsSubtitle } from "./InsightsSubtitle";
import HeadingTick from "./HeadingTick";

export const InsightsHero= () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <header className="flex flex-col gap-4 py-10 justify-center items-center px-5  mx-auto my-0 w-full max-w-[865px] min-h-[132px] max-md:px-4 max-md:py-8 max-md:max-w-[90%] max-sm:gap-3 max-sm:px-2.5 max-sm:py-5 max-sm:max-w-screen-sm">
        <HeadingTick/>
        <InsightsTitle />
        <InsightsSubtitle />
      </header>
    </>
  );
};

export default InsightsHero;
