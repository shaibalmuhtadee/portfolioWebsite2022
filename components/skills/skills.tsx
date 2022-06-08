import React from 'react'
import { SiTypescript, SiReact } from "react-icons/si";

const Skills = () => {
   return (
      <div className='px-6 pt-4 text-black cursor-default md:pt-12 dark:text-light_primary font-Rubik'> 
         <h2 className='px-2 py-5 text-4xl font-bold'>Skills</h2>
         <h3 className='px-2 pt-5 text-2xl font-semibold text-light_gray_custom dark:text-dark_gray_custom'>I am passionate about learning powerful and cutting-edge technologies. These are the tools I am most familiar with and use every day.</h3>
         <div className="grid max-w-md grid-cols-3 grid-rows-2 gap-6 px-2 pt-8 overflow-hidden">
            <div className="flex items-center justify-center h-24 duration-200 ease-in-out rounded-md drop-shadow-md bg-light_primary hover:-translate-y-1 translate-transform dark:bg-dark_secondary">
               <div className='flex-inline w-min'>
                  <div className='py-1 m-auto text-5xl w-min text-typescript_color'>
                     <SiTypescript className=''/>
                  </div>
                  <span className='m-auto font-semibold text:md md:text-xl text-dark_secondary dark:text-light_secondary'>TypeScript</span>
               </div>
            </div>
            <div className="flex items-center justify-center h-24 duration-200 ease-in-out rounded-md drop-shadow-md bg-light_primary hover:-translate-y-1 translate-transform dark:bg-dark_secondary">
               <div className='flex-inline w-min'>
                  <div className='py-1 m-auto text-5xl w-min text-react_color'>
                     <SiReact className=''/>
                  </div>
                  <span className='m-auto font-semibold text:md md:text-xl text-dark_secondary dark:text-light_secondary'>React</span>
               </div>
            </div>
            <div className="items-center h-24 duration-200 ease-in-out rounded-md bg-light_secondary hover:-translate-y-1 translate-transform dark:bg-dark_secondary">3</div>
            <div className="items-center h-24 duration-200 ease-in-out rounded-md bg-light_secondary hover:-translate-y-1 translate-transform dark:bg-dark_secondary">4</div>
            <div className="items-center h-24 duration-200 ease-in-out rounded-md bg-light_secondary hover:-translate-y-1 translate-transform dark:bg-dark_secondary">5</div>
            <div className="items-center h-24 duration-200 ease-in-out rounded-md bg-light_secondary hover:-translate-y-1 translate-transform dark:bg-dark_secondary">6</div>
         </div>
      </div>
   )
}

export default Skills