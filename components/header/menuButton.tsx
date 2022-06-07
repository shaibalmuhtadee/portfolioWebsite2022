import React from 'react'
import { HiMenu } from 'react-icons/hi'

const MenuButton = () => {
  return (
    <div className='flex items-center justify-center w-12 h-12 text-4xl transition-transform duration-150 rounded-md shadow hover:ring hover:scale-110 focus:ring ring-black dark:ring-light_primary dark:bg-dark_secondary bg-light_secondary text-dark_primary dark:text-light_primary'>
      <HiMenu /> 
    </div>
  )
}

export default MenuButton