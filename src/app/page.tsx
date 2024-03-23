"use client";
import React from "react";
import { AuroraBackground } from "@/app/components/ui/aurora-background";
import { motion } from "framer-motion";
import {GridBackgroundDemo} from "@/app/components/ui/Background"
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { AuroraBackground2 } from "./components/ui/aurora2-background";
import {AuroraBackground3} from "./components/ui/aurora3-background"
export function AuroraBackgroundDemo() {
  return (
    <main>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Georgi Karchev
        </div>
        <div className="font-extralight text-base md:text-3xl dark:text-neutral-200 py-4">
          I like to create usefull software!
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Contact now
        </button>
      </motion.div>
    </AuroraBackground >
    <AuroraBackground3>
      <h1>DaftoDenkele</h1>
    </AuroraBackground3>

    {/* <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Gradients X Animations
        </p>
      </div>
    </BackgroundGradientAnimation> */}
    <AuroraBackground2>
      <h1>Projects</h1>
    </AuroraBackground2>
    </main>
  );
}



export default AuroraBackgroundDemo;


