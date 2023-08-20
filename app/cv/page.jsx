import React from 'react'
import { Footer, TopMenu } from '../components/landingPage'
import HeroPartCv from '../components/cvPage/HeroPart'
import Features from '../components/cvPage/Features'
import SampleResume from '../components/cvPage/SampleResume'
import ConstructionProcesses from '../components/cvPage/ConstructionProcesses'

function page() {
  return (
    <div className="px-4">
        <TopMenu />
        <HeroPartCv/>
        <Features/>
        <SampleResume/>
        <ConstructionProcesses/>
        <Footer/>

    </div>
  )
}

export default page