import { motion } from "motion/react";

import { cn } from "@/lib/utils"

export const BorderBeam = ({
  children,
  className,
  contentClassName,
  delay = 0,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  transition,
  style,
  reverse = false,
  borderWidth = 1
}) => {
  return (
    <div
      className={cn(
        "relative inline-flex overflow-hidden rounded-full p-(--border-beam-width)",
        className
      )}
      style={{
        "--border-beam-width": `${borderWidth}px`,
      }}
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[170%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, transparent 300deg, ${colorFrom} 325deg, ${colorTo} 345deg, transparent 360deg)`,
          ...style,
        }}
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay,
          ...transition,
        }}
      />

      <div className={cn("relative z-10 rounded-[inherit]", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
