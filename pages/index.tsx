import React from 'react'
import Header from '../components/header'
import Intro from '../components/intro'

const index = () => {
  return (
    <div className='grid w-full max-w-4xl grid-rows-2 m-auto md:max-w-3xl'>
      <Header />
      <Intro />
    </div>
  )
}

export default index
