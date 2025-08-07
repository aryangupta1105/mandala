"use client";
import * as React from "react";

export const InsightsTitle= () => {
  return (
    <h1 className="relative text-7xl text-nowrap font-semibold tracking-tighter text-center backdrop-blur-[25px] leading-[64px] text-yellow-900 text-opacity-30 max-md:text-6xl max-md:tracking-tighter max-md:leading-[52px] max-sm:text-4xl max-sm:tracking-tighter max-sm:leading-9">
      <span className="text-7xl font-bold text-yellow-900 max-md:text-6xl max-sm:text-4xl">
        Insights
      </span>
        <span
          className="text-7xl font-bold max-md:text-6xl max-sm:text-4xl relative"
          style={{
            color: 'rgba(102, 64, 0, 0.3)',
            WebkitTextStroke: '1px #a16207', // Tailwind's text-yellow-900
            textStroke: '1px #a16207',
          }}
        >
        {" "}from{" "}
      </span>
      <span className="text-7xl font-bold text-yellow-900 max-md:text-6xl max-sm:text-4xl">
        the Still Point.
      </span>
    </h1>
  );
};
