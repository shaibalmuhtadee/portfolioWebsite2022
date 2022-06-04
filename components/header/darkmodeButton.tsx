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

   function toggleDarkmode(mode: string) {
      setTheme(mode);
      if (mode === 'dark') {
         document.documentElement.style.setProperty('--underline-color', '#F2F7F2');
         document.documentElement.style.setProperty('--underline-color-highlight', '#F2F230');
      } else {
         document.documentElement.style.setProperty('--underline-color', '#001429');
         document.documentElement.style.setProperty('--underline-color-highlight', '#3185FC');
      }
   }
   
   toggleDarkmode(currentTheme)

   if (currentTheme === "dark") {
      return (
         <button className='flex items-center justify-center w-12 h-12 text-3xl transition-transform duration-150 rounded-md shadow hover:outline hover:scale-110 focus:outline dark:bg-dark_secondary bg-light_secondary text-dark_primary dark:text-light_primary' onClick={() => toggleDarkmode('light')}>
            <BsSunFill />
         </button>
      )
   } else {
      return (
         <button className='flex items-center justify-center w-12 h-12 text-3xl transition-transform duration-150 rounded-md shadow hover:outline hover:scale-110 focus:outline dark:bg-dark_secondary bg-light_secondary text-dark_primary dark:text-light_primary' onClick={() => toggleDarkmode('dark')}>
            <BsMoonFill />
         </button>
      )
   }
}

export default darkmodeButton