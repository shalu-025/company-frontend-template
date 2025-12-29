import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import PhilosophySection from './components/PhilosophySection'
import GlobalReachSection from './components/GlobalReachSection'

// Import Pages
import Platform from './pages/Platform'
import Solutions from './pages/Solutions'
import DataEngineering from './pages/DataEngineering'
import AISolutions from './pages/AISolutions'
import CloudArchitecture from './pages/CloudArchitecture'
import ITSolutions from './pages/ITSolutions'
import Automation from './pages/Automation'
import EnterpriseSecurity from './pages/EnterpriseSecurity'
import Company from './pages/Company'
import WhoWeAre from './pages/WhoWeAre'
import OurProducts from './pages/OurProducts'
import Team from './pages/Team'
import Careers from './pages/Careers'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Events from './pages/Events'

function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PhilosophySection />
      <GlobalReachSection />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/data-engineering" element={<DataEngineering />} />
          <Route path="/solutions/ai-solutions" element={<AISolutions />} />
          <Route path="/solutions/cloud-architecture" element={<CloudArchitecture />} />
          <Route path="/solutions/it-solutions" element={<ITSolutions />} />
          <Route path="/solutions/automation" element={<Automation />} />
          <Route path="/solutions/enterprise-security" element={<EnterpriseSecurity />} />
          <Route path="/company" element={<Company />} />
          <Route path="/company/who-we-are" element={<WhoWeAre />} />
          <Route path="/company/products" element={<OurProducts />} />
          <Route path="/company/team" element={<Team />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
