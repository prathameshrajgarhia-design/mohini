
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { Expertise } from './components/Expertise';
import { Customization } from './components/Customization';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

// Page Components
import { AboutPage } from './pages/AboutPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'about': return <AboutPage />;
      case 'applications': return <ApplicationsPage />;
      case 'products': return <ProductsPage />;
      case 'contact': return <ContactPage />;
      default: return (
        <>
          <Hero />
          <About />
          <WhyUs />
          <Expertise />
          <Customization />
          <FinalCTA />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
