"use client";
import React from "react";
import { AuroraBackground } from "@/app/components/ui/aurora-background";
import { motion } from "framer-motion";
import { Tabs } from "@/app/components/ui/tabs";
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
    </AuroraBackground>
    <Tabs
  tabs={[
    { title: 'Tab 1', value: 'tab1', content: 'Content 1' },
    { title: 'Tab 2', value: 'tab2', content: 'Content 2' }
  ]}
  containerClassName="flex items-center justify-start relative overflow-hidden no-visible-scrollbar max-w-full w-full"
  tabClassName="px-4 py-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
  activeTabClassName="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-full"
  contentClassName="mt-32"
  
/>

    </main>
  );
}



export default AuroraBackgroundDemo;


