import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-black relative flex items-center justify-center" style={{ backgroundColor: "#1d2942" }}>
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-600 opacity-60"></div>
      <div className="absolute inset-0  opacity-60"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>
  );
}
