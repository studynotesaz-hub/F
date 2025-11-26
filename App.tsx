import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ExperienceSection from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;