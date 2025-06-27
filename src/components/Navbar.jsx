import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = () => setOpen(!open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-20 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-lg backdrop-blur border-b border-indigo-100' : 'bg-transparent backdrop-blur-none'}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-tight text-indigo-600 drop-shadow"><a href="#home">Akash Kendre</a></h1>
        <button className="sm:hidden text-indigo-700 text-2xl p-2 rounded hover:bg-indigo-100 transition" onClick={toggle} aria-label="Toggle menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`sm:flex gap-8 font-semibold text-lg items-center ${open ? 'block absolute top-16 left-0 w-full bg-white/95 shadow-lg py-6 animate-fade-in-down' : 'hidden sm:flex'}`}>
          {links.map(l => (
            <li key={l.href} className="my-2 sm:my-0">
              <a
                href={l.href}
                className="relative px-2 py-1 text-indigo-700 hover:text-indigo-900 transition group"
                onClick={() => setOpen(false)}
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
