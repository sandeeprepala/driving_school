import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Courses from './components/Courses';
import VehiclesShowcase from './components/VehiclesShowcase';
import StudentAttendanceDemo from './components/StudentAttendanceDemo';
import AdminDashboardPreview from './components/AdminDashboardPreview';
import TechFeatures from './components/TechFeatures';
import Timeline from './components/Timeline';
import Feedback from './components/Feedback';
import AdminStudentList from './components/AdminStudentList';

import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhyChooseUs />
        <Courses />
        <VehiclesShowcase />
        <StudentAttendanceDemo />
        <AdminDashboardPreview />
        <TechFeatures />
        <Timeline />
        <Feedback />
        <AdminStudentList />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
