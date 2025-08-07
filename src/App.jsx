import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MandalaHeader from './component/Navbar';
import MandalaHeroSection from './component/Hero';
import InnerCallingSection from './component/InnerCalling';
import MandalaMethod from './component/Intro';
import MeetClayBoykin from './component/MeetClay';
import FeelingLostSection from './component/Feeling';
import TestimonialsSection from './component/Testimonial';
import MandalaWithinBook from './component/Book';
import GoDeeperSection from './component/GoDeeper';
import MomentsOfConnection from './component/Gallery';
import MandalaFooter from './component/Footer';
import AllArticlePage from './component/Article/AllArticlePage';



function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/articles" element={<div>
              <MandalaHeader />
              <AllArticlePage />
              <MandalaFooter/>
            </div>} />
      </Routes>
    </Router>
  );
}

export default App;
