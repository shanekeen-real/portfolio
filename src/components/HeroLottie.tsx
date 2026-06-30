"use client";

import Lottie from "lottie-react";
import heroAnimation from "../../microanimations/hero.json";

export function HeroLottie() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <Lottie
        animationData={heroAnimation}
        loop
        autoplay
        className="h-full w-full max-h-[440px] max-w-[600px]"
        aria-label="UI design animation"
      />
    </div>
  );
}
