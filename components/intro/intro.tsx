import React from 'react'
import Emoji from './emoji'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const intro = () => {
   return (
      <div className='px-6 pt-4 text-black cursor-default dark:text-light_primary font-Rubik' id="intro">
         
         <div className='rounded-full w-44 h-44 ring ring-black dark:ring-light_primary'>
            <img className='rounded-full w-44 h-44' src="/picture.gif" alt="author"/>
         </div>

         <h1 className='flex-wrap px-2 pt-8 pb-2 text-5xl font-bold md:flex'>Hi, I&apos;m Shai!&nbsp;<span className='inline-block'><Emoji symbol='👋' label='wave' /></span></h1>
      
         <h2 className='px-2 py-5 text-3xl font-bold md:text-4xl text-light_gray_custom dark:text-dark_gray_custom'>I am an aspiring web developer and computer engineering student at the University of Toronto seeking an internship this summer, check out my <span className='inline-block cursor-pointer dark:text-dark_highlight text-light_highlight link-underline link-underline-highlight'><a href=''>resume</a></span></h2>
         
         <div className='flex px-2 space-x-5 text-4xl cursor-pointer'>
            <div className='transition-transform duration-150 ease-in-out hover:scale-110 hover:rotate-12'>
               <Link href="https://github.com/shaibalmuhtadee"><a><FaGithub /></a></Link>
            </div>
            
            <div className='transition-transform duration-150 ease-in-out hover:scale-110 hover:rotate-12'>
               <Link href="https://www.linkedin.com/in/shaibalmuhtadee/"><a><FaLinkedin /></a></Link>
            </div>

            <div className='transition-transform duration-150 ease-in-out text-3-5xl hover:scale-110 hover:rotate-12'>
               <Link href="mailto: shaibalmuhtadee@gmail.com"><a><GrMail /></a></Link>
            </div>
         </div>
         
         <h3 className='px-2 pt-5 text-2xl font-semibold text-light_gray_custom dark:text-dark_gray_custom'>I love learning the logic behind complex software programs and developing powerful interactive apps.</h3>
         <h3 className='px-2 pt-5 text-2xl font-semibold text-light_gray_custom dark:text-dark_gray_custom'>My technology stack includes:&nbsp;<span className='inline-block transition-colors duration-200 ease-in hover:text-react_color'>React</span>,&nbsp;<span className='inline-block transition-colors duration-200 ease-in hover:text-typescript_color'>TypeScript</span>,&nbsp;<span className='inline-block transition-colors duration-200 ease-in hover:text-graphql_color'>GraphQL</span>,&nbsp;<span className='inline-block transition-colors duration-200 ease-in hover:text-python_color'>Python</span>,&nbsp;<span className='inline-block transition-colors duration-200 ease-in hover:text-cplusplus_color'>C++</span></h3>
      
      </div>
   )
}

export default intro