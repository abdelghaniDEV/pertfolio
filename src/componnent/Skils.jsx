import React from 'react'

import reactjs from "../images/icons/icons8-react-js-48.png"
import taliwindCss from "../images/icons/icons8-tailwind-css-48.png"
import nodejs from "../images/icons/icons8-node-js-48.png"
import js from "../images/icons/icons8-javascript-48.png"
import ts from "../images/icons/icons8-typescript-48.png"
import expressjs from "../images/icons/icons8-express-js-48 (1).png"
import postgress from "../images/icons/icons8-postgresql-48.png"
import mongodb from "../images/icons/icons8-mongo-db-48.png"
import prisma from "../images/icons/icons8-prisma-orm-48.png"
import git from "../images/icons/icons8-git-48.png"
import docker from "../images/icons/icons8-docker-48.png"
import github from "../images/icons/icons8-github-48.png"

import BoxSkil from './BoxSkil'

export default function Skils() {
  return (
    <div className="bg-black">
    <div className=" py-[20px] container">
      <div className="pb-6">
        <h2 className="text-[26px] uppercase font-[900] text-center text-white">
          Task
        </h2>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-6 gap-5 items-center justify-center">
        <BoxSkil icon={reactjs} title={'React js'} text={'JS Framework'} />
        <BoxSkil icon={taliwindCss} title={'Taliwind CSS'} text={' CSS framework'} />
        <BoxSkil icon={nodejs} title={'Node JS'} text={'Runtime'} />
        <BoxSkil icon={js} title={'JavaScript'} text={'Programming Language'} />
        <BoxSkil icon={ts} title={'typeScript'} text={'Language'} />
        <BoxSkil icon={expressjs} title={'Express'} text={'Backend Framework'} />
        <BoxSkil icon={postgress} title={'PostgesQL'} text={'SQL Database'} />
        <BoxSkil icon={mongodb} title={'MongoDB'} text={'noSQL Database'} />
        <BoxSkil icon={prisma} title={'Prisma'} text={'ORM'} />
        <BoxSkil icon={docker} title={'Docker'} text={'Containerization'} />
        <BoxSkil icon={git} title={'Git'} text={'Version Control'} />
        <BoxSkil icon={github} title={'GitHub'} text={'Version Control'} />
      </ul>
      
      {/* <SliderSkils /> */}
    </div>
  </div>
  )
}
