import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Always enforce dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#050505';

    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 relative overflow-hidden text-neon-text">

      {/* Background Grid Pattern (forced dark) */}
      <div className="fixed inset-0 pointer-events-none z-[-2] transition-colors duration-300 grid-bg-dark"></div>

      {/* Radial Fade Overlay (forced dark) */}
      <div className="fixed inset-0 pointer-events-none z-[-1]"
        style={{
          background: `radial-gradient(circle at center, transparent, #050505 90%)`
        }}
      ></div>

      {/* Pass simplified props (or none if not needed anymore) to Header */}
      <Header />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
