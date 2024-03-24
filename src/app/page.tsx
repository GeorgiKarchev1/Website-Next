"use client";
import React from "react";
import { AuroraBackground } from "@/app/components/ui/aurora-background";
import { motion } from "framer-motion";
import {GridBackgroundDemo} from "@/app/components/ui/Background"
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { AuroraBackground2 } from "./components/ui/aurora2-background";
import {AuroraBackground3} from "./components/ui/aurora3-background"
import { BackgroundGradient } from "@/app/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import proektImage from "@/app/components/images/proekt.png"
import Image from "next/image";
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
    <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
        // style={{ marginTop: "-33rem" }} 
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Projects
        </div>
       
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <div>
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <div className="flex flex-col items-center">
        <Image
          src={proektImage}
          alt="proekt"
          height="300"
          width="300"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 text-center">
          Air Jordan 4 Retro Reimagined
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
      </div>
    </BackgroundGradient>
  </div>

  <div>
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <div className="flex flex-col items-center">
        <Image
          src={proektImage}
          alt="proekt"
          height="300"
          width="300"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 text-center">
          Air Jordan 4 Retro Reimagined
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
      </div>
    </BackgroundGradient>
  </div>

  <div>
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <div className="flex flex-col items-center">
        <Image
          src={proektImage}
          alt="proekt"
          height="300"
          width="300"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 text-center">
          Air Jordan 4 Retro Reimagined
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
      </div>
    </BackgroundGradient>
  </div>
</div>

      </motion.div>
    </AuroraBackground3>

    <AuroraBackground2>
    <div className="dafto-3xl md:text-7xl font-bold dark:text-white text-center">
          Contact
        </div>
    </AuroraBackground2>
    </main>
  );
}



export default AuroraBackgroundDemo;


