import React from 'react'
import Header from '../components/header/header'
import Intro from '../components/intro/intro'
import Projects from '../components/intro/projects'
import Head from 'next/head'

const index = () => {
  return (
    <div className='max-w-4xl m-auto'>
      <Head>
        <title>Shaibal Muhtadee</title>
      </Head>
      <Header />
      <Intro />
      <Projects />
    </div>
  )
}

export default index