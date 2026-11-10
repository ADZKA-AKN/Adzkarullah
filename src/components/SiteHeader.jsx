import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navigation = [
  ['About', 'about'],
  ['Expertise', 'expertise'],
  ['Work', 'work'],
  ['Contact', 'contact'],
];

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top">
      <a className="brand" href="#home">
        ADZKA<span>®</span>
      </a>
      <nav className={isMenuOpen ? 'nav open' : 'nav'}>
        {navigation.map(([label, sectionId]) => (
          <a
            href={`#${sectionId}`}
            key={sectionId}
            onClick={() => setIsMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact">
          Let’s talk <ArrowUpRight size={14} />
        </a>
      </nav>
      <button
        className="menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export default SiteHeader;