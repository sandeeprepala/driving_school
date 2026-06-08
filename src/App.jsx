import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Courses from './components/Courses';
import Timeline from './components/Timeline';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-yellow selection:text-brand-black">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhyChooseUs />
        <Courses />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
