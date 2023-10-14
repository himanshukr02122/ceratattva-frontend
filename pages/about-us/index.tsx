import CoreValues from '@/components/globals/sections/CoreValues'
import AboutUsBanner from '@/components/sections/aboutUs/AboutUsBanner'
import KnowUs from '@/components/sections/aboutUs/KnowUs'
import MyTeams from '@/components/sections/aboutUs/MyTeams'
import OurCeo from '@/components/sections/aboutUs/OurCeo'
import VisionAndMissions from '@/components/sections/aboutUs/VisionAndMissions'
import React from 'react'

const AboutUs = () => {
  return (
    <>
      <AboutUsBanner />
      <KnowUs />
      <VisionAndMissions />
      <CoreValues />
      <OurCeo />
      <MyTeams />
    </>
  )
}

export default AboutUs
