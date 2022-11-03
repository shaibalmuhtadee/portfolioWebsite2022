import React from 'react'
import Link from '../../node_modules/next/link';
import { motion } from "framer-motion"
import { FaNode } from "react-icons/fa";
import { SiTypescript, SiReact, SiGraphql, SiMongodb, SiPython } from "react-icons/si";

const Skills = () => {
   return (
      <motion.div initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: {duration: 0.75}}} className='px-6 pt-12 text-black cursor-default dark:text-light_primary font-Rubik'> 
         <h2 className='px-2 py-5 text-4xl font-bold'>Skills</h2>
         <h3 className='px-2 pt-5 text-2xl font-semibold text-light_gray_custom dark:text-dark_gray_custom'>I am passionate about learning powerful and cutting-edge technologies. These are the tools I am most familiar with and use every day.</h3>
         <div className="grid max-w-md grid-cols-3 grid-rows-2 gap-6 px-2 py-8 overflow-hidden">
            <motion.div whileHover={{y:-5, transition: {duration: 0.2, ease: "easeInOut" }}} viewport={{ once: true }} className="flex items-center justify-center h-24 rounded-md cursor-pointer drop-shadow-md bg-light_primary dark:bg-dark_secondary">
               <Link href="https://www.typescriptlang.org/">     
                  <a target="_blank">      
                     <div className='flex-inline w-min'>
                        <div className='py-1 m-auto text-5xl w-min text-typescript_color'>
                           <SiTypescript />
                        </div>
                        <span className='m-auto font-semibold md:text-xl text-dark_secondary dark:text-light_secondary'>TypeScript</span>
                     </div>
                  </a>
               </Link> 
            </motion.div>
            <motion.div whileHover={{y:-5, transition: {duration: 0.2, ease: "easeInOut" }}} viewport={{ once: true }} className="flex items-center justify-center h-24 rounded-md cursor-pointer drop-shadow-md bg-light_primary dark:bg-dark_secondary">
               <Link href="https://reactjs.org/">
                  <a target="_blank">
                     <div className='flex-inline w-min'>
                        <div className='py-[0.1rem] m-auto text-[3.5rem] w-min text-react_color'>
                           <SiReact />
                        </div>
                        <span className='px-1 m-auto font-semibold w-min md:text-xl text-dark_secondary dark:text-light_secondary'>React</span>
                     </div>
                  </a>
               </Link>
            </motion.div>
            <motion.div whileHover={{y:-5, transition: {duration: 0.2, ease: "easeInOut" }}} viewport={{ once: true }} className="flex items-center justify-center h-24 rounded-md cursor-pointer drop-shadow-md bg-light_primary dark:bg-dark_secondary">
               <Link href="https://nodejs.org/en/">
                  <a target="_blank">
                     <div className='flex-inline w-min'>
                        <div className='m-auto text-6xl w-min text-nodejs_color'>
                           <FaNode />
                        </div>
                        <span className='m-auto font-semibold w-min md:text-xl text-dark_secondary dark:text-light_secondary'>NodeJS</span>
                     </div>
                  </a>
               </Link>
            </motion.div>
            <motion.div whileHover={{y:-5, transition: {duration: 0.2, ease: "easeInOut" }}} viewport={{ once: true }} className="flex items-center justify-center h-24 rounded-md cursor-pointer drop-shadow-md bg-light_primary dark:bg-dark_secondary">
               <Link href="https://graphql.org/">  
                  <a target="_blank">
                     <div className='flex-inline w-min'>
                        <div className='py-1 m-auto text-5xl w-min text-graphql_color'>
                           <SiGraphql />
                        </div>
                        <span className='m-auto font-semibold w-min md:text-xl text-dark_secondary dark:text-light_secondary'>GraphQL</span>
                     </div>
                  </a>
               </Link> 
            </motion.div>
            <motion.div whileHover={{y:-5, transition: {duration: 0.2, ease: "easeInOut" }}} viewport={{ once: true }} className="flex items-center justify-center h-24 rounded-md cursor-pointer drop-shadow-md bg-light_primary dark:bg-dark_secondary">
               <Link href="https://www.mongodb.com/">
                  <a target="_blank">
                     <div className='flex-inline w-min'>
                        <div className='py-1 m-auto text-5xl w-min text-mongodb_color'>
                           <SiMongodb />
                        </div>
                        <span className='m-auto font-semibold w-min md:text-xl text-dark_secondary dark:text-light_secondary'>MongoDB</span>
                     </div>
                  </a>
               </Link>  
            </motion.div>
            <motion.div whileHover={{y:-5, transition: {duration: 0.2, ease: "easeInOut" }}} viewport={{ once: true }} className="flex items-center justify-center h-24 rounded-md cursor-pointer drop-shadow-md bg-light_primary dark:bg-dark_secondary">
               <Link href="https://www.python.org/">      
                  <a target="_blank">
                     <div className='flex-inline w-min'>
                        <div className='py-1 m-auto text-5xl w-min text-python_color'>
                           <SiPython />
                        </div>
                        <span className='m-auto font-semibold w-min md:text-xl text-dark_secondary dark:text-light_secondary'>Python</span>
                     </div>
                  </a>
               </Link>
            </motion.div>
         </div>
      </motion.div>
   )
}

export default Skills