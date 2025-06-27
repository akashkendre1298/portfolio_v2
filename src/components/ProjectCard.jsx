export default function ProjectCard({ project }) {
  return (
    <article className="relative rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 group hover:scale-105 hover:shadow-3xl animate-fade-in-up before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-white/0 before:opacity-40 before:rounded-3xl before:pointer-events-none hover:animate-pulse-slow">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="h-44 w-full object-cover object-top rounded-t-3xl group-hover:scale-105 transition-transform duration-300 border-b border-white/10"
          onError={e => (e.target.style.display = 'none')}
        />
      )}
      <div className="p-7 flex flex-col flex-1 relative z-10">
        <h3 className="text-2xl font-bold mb-2 text-indigo-100 drop-shadow-lg group-hover:text-indigo-200 transition">{project.title}</h3>
        <p className="text-base text-indigo-50 flex-1 mb-3 opacity-90">{project.description}</p>
        <ul className="flex flex-wrap gap-2 my-3">
          {project.tech.map(t => (
            <li key={t} className="text-xs bg-black/30 text-indigo-100 px-3 py-1 rounded-full shadow font-semibold tracking-wide border border-white/10 backdrop-blur-sm hover:animate-pulse-slow">
              {t}
            </li>
          ))}
        </ul>
        {/* {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block bg-black/30 text-indigo-100 px-5 py-2 rounded-full shadow-lg border border-white/10 hover:bg-black/50 hover:text-indigo-200 transition-transform duration-300 font-semibold text-sm backdrop-blur-sm hover:animate-pulse-slow"
          >
            🔗 View Project
          </a>
        )} */}
      </div>
    </article>
  );
}

