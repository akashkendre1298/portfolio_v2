import SkillsCard from '../components/SkillsCard';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-900/80 via-indigo-800/70 to-purple-900/80 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-100 drop-shadow-lg animate-fade-in-up tracking-tight">Skills</h2>
      <SkillsCard />
    </section>
  );
}
