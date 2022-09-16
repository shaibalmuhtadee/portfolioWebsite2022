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
 
            <motion.div 
               initial={{x: -50, opacity: 0}} 
               whileInView={{x: 0, opacity: 1}} 
               transition={{ease: "easeInOut", duration: 0.5}} 
               // whileHover={{ scale: 1.1, transition: {type: "spring", stiffness: 400, damping: 10, duration:0.1, ease:"easeInOut"} }}
               className='w-full rounded-md -z-10 h-[22rem] drop-shadow-lg grid grid-cols-2'
            >
               <motion.div whileHover={{y:-5, z:-1, transition: {duration: 0.2, ease: "easeInOut" }}} className='flex items-center justify-center w-full h-full col-span-1 text-center rounded-md cursor-pointer dark:bg-light_primary bg-dark_primary'>
                  <img className='w-72 h-72' src="/music.png" alt="icon" />
               </motion.div>
               <div className='flex flex-col items-center justify-center w-full h-full col-span-1 text-right'>
                  <h1 className='pt-6 pb-2 pr-10 ml-auto text-4xl font-bold uppercase'>Jukebox</h1>
                  <h2 className='pr-10 text-2xl font-extrabold text-light_gray_custom dark:text-dark_gray_custom'>A Music Genre Classification and Recommendation AI</h2>
                  <div className='z-50 text-[16px] flex items-center w-full p-4 mt-8 mr-20 text-right rounded-md shadow-xl text-light_gray_custom dark:text-dark_gray_custom h-26 bg-light_primary dark:bg-dark_primary'>
                     <h1>Built and trained a convolutional neural network to classify songs between different music genres and recommend similar sounding music.  </h1>
                  </div>
                  <div className='flex pb-4 mt-auto ml-auto space-x-2 text-xl text-light_gray_custom dark:text-dark_gray_custom pr-11'>
                     <h1>Python</h1>
                     <h1>PyTorch</h1>
                     <h1>TensorFlow</h1>
                  </div>
               </div>
            </motion.div>
 
            <motion.div 
               initial={{x: 50, opacity: 0}} 
               whileInView={{x: 0, opacity: 1}} 
               transition={{ease: "easeOut", duration: 1}} 
               className='w-full rounded-md -z-10 h-[22rem] bg-cyan-400 drop-shadow-lg'></motion.div>
 
            <motion.div initial={{x: -50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{ease: "easeOut", duration: 1}} className='w-full bg-orange-400 rounded-md -z-10 h-[22rem] drop-shadow-lg'></motion.div>
 
            <motion.div initial={{x: 50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{ease: "easeOut", duration: 1}} className='w-full bg-green-400 rounded-md -z-10 h-[22rem] drop-shadow-lg'></motion.div>
 
         </div>
      </div>
   )
}
 
export default Projects