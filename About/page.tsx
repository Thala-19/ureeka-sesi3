"use client";
import React from "react"
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";

export default function Home() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
    >
      <div className="text-center">
        <h2 className="text-6xl font-bold text-center text-white relative z-20 max-w-2xl mx-auto">
          Driven by the vision to create a golden generation of humanity, I am determined to 
          make a positive contribution to society through education and technology. 
          During my studies, I plan to be actively 
          involved in various activities that can develop 
          my leadership and organizational skills. I also want to explore my potential in 
          the field of programming and graphic design, 
          especially in the development of innovative 
          and interactive learning materials.
        </h2>
      </div>
      
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
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
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}
