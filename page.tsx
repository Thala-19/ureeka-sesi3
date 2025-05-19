"use client";
import React from "react"
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./components/ui/canvas-reveal-effect";
import { Button } from "./components/ui/button"

export default function Home() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-center text-white relative z-20 max-w-2xl mx-auto">
          Hi, I'm Thala!
        </h1>
        <h3 className="mt-4 text-white text-xl relative z-20">
          AI student. Aspiring Educator. Dreamer
        </h3>
        <div className="text-center relative z-20">
          <Button 
          variant="outline"
          className="mt-6 text-black text-bold relative z-30">
            Know more about me
          </Button>
        </div>
      </div>
      
      

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0 z-10"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={10}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/90 z-10 [mask-image:radial-gradient(400px_at_center,white,transparent)]" />
    </div>
  );
}
