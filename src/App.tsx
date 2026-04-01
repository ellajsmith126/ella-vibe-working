import { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Toolkit } from './components/Toolkit';
import { Impact } from './components/Impact';
import { Systems } from './components/Systems';
import { PersonalLife } from './components/PersonalLife';
import { Demo } from './components/Demo';

const sectionIds = ['stack', 'impact', 'systems', 'life', 'demo'];

export default function App() {
  const [activeSection, setActiveSection] = useState('stack');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) {
          current = id;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Nav activeSection={activeSection} />
      <Hero />
      <Toolkit />
      <Impact />
      <Systems />
      <PersonalLife />
      <Demo />
    </>
  );
}
