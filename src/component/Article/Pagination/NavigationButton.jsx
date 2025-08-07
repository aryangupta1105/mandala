"use client";
import * as React from "react";

function NavigationButton({
  iconSrc,
  opacity = "10",
  onClick,
  ariaLabel
}) {
  return (
    <button
      className="flex gap-2.5 justify-center items-center self-stretch px-2 my-auto w-10 h-10 rounded-3xl"
      style={{ backgroundColor: 'rgba(163, 102, 0, 0.08)' }}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img
        src={iconSrc}
        alt=""
        className="object-contain self-stretch my-auto w-6 aspect-square"
      />
    </button>
  );
}

export default NavigationButton;
