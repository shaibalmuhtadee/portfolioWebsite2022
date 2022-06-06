import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const HomeButton = () => {

   const [mounted, setMounted] = useState(false);

   useEffect(() =>{
      setMounted(true);
   },[])

   const {systemTheme, theme } =  useTheme();
   const currentTheme = theme === "system" ? systemTheme : theme;

   if(!mounted) return null;
   
   var color = '#001429'
   var width = 'w-16'

   if (currentTheme === "dark") {
      color = '#F2F7F2'
   }
   
   return (
      <Link href="/">
         <a className='transition-transform duration-300 ease-in-out hover:scale-110'>
            <svg className={width} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.12 241.51">
               <g>
                  <path d="M856,541.86c0-17.66.15-35.32-.09-53-.08-5.66,1.9-9.25,6.86-12.08q46.59-26.58,93-53.56c4.37-2.54,8.16-2.63,12.57-.06q47,27.4,94.13,54.52a10.17,10.17,0,0,1,5.6,9.72q-.13,54.48,0,109c0,4.67-1.71,7.84-5.77,10.16q-47.4,27.19-94.68,54.56c-3.88,2.25-7.3,2.31-11.21,0q-47.45-27.58-95-55c-3.9-2.25-5.44-5.38-5.41-9.84.13-18.16,0-36.31,0-54.47Zm195.1.55h0c0-15.66-.13-31.33.09-47,0-3.62-1-5.6-4.21-7.42q-40.95-23.4-81.68-47.18c-2.5-1.45-4.25-1.34-6.69.07q-40.58,23.55-81.31,46.81c-3.29,1.87-4.64,3.73-4.62,7.66q.27,46.49,0,93c0,3.83,1.09,5.88,4.44,7.79q40.74,23.25,81.23,47c2.7,1.57,4.53,1.45,7.13-.07q41-23.81,82.18-47.3c2.72-1.55,3.52-3.3,3.49-6.31C1051.05,573.73,1051.13,558.07,1051.13,542.41Z" transform="translate(-855.94 -421.29)" fill={color}/>
                  <path d="M961.51,602.12c-15-.07-29-3.54-41.47-12.13-3.34-2.3-3.32-2.35-1.43-5.74,2.19-3.92,4.49-7.79,6.55-11.78,1.23-2.39,2.22-3.06,4.78-1.24,10.27,7.3,21.92,10.11,34.42,9.64a30.09,30.09,0,0,0,12.08-2.74c5.09-2.44,8.09-6.23,7.78-12.18-.27-5.25-3-8.75-8.88-10.72-6.49-2.18-13.34-2.74-20-4.06a115.48,115.48,0,0,1-11.6-2.86c-17-5.26-22.22-17.76-21.22-33.48,1.39-21.92,16.23-30.11,31.82-32.7,16.42-2.72,31.74.72,46,9.1,3.8,2.23,3.79,2.26,1.73,6.4s-4.12,8-6,12.07c-1,2.18-1.85,2.57-4,1.18-7.54-4.81-15.72-7.92-24.78-8.21a37.46,37.46,0,0,0-13.8,1.69c-5.73,2-8.68,5.67-8.89,10.8-.23,5.64,2.18,9.42,8,12,6,2.65,12.5,3.34,18.8,4.78,5.68,1.3,11.36,2.54,16.74,4.83,11.35,4.82,17.56,13.3,18.07,25.73a47.33,47.33,0,0,1-.51,12c-2.43,11.53-9.42,19.23-20.2,23.58A60.16,60.16,0,0,1,961.51,602.12Z" transform="translate(-855.94 -421.29)" fill={color}/>
               </g>
            </svg>
         </a>
      </Link>
   );
}

export default HomeButton