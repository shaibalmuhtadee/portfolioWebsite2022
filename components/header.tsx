import React, { useState, useEffect } from 'react'
import HomeButton from './homeButton'
import DarkmodeButton from './darkmodeButton'

const header = () => {
   return (
      <div className='py-8 h-fit'>
         <div className='flex items-center justify-between'>
            <HomeButton />
            <DarkmodeButton />
         </div>
      </div>
   )
}

export default header

