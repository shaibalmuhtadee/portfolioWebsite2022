import React from 'react'
import HomeButton from './homeButton'
import DarkmodeButton from './darkmodeButton'

const header = () => {
   
   return (
      <div className='py-8 h-fit'>
         <div className='flex items-center justify-between'>
            <HomeButton color={'#F2F230'} width={'w-12'} />
            <DarkmodeButton />
         </div>
      </div>
   )
}

export default header

