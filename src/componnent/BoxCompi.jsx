import React from "react";
import { motion } from "framer-motion";

export default function BoxCompi({title , text}) {
  return (
    <motion.div
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      whileHover={{  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" ,  x : 20 }}
      transition={{
        duration: 0.5,
      }}
      className="group flex flex-col h-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 transition-colors hover:bg-neutral-900"
    >
      <div className="flex items-center gap-2 pb-3">
        <h2 className="text-[25px] font-[600] uppercase pb-1">{title}</h2>
      </div>
      <p className=" text-[20px] leading-[18px] font-[600] text-neutral-400 ">
        {text}
      </p>
    </motion.div>
  );
}
