import React, { useState, useEffect } from 'react'
import HomeButton from './homeButton'
import DarkmodeButton from './darkmodeButton'

function useScrollDirection() {
   const [scrollDirection, setScrollDirection] = useState(null);
 
   useEffect(() => {
     let lastScrollY = window.pageYOffset;
 
     const updateScrollDirection = () => {
       const scrollY = window.pageYOffset;
       const direction = scrollY > lastScrollY ? "down" : "up";
       if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
         setScrollDirection(direction);
       }
       lastScrollY = scrollY > 0 ? scrollY : 0;
     };
     window.addEventListener("scroll", updateScrollDirection); // add event listener
     return () => {
       window.removeEventListener("scroll", updateScrollDirection); // clean up
     }
   }, [scrollDirection]);
 
   return scrollDirection;
};

const header = () => {
   const scrollDirection = useScrollDirection();
   return (
      <div className={`sticky ${ scrollDirection === "down" ? "-top-40" : "top-0"} transition-all duration-500 flex items-center justify-between pt-12 pb-6 bg-light_primary/80 dark:bg-dark_primary/80 backdrop-blur-sm`}>
         <HomeButton />
         <div className='flex items-center justify-end'>
            <DarkmodeButton />

            <button className='pl-5 pr-3 text-lg font-medium uppercase'><span className='link-underline link-underline-dark'>About</span></button>
            <button className='px-3 text-lg font-medium uppercase'><span className='link-underline link-underline-dark'>Projects</span></button>
            <button className='px-3 text-lg font-medium uppercase'><span className='link-underline link-underline-dark'>Contact</span></button>

         </div>
      </div>
   )
}

export default header

