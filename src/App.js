import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import StatsSection from './components/sections/StatsSection';
import GraphSection from './components/sections/GraphSection';
import PricingSection from './components/sections/PricingSection';
import AboutSection from './components/sections/AboutSection';
import CTASection from './components/sections/CTASection';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <GraphSection />
        <PricingSection />
        <AboutSection />
        <CTASection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
