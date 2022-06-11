import React from 'react'
import Link from '../../node_modules/next/link'
import { motion } from "framer-motion"

const Contact = () => {
   return (
      <motion.div initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: {duration: 0.75}}} className='px-6 py-4 text-black cursor-default md:pt-12 dark:text-light_primary font-Rubik' id="contact"> 
         <h2 className='px-2 py-5 text-4xl font-bold'>Wanna get in contact?</h2>
         <h3 className='px-2 pt-5 text-2xl font-semibold text-light_gray_custom dark:text-dark_gray_custom'>Feel free to send me an email if you have something to say, an interesting offer, or just want to hang out :&#41;</h3>
         <h3 className='px-2 pt-5 text-2xl font-semibold cursor-pointer text-dark_primary dark:text-light_primary'><Link href="mailto: shaibalmuhtadee@gmail.com"><a>shaibalmuhtadee@gmail.com</a></Link></h3>
      </motion.div>
   )
}

export default Contact