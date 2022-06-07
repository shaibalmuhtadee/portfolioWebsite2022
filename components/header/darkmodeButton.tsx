import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const DarkmodeButton = () => {
   const [mounted, setMounted] = useState(false);

   useEffect(() =>{
      setMounted(true);
   },[])
   
   const {systemTheme, theme, setTheme} =  useTheme()
   const currentTheme = theme === "system" ? systemTheme : theme;

   if(!mounted) return null;

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
         <button className='flex items-center justify-center w-12 h-12 text-3xl transition-transform duration-150 rounded-md shadow hover:ring hover:scale-110 focus:ring ring-black dark:ring-light_primary dark:bg-dark_secondary bg-light_secondary text-dark_primary dark:text-light_primary' onClick={() => toggleDarkmode('light')}>
            <BsSunFill />
         </button>
      )
   } else {
      return (
         <button className='flex items-center justify-center w-12 h-12 text-3xl transition-transform duration-150 rounded-md shadow hover:ring hover:scale-110 focus:ring ring-black dark:ring-light_primary dark:bg-dark_secondary bg-light_secondary text-dark_primary dark:text-light_primary' onClick={() => toggleDarkmode('dark')}>
            <BsMoonFill />
         </button>
      )
   }
}

export default DarkmodeButton