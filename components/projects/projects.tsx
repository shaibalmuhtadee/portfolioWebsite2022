import React from 'react'
import { motion } from "framer-motion"
 
const Projects = () => {
   return (
      <div className='px-6 pt-4 text-black cursor-default md:pt-12 dark:text-light_primary font-Rubik' id="projects">
         <motion.div initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: {duration: 0.75}}}>
            <h2 className='px-2 py-5 text-4xl font-bold'>Projects</h2>
            <h3 className='px-2 pt-5 text-2xl font-semibold text-light_gray_custom dark:text-dark_gray_custom'>Here are my most recent projects that I enjoyed making and designing from scratch, both as a team and alone.</h3>
         </motion.div>
         <div className='mx-2 pt-28 md:pt-12 space-y-36 md:space-y-14'>
            
            {/*Inventory Dashboard*/}
            <motion.div 
               initial={{x: -50, opacity: 0}} 
               whileInView={{x: 0, opacity: 1}} 
               transition={{ease: "easeInOut", duration: 0.5}} 
               className='w-full rounded-md -z-10 h-[22rem] drop-shadow-lg grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2'
            >
               <div className='flex flex-col items-center justify-center w-full h-full row-span-1 text-left md:col-span-1'>
                  <h1 className='pt-6 pb-2 pl-4 mr-auto text-4xl font-bold uppercase md:pl-10'>Inventory Dashboard</h1>
                  <h2 className='pl-4 mr-auto text-2xl font-extrabold md:pl-10 text-light_gray_custom dark:text-dark_gray_custom'>Full Stack App for managing inventory data</h2>
                  <div className='z-50 text-[16px] flex items-center w-full md:p-4 pl-4 mt-3 ml-0 md:ml-20 text-left rounded-md md:shadow-xl text-light_gray_custom dark:text-dark_gray_custom h-26 md:bg-light_primary md:dark:bg-dark_primary'>
                     <h1>Currently designing and building a functional dashboard application to keep track of the inventory status of a restaurant</h1>
                  </div>
                  <div className='flex pt-2 pb-20 pl-4 mt-auto mr-auto space-x-2 text-xl md:pb-4 text-light_gray_custom dark:text-dark_gray_custom md:pl-11'>
                     <h1>React</h1>
                     <h1>MongoDB</h1>
                     <h1>GraphQL</h1>
                  </div>
               </div>
               <motion.div whileHover={{y:-7, z:-1, transition: {duration: 0.2, ease: "easeInOut" }}} className='flex items-center justify-center w-full h-full row-span-1 mt-10 text-center rounded-md cursor-pointer md:mt-auto md:col-span-1 dark:bg-light_primary bg-dark_primary'>
                  <img className='w-auto h-48 md:h-72' src="/projectIcons/dashboard.png" alt="icon" />
               </motion.div>
            </motion.div>
            
            {/*Jukebox*/}
            <motion.div 
               initial={{x: -50, opacity: 0}} 
               whileInView={{x: 0, opacity: 1}} 
               transition={{ease: "easeInOut", duration: 0.5}} 
               className='w-full rounded-md -z-10 h-[22rem] drop-shadow-lg grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2'
            >
               <motion.div whileHover={{y:-7, z:-1, transition: {duration: 0.2, ease: "easeInOut" }}} className='flex items-center justify-center w-full h-full row-span-1 row-start-2 mt-6 text-center rounded-md cursor-pointer md:row-start-1 md:mt-auto md:col-span-1 dark:bg-light_primary bg-dark_primary'>
                  <img className='w-auto h-40 md:h-72' src="/projectIcons/music.png" alt="icon" />
               </motion.div>
               <div className='flex flex-col items-center justify-center w-full h-full row-span-1 text-left md:text-right md:col-span-1'>
                  <h1 className='pt-6 pb-2 pl-4 mr-auto text-4xl font-bold uppercase md:pr-10 md:ml-auto md:mr-0'>Jukebox</h1>
                  <h2 className='pl-4 mr-auto text-2xl font-extrabold md:mr-0 md:pr-10 text-light_gray_custom dark:text-dark_gray_custom'>Music Genre Classification and Recommendation AI</h2>
                  <div className='z-50 text-[16px] flex items-center w-full md:p-4 pl-4 mt-3 ml-0 md:mt-8 md:mr-20 text-left md:text-right rounded-md md:shadow-xl text-light_gray_custom dark:text-dark_gray_custom h-26 md:bg-light_primary md:dark:bg-dark_primary'>
                     <h1>Built and trained a convolutional neural network to classify songs between different music genres and recommend similar sounding music</h1>
                  </div>
                  <div className='flex pt-2 pb-20 pl-4 mt-auto mr-auto space-x-2 text-xl md:mr-0 md:pb-4 md:ml-auto text-light_gray_custom dark:text-dark_gray_custom pr-11'>
                     <h1>Python</h1>
                     <h1>PyTorch</h1>
                     <h1>TensorFlow</h1>
                  </div>
               </div>
            </motion.div>
 
            {/*To Do App*/}
            <motion.div 
               initial={{x: -50, opacity: 0}} 
               whileInView={{x: 0, opacity: 1}} 
               transition={{ease: "easeInOut", duration: 0.5}} 
               className='w-full rounded-md -z-10 h-[22rem] drop-shadow-lg grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2'
            >
               <div className='flex flex-col items-center justify-center w-full h-full row-span-1 text-left md:col-span-1'>
                  <h1 className='pt-6 pb-2 pl-4 mr-auto text-4xl font-bold uppercase md:pl-10'>To Do app</h1>
                  <h2 className='pl-4 mr-auto text-2xl font-extrabold md:pl-10 text-light_gray_custom dark:text-dark_gray_custom'>CRUD App with User Authentication</h2>
                  <div className='z-50 text-[16px] flex items-center w-full md:p-4 pl-4 mt-3 ml-0 md:ml-20 text-left rounded-md md:shadow-xl text-light_gray_custom dark:text-dark_gray_custom h-26 md:bg-light_primary md:dark:bg-dark_primary'>
                     <h1>Designed and built a to do list app using ReactJS and TailwindCSS. The app has Firebase user authentication and uses Firestore to manage data</h1>
                  </div>
                  <div className='flex pt-2 pb-20 pl-4 mt-auto mr-auto space-x-2 text-xl md:mt-6 md:pb-4 text-light_gray_custom dark:text-dark_gray_custom md:pl-11'>
                     <h1>TypeScript</h1>
                     <h1>React</h1>
                     <h1>Firebase</h1>
                  </div>
               </div>
               <motion.div whileHover={{y:-7, z:-1, transition: {duration: 0.2, ease: "easeInOut" }}} className='flex items-center justify-center w-full h-full row-span-1 mt-6 text-center rounded-md cursor-pointer md:mt-auto md:col-span-1 dark:bg-light_primary bg-dark_primary'>
                  <img className='w-auto h-40 md:h-72' src="/projectIcons/todolist.png" alt="icon" />
               </motion.div>
            </motion.div>

            {/*ChromaMap*/}
            <motion.div 
               initial={{x: -50, opacity: 0}} 
               whileInView={{x: 0, opacity: 1}} 
               transition={{ease: "easeInOut", duration: 0.5}} 
               className='w-full rounded-md -z-10 h-[22rem] drop-shadow-lg grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2'
            >
               <motion.div whileHover={{y:-7, z:-1, transition: {duration: 0.2, ease: "easeInOut" }}} className='flex items-center justify-center w-full h-full row-span-1 row-start-2 mt-8 text-center rounded-md cursor-pointer md:row-start-1 md:mt-auto md:col-span-1 dark:bg-light_primary bg-dark_primary'>
                  <img className='w-auto h-max-72' src="/projectIcons/chromamap.png" alt="icon" />
               </motion.div>
               <div className='flex flex-col items-center justify-center w-full h-full row-span-1 text-left md:text-right md:col-span-1'>
                  <h1 className='pt-6 pb-2 pl-4 mr-auto text-4xl font-bold uppercase md:pr-10 md:ml-auto md:mr-0'>ChromaMap</h1>
                  <h2 className='pl-4 mr-auto text-2xl font-extrabold md:mr-0 md:pr-10 text-light_gray_custom dark:text-dark_gray_custom'>Accessibility Driven GIS Map Application</h2>
                  <div className='z-50 text-[16px] flex items-center w-full md:p-4 pl-4 mt-3 ml-0 md:mt-8 md:mr-20 text-left md:text-right rounded-md md:shadow-xl text-light_gray_custom dark:text-dark_gray_custom h-26 md:bg-light_primary md:dark:bg-dark_primary'>
                     <h1>Created a GIS mapping software in C++ for the visually impaired. Implemented a multi-destination dijkstra algorithm to solve a modified travelling salesman problem.</h1>
                  </div>
                  <div className='flex pt-2 pb-20 pl-4 mt-auto mr-auto space-x-2 text-xl md:mr-0 md:pb-4 md:ml-auto text-light_gray_custom dark:text-dark_gray_custom pr-11'>
                     <h1>C++</h1>
                     <h1>C</h1>
                     <h1>OpenMaps API</h1>
                  </div>
               </div>
            </motion.div>
  
            {/*ARBIS*/}
            <motion.div 
               initial={{x: -50, opacity: 0}} 
               whileInView={{x: 0, opacity: 1}} 
               transition={{ease: "easeInOut", duration: 0.5}} 
               className='w-full rounded-md -z-10 h-[22rem] drop-shadow-lg grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2'
            >
               <div className='flex flex-col items-center justify-center w-full h-full row-span-1 text-left md:col-span-1'>
                  <h1 className='pt-6 pb-2 pl-4 mr-auto text-4xl font-bold uppercase md:pl-10'>ARBIS</h1>
                  <h2 className='pl-4 mr-auto text-2xl font-extrabold md:pl-10 text-light_gray_custom dark:text-dark_gray_custom'>Room Booking Management Website</h2>
                  <div className='z-50 text-[16px] flex items-center w-full md:p-4 pl-4 mt-3 ml-0 md:ml-20 text-left rounded-md md:shadow-xl text-light_gray_custom dark:text-dark_gray_custom h-26 md:bg-light_primary md:dark:bg-dark_primary'>
                     <h1>Designed a website to administrate and manage room bookings and teachers within a high school. Used PHP, MySQL and AJAX to create databases, bookings, and asynchronously change data</h1>
                  </div>
                  <div className='flex pt-2 pb-20 pl-4 mt-auto mr-auto space-x-2 text-xl md:pb-4 text-light_gray_custom dark:text-dark_gray_custom md:pl-11'>
                     <h1>JavaScript</h1>
                     <h1>PHP</h1>
                     <h1>SQL</h1>
                  </div>
               </div>
               <motion.div whileHover={{y:-7, z:-1, transition: {duration: 0.2, ease: "easeInOut" }}} className='flex items-center justify-center w-full h-full row-span-1 mt-8 text-center rounded-md cursor-pointer md:mt-auto md:col-span-1 dark:bg-light_primary bg-dark_primary'>
                  <img className='w-auto h-40 md:h-72' src="/projectIcons/arbis.png" alt="icon" />
               </motion.div>
            </motion.div>

         </div>
      </div>
   )
}
 
export default Projects