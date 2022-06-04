import React, { useState, useEffect } from 'react'
import HomeButton from './homeButton'
import DarkmodeButton from './darkmodeButton'
import MenuButton from './menuButton'
import CloseButton from './closeButton'

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

   let [open,setOpen] = useState(false)
   
   return (
      <nav className={`sticky ${ scrollDirection === "down" ? "-top-40" : "top-0"} w-full transition-top duration-500 ease-in-out bg-light_primary dark:bg-dark_primary md:bg-opacity-80 md:backdrop-blur-sm backdrop-blur-none`}>
         <div className='items-center justify-between py-4 md:flex md:px-10 px-7'>

            <HomeButton/>

            <div onClick={() => setOpen(!open)} className='absolute text-3xl cursor-pointer right-8 top-6 md:hidden'>
               {open ? <CloseButton /> : <MenuButton />}
            </div>

            <ul className={`md:flex md:items-center md:pb-0 bg-light_primary dark:bg-dark_primary pb-12 absolute md:static transition-top duration-500 ease-in md:z-auto z-[-1] left-0 w-full md:w-auto  pl-7 ${open ? 'top-20 ':'top-[-170px] transition-opacity duration-700 opacity-0 md:opacity-100'}`}>
               <li className='w-12 text-xl duration-150 md:w-auto hover:scale-110 md:pl-8 md:py-0 pt-7'><a href='/' title='About' className='hover:font-semibold'><span className='link-underline link-underline-dark'>About</span></a></li>
               <li className='w-12 text-xl duration-150 md:w-auto hover:scale-110 md:pl-8 md:py-0 pt-7'><a href='/' title='Projects' className='hover:font-semibold'><span className='link-underline link-underline-dark'>Projects</span></a></li>
               <li className='w-12 text-xl duration-150 md:w-auto hover:scale-110 md:pl-8 md:py-0 pt-7'><a href='/' title='Contact' className='hover:font-semibold'><span className='link-underline link-underline-dark'>Contact</span></a></li>
               <li className='md:px-5 pt-7 md:py-0'><DarkmodeButton /></li>
            </ul>
            
         </div>
      </nav>
   )
}

export default header