import React, { useState, useEffect } from 'react'
import HomeButton from './homeButton'
import DarkmodeButton from './darkmodeButton'

const header = () => {
   return (
      <div className='sticky top-0 flex items-center justify-between pt-4 pb-2 bg-light_primary dark:bg-dark_primary'>
         <HomeButton />
         <div className='flex items-center justify-end'>
            <DarkmodeButton />

            <button className='pl-5 pr-3 text-xs font-medium uppercase'><span className='link-underline link-underline-dark'>About</span></button>
            <button className='px-3 text-xs font-medium uppercase'><span className='link-underline link-underline-dark'>Projects</span></button>
            <button className='px-3 text-xs font-medium uppercase'><span className='link-underline link-underline-dark'>Contact</span></button>

         </div>
      </div>
   )
}

export default header

