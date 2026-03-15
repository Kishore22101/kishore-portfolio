import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const LIGHT_POINTS = [
  { size: "w-2 h-2", position: "top-[14%] left-[10%]", delay: 0.2, duration: 8.5 },
  { size: "w-1.5 h-1.5", position: "top-[30%] right-[18%]", delay: 1, duration: 9.5 },
  { size: "w-2 h-2", position: "bottom-[26%] left-[22%]", delay: 1.6, duration: 8.8 },
  { size: "w-1.5 h-1.5", position: "bottom-[20%] right-[24%]", delay: 2.1, duration: 10.2 },
];

export default function RoyalBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none -z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-0 transform-gpu"
        animate={
          reduceMotion
            ? undefined
            : { backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }
        }
        transition={reduceMotion ? undefined : { duration: 42, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 18%, rgba(139, 92, 246, 0.24), transparent 28%), radial-gradient(circle at 82% 20%, rgba(217, 70, 239, 0.18), transparent 24%), radial-gradient(circle at 56% 75%, rgba(99, 102, 241, 0.22), transparent 30%), radial-gradient(circle at 35% 60%, rgba(167, 139, 250, 0.14), transparent 35%)",
          backgroundSize: "160% 160%",
          willChange: "background-position",
        }}
      />

      <motion.div
        className="absolute -top-32 -left-20 w-[24rem] h-[24rem] rounded-full bg-violet-500/14 blur-[80px] transform-gpu"
        animate={reduceMotion ? undefined : { x: [0, 55, 0], y: [0, 36, 0] }}
        transition={reduceMotion ? undefined : { duration: 26, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      />

      <motion.div
        className="absolute -bottom-24 -right-16 w-[23rem] h-[23rem] rounded-full bg-fuchsia-500/14 blur-[80px] transform-gpu"
        animate={reduceMotion ? undefined : { x: [0, -52, 0], y: [0, -32, 0] }}
        transition={reduceMotion ? undefined : { duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(196,181,253,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(196,181,253,0.28) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {LIGHT_POINTS.map((point, index) => (
        <motion.div
          key={`${point.position}-${index}`}
          className={`absolute ${point.size} ${point.position} rounded-full bg-violet-300/70 transform-gpu`}
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -8, 0], opacity: [0.3, 0.85, 0.3], scale: [0.95, 1.08, 0.95] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: point.duration, repeat: Infinity, delay: point.delay, ease: "easeInOut" }
          }
          style={{ willChange: "transform, opacity" }}
        />
      ))}
    </div>
  );
}
