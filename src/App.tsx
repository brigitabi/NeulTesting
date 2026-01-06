import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Planets from './components/Planets';
import News from './components/News';
import Support from './components/Support';
import Copyright from './components/Copyright';
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

      <Copyright />
    </div>
  );
};

export default App;
