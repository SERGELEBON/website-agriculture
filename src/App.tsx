import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Products from './sections/Products';
import Sustainability from './sections/Sustainability';
import Contact from './sections/Contact';
import { initSecurity } from './lib/security';
import './App.css';

function App() {
  // Initialize security measures on mount
  useEffect(() => {
    initSecurity();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Sustainability />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
