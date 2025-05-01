import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';

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
    <HelmetProvider>
      <Router>
        <div className="App">
          <Helmet>
            <title>Econometrix - Financial Data Analytics Platform</title>
            <meta name="description" content="Advanced financial analytics and market insights platform featuring real-time data visualization, market trends, and comprehensive economic analysis tools." />
            <meta name="keywords" content="financial analytics, market data, economic analysis, trading insights, financial dashboard" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Econometrix - Financial Data Analytics Platform" />
            <meta property="og:description" content="Advanced financial analytics and market insights platform featuring real-time data visualization, market trends, and comprehensive economic analysis tools." />
            <meta property="og:image" content="%PUBLIC_URL%/og-image.png" />
            
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content="Econometrix - Financial Data Analytics Platform" />
            <meta property="twitter:description" content="Advanced financial analytics and market insights platform featuring real-time data visualization, market trends, and comprehensive economic analysis tools." />
            <meta property="twitter:image" content="%PUBLIC_URL%/og-image.png" />
          </Helmet>

          <Navbar />
          <main>
            <HeroSection />
            <FeaturesSection />
            <StatsSection />
            <GraphSection />
            <PricingSection />
            <AboutSection />
            <CTASection />
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;