import React from 'react'
import HeroSection from "../layout/HeroSection"
import FeaturedDeepDiscounts from '../layout/Featured'
import PopularReleases from '../layout/Popular'


function HomePage() {
  return (
    <div>
        <HeroSection />
        <FeaturedDeepDiscounts />
        <PopularReleases />
    </div>
  )
}

export default HomePage