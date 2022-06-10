import React from 'react'
import Header from '../components/header/header'
import Intro from '../components/intro/intro'
import Projects from '../components/projects/projects'
import Head from 'next/head'
import Footer from '../components/footer/footer'
import Skills from '../components/skills/skills'

const index = () => {
  return (
    <div className='max-w-4xl m-auto'>
      <Head>
        <title>Shaibal Muhtadee</title>
      </Head>
      <Header />
      <Intro />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default index