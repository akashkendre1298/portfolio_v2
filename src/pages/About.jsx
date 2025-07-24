import image from "../Assets/image.jpeg";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-indigo-900/80 via-indigo-800/70 to-purple-900/80">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8 flex flex-col md:flex-row items-center gap-8 w-full animate-fade-in-up">
          <img src={image} alt="Akash Kendre" className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-white/10 mb-6 md:mb-0" />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-indigo-100 drop-shadow">About Me</h2>
            <p className="leading-relaxed text-indigo-50 opacity-90 mb-4">
              Hi! I'm Akash Kendre, a passionate full-stack developer with 3+ years of experience building beautiful, performant, and meaningful digital experiences. My journey began with curiosity for how things work, and has grown into a career focused on creating impactful products for web, mobile, and desktop.
            </p>
            <p className="leading-relaxed text-indigo-50 opacity-90 mb-4">
              I thrive on solving complex problems, collaborating with creative teams, and learning new technologies. My recent work includes the <strong>SmartDoc VS Code extension</strong>, and I enjoy contributing to open source and mentoring new developers.
            </p>
            <p className="leading-relaxed text-indigo-50 opacity-90">
              When I'm not coding, you'll find me exploring new tech trends, sketching UI ideas, or hiking in nature. Let's connect and create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
