import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyUs } from "./components/WhyUs";
import { Expertise } from "./components/Capabilities";
import { Customization } from "./components/Customization";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

import { AboutPage } from "./pages/AboutPage";
import { ApplicationsPage } from "./pages/ApplicationsPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ContactPage } from "./pages/ContactPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />

      {/* Header is fixed, so content starts naturally below */}
      <main className="flex-grow">
        <ScrollToTop />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <WhyUs />
                <Expertise />
                <Customization />
                <FinalCTA />
              </>
            }
          />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
