import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Planets from './components/Planets';
import News from './components/News';
import Support from './components/Support';
import './styles.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      <main>
        <AboutUs />
        <Planets />
        <News />
        <Support />
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p className="mb-2">
            &copy; 2025 Cosmic Worlds. All rights reserved.
          </p>
          <p className="text-sm">
            Exploring the universe, one planet at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
