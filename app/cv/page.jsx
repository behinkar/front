import React from 'react'
import { Footer, TopMenu } from '../components/landingPage'
import HeroPartCv from '../components/cvPage/HeroPart'

function page() {
  return (
    <div className="px-4">
        <TopMenu />
        <HeroPartCv/>
        <Footer/>

    </div>
  )
}

export default page