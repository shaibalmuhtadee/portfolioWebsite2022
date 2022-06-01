import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
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
         <BsFillSunFill className='flex items-center justify-center w-12 h-12 p-2 text-2xl cursor-pointer text-light_primary bg-dark_secondary rounded-xl' role="button" onClick={() => setTheme('light')}/>
      )
   } else {
      return (
         <BsFillMoonFill className='flex items-center justify-center w-12 h-12 p-2 text-2xl cursor-pointer drop-shadow-2xl text-dark_primary bg-light_secondary rounded-xl' role="button" onClick={() => setTheme('dark')} />
      )
   }
}

export default darkmodeButton