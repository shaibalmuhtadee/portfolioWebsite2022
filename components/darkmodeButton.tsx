import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const darkmodeButton = () => {
   const [mounted, setMounted] = useState(false);

   useEffect(() =>{
      setMounted(true);
   },[])
   
   if(!mounted) return null;
   
   const {systemTheme, theme, setTheme} =  useTheme()
   const currentTheme = theme === "system" ? systemTheme : theme;

   if (currentTheme === "dark") {
      return (
         <button className='flex items-center justify-center w-12 h-12 text-2xl transition duration-150 ease-in-out transform rounded-md shadow cursor-pointer hover:translate-y-px bg-opacity-80 hover:bg-opacity-100 hover:shadow-md bg-dark_secondary' onClick={() => setTheme('light')}>
            <BsSunFill />
         </button>
      )
   } else {
      return (
         <button className='flex items-center justify-center w-12 h-12 text-2xl transition duration-150 ease-in-out transform bg-opacity-100 rounded-md shadow cursor-pointer hover:translate-y-px hover:bg-opacity-90 hover:shadow-md bg-light_secondary' onClick={() => setTheme('dark')}>
            <BsMoonFill />
         </button>
      )
   }
}

export default darkmodeButton