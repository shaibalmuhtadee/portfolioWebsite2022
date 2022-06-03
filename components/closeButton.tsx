import React from 'react'
import { HiX } from 'react-icons/hi'

const closeButton = () => {
   return (
      <div className='flex items-center justify-center w-12 h-12 text-4xl transition duration-150 ease-in-out transform rounded-md shadow hover:translate-y-px focus:outline dark:bg-dark_secondary bg-light_secondary text-dark_primary dark:text-light_primary'>
         <HiX /> 
      </div>
   )
}

export default closeButton