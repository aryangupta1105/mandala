import React from 'react'
import MandalaHeader from './component/Navbar'
import MandalaHeroSection from './component/Hero'
import InnerCallingSection from './component/InnerCalling'
import MandalaMethod from './component/Intro'
import MeetClayBoykin from './component/MeetClay'
import FeelingLostSection from './component/Feeling'
import TestimonialsSection from './component/Testimonial'
import MandalaWithinBook from './component/Book'
import GoDeeperSection from './component/GoDeeper'
import MomentsOfConnection from './component/Gallery'
import MandalaFooter from './component/Footer'

const App = () => {
  return (
    <div>
      <MandalaHeader />
      <MandalaHeroSection />
      <InnerCallingSection />
      <MandalaMethod />
      <MeetClayBoykin />
      <FeelingLostSection />
      <TestimonialsSection />
      <MandalaWithinBook />
      <GoDeeperSection />
      <MomentsOfConnection />
      <MandalaFooter />
    </div>
  )
}

export default App
