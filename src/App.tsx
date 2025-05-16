import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import BlogSection from './components/sections/BlogSection';
import ContactSection from './components/sections/ContactSection';
import Cursor from './components/ui/Cursor';

function App() {
  return (
    <>
      <Helmet>
        <title>Ankit Raj | Full Stack Developer</title>
        <meta name="description" content="Ankit Raj is a Full Stack Developer specializing in React, Node.js, and modern web technologies." />
        <meta name="keywords" content="Ankit Raj, Full Stack Developer, React, Node.js, Portfolio" />
      </Helmet>
      
      <Cursor />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <HeroSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default App;