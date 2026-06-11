import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { siteConfig } from './config';
import ScrollManager from './components/ScrollManager';
import ParallaxField from './components/ParallaxField';
import Navbar from './components/Navbar';
import StickyContactBar from './components/StickyContactBar';
import Hero from './sections/Hero';
import ProofStrip from './sections/ProofStrip';
import ProductStory from './sections/ProductStory';
import DemoVideo from './sections/DemoVideo';
import Facilities from './sections/Facilities';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import FacilityDetail from './pages/FacilityDetail';
import ModulesPage from './pages/ModulesPage';

function Home() {
  return (
    <>
      <ParallaxField />
      <Navbar />
      <StickyContactBar />
      <main>
        <Hero />
        <ProofStrip />
        <ProductStory />
        <Facilities />
        <DemoVideo />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    document.title = siteConfig.siteTitle || 'Gain CRM';
    document.documentElement.lang = siteConfig.language || 'ru';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = siteConfig.siteDescription || '';
  }, []);

  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<ModulesPage />} />
        <Route path="/facility/:slug" element={<FacilityDetail />} />
      </Routes>
    </>
  );
}

export default App;
