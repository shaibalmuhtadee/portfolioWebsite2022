import React from 'react'
import { motion } from "framer-motion"

const Projects = () => {
   return (
      <div className='px-6 pt-4 text-black cursor-default md:pt-12 dark:text-light_primary font-Rubik' id="projects">
         <motion.div initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: {duration: 0.75}}}>
            <h2 className='px-2 py-5 text-4xl font-bold'>Projects</h2>
            <h3 className='px-2 pt-5 text-2xl font-semibold text-light_gray_custom dark:text-dark_gray_custom'>Here are my most recent projects that I enjoyed making and designing from scratch, both as a team and alone.</h3>
         </motion.div>
         <div className='pt-12 mx-2 space-y-14'>
            
            <motion.div initial={{x: -50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{ease: "easeOut", duration: 1}} className='w-full rounded-md -z-10 h-[22rem] bg-slate-400 drop-shadow-lg'></motion.div>

            <motion.div initial={{x: 50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{ease: "easeOut", duration: 1}} className='w-full rounded-md -z-10 h-[22rem] bg-cyan-400 drop-shadow-lg'></motion.div>

            <motion.div initial={{x: -50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{ease: "easeOut", duration: 1}} className='w-full bg-orange-400 rounded-md -z-10 h-[22rem] drop-shadow-lg'></motion.div>

            <motion.div initial={{x: 50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{ease: "easeOut", duration: 1}} className='w-full bg-green-400 rounded-md -z-10 h-[22rem] drop-shadow-lg'></motion.div>
         
         </div>
      </div>
   )
}

export default Projects