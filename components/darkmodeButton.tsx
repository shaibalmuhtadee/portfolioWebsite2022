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
   
   function toggleDarkmode(mode) {
      setTheme(mode);
      if (mode === 'dark') {
         document.documentElement.style.setProperty('--underline-color', '#F2F7F2');
      } else {
         document.documentElement.style.setProperty('--underline-color', '#001429');
      }
   }
   
   if (currentTheme === "dark") {
      return (
         <button className='flex items-center justify-center text-xl transition duration-150 ease-in-out transform rounded-md shadow cursor-pointer bg-opacity-90 w-9 h-9 hover:translate-y-px hover:bg-opacity-100 hover:shadow-md bg-dark_secondary'onClick={() => toggleDarkmode('light')}>
            <BsSunFill />
         </button>
      )
   } else {
      return (
         <button className='flex items-center justify-center text-xl transition duration-150 ease-in-out transform bg-opacity-100 rounded-md shadow cursor-pointer w-9 h-9 hover:translate-y-px hover:bg-opacity-90 hover:shadow-md bg-light_secondary' onClick={() => toggleDarkmode('dark')}>
            <BsMoonFill />
         </button>
      )
   }
}

export default darkmodeButton