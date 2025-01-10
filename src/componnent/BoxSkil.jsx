import React from 'react'
import { motion } from "framer-motion";

export default function BoxSkil({icon , title , text}) {
  return (
    <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ x : 10 }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col items-center space-y-2 rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-center group hover:bg-neutral-900/50 transition-colors"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900">
            <img src={icon} className="w-6 h-6  " />
          </div>
          <div>
            <h3 className="text-sm font-medium text-white">{title}</h3>
            <p className="text-xs text-neutral-400">{text}</p>
          </div>
        </motion.li>
  )
}
