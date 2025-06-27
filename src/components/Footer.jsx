import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 py-8 text-gray-200 text-center text-sm relative overflow-hidden">
      <div className="flex justify-center gap-6 mb-4" onClick={e => e.stopPropagation()}>
        <a
          href="https://github.com/akashkendre1298"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition text-2xl cursor-pointer"
          tabIndex={0}
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/akashkendre/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition text-2xl cursor-pointer"
          tabIndex={0}
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="mb-1">
        <span className="font-semibold text-indigo-200">
          © {new Date().getFullYear()} Akash Kendre
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}
