import React from 'react'
import educationProject from "../images/project-Education.png"
import agencytraveler from "../images/agency-travel.png"
import ecomeProject from '../images/screencapture-abdelghanidev-github-io-ecommerce-demo-2024-09-18-20_25_58@4x.png'
import { motion } from "framer-motion";
import reactjs from "../images/icons/icons8-react-js-48.png"
import taliwind from "../images/icons/icons8-tailwind-css-48.png"
import mongodb from "../images/icons/icons8-mongo-db-48.png"
import redux from "../images/icons/icons8-redux-48.png"
import typescript from "../images/icons/icons8-typescript-48.png"
import expressjs from "../images/icons/icons8-express-js-48.png"
import prisma from "../images/icons/icons8-prisma-orm-48.png"
import postgress from "../images/icons/icons8-postgresql-48.png"
import js from "../images/icons/icons8-javascript-48.png"

export default function ListProjects() {
  return (
    <div className="container py-[30px] bg-box-w">
    <div className="flex uppercase flex-col items-center text-[30px] font-[800] leading-[30px]">
      <h1>My Recent </h1>
      <h1>Works</h1>
    </div>
    <div className="pt-3 grid grid-cols-1 items-center md:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.4,
        }}
        className="flex flex-col items-center gap-1 pt-1"
      >
        <img
          className="rounded-[20px]"
          src={educationProject}
        />
        <h3 className="text-[20px] font-[550]">Digital Agency</h3>
        <div className="flex items-center gap-2  text-[18px]">
          <img src={reactjs} className="w-4" />
          <img src={taliwind} className="w-4" />
          <img src={mongodb} className="w-4" />
          <img src={redux} className="w-4" />
          <img src={typescript} className="w-4" />
          <img src={expressjs} className="w-4" />
          <img src={prisma} className="w-4" />
          <img src={js} className="w-4" />
          
        </div>
        <span className="text-[15px]">Agency , Portfolio</span>
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.4,
        }}
        className="flex flex-col items-center gap-1 pt-1"
        href="https://abdelghanidev.github.io/ecommerce-demo/"
      >
        <img
          className="rounded-[20px]"
          // src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/24/Demo6_Home.webp"
          src={ecomeProject}
        />
        <h3 className="text-[20px] font-[550]">Ecommerce Platform</h3>
        <div className="flex items-center gap-2  text-[18px]">
        <img src={reactjs} className="w-4" />
          <img src={taliwind} className="w-4" />
          <img src={mongodb} className="w-4" />
          <img src={redux} className="w-4" />
         
          <img src={expressjs} className="w-4" />
          
          <img src={js} className="w-4" />
        </div>
        <span className="text-[15px]">Ecommerce, Platfrom, Dashboard</span>
      </motion.a>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.4,
        }}
        className="flex flex-col items-center gap-1 pt-1"
      >
        <img
          className="rounded-[20px]"
          // src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/24/Demo25_Home.webp"
          src={agencytraveler}
        />
        <h3 className="text-[20px] font-[550]">Agency Travel</h3>
        <div className="flex items-center gap-2  text-[18px]">
        <img src={reactjs} className="w-4" />
          <img src={taliwind} className="w-4" />
          <img src={postgress} className="w-4" />
          <img src={redux} className="w-4" />
          <img src={typescript} className="w-4" />
          <img src={expressjs} className="w-4" />
          <img src={prisma} className="w-4" />
          <img src={js} className="w-4" />
        </div>
        <span className="text-[15px]">Agency, Travel</span>
      </motion.div>
    </div>
  </div>
  )
}
