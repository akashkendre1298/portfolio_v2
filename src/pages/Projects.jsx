import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const types = Array.from(new Set(projects.map(p => p.type)));
  const categories = ['All', ...types];
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.type === active);

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-indigo-900/80 via-indigo-800/70 to-purple-900/80 text-white overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-indigo-900 to-transparent z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-extrabold mb-10 text-center tracking-tight drop-shadow-lg animate-fade-in-up">Projects</h2>
        <div className="flex justify-center mb-8 flex-wrap gap-3 animate-fade-in-up">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full border-2 font-semibold shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 ${active === cat ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white scale-105 border-transparent' : 'bg-white/10 text-indigo-100 border-indigo-400 hover:bg-indigo-500/30 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((p, i) => (
            <div key={p.title} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
      {/* Section bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-purple-900 to-transparent z-0" />
    </section>
  );
}
