import { useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ExpertiseSection from './components/ExpertiseSection.jsx';
import WorkSection from './components/WorkSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import SiteFooter from './components/SiteFooter.jsx';

function App() {
  useEffect(() => {
    const revealSections = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    revealSections.forEach((section) => observer.observe(section));

    const updateCursorPosition = (event) => {
      document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
      document.documentElement.style.setProperty('--my', `${event.clientY}px`);
    };

    const interactiveElements = document.querySelectorAll('a, button');
    const showHoverCursor = () => document.body.classList.add('cursor-hover');
    const hideHoverCursor = () => document.body.classList.remove('cursor-hover');

    window.addEventListener('pointermove', updateCursorPosition);
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', showHoverCursor);
      element.addEventListener('mouseleave', hideHoverCursor);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', updateCursorPosition);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', showHoverCursor);
        element.removeEventListener('mouseleave', hideHoverCursor);
      });
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <div className="cursor" aria-hidden="true" />
      <SiteHeader />
      <main id="home">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <WorkSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </>
  );
}

export default App;