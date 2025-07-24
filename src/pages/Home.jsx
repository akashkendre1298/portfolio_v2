import bgImage from '../Assets/bg-image.jpg';
import ParallaxSection from '../components/ParallaxSection';

export default function Home() {
  return (
    <ParallaxSection bgImage={bgImage}>
      <div id="home" className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-white">
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-0" />
        <div className="relative z-10 flex flex-col items-center animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight">
            Hi, I'm <span className="text-indigo-400">Akash</span>
          </h2>
          <p className="text-xl sm:text-2xl max-w-2xl mx-auto mb-8 font-medium text-indigo-100 drop-shadow">
            Full‑Stack Developer with 3+ years of experience in building performant web, mobile, and desktop apps with <span className="text-indigo-300 font-semibold">React</span>, <span className="text-indigo-300 font-semibold">React Native</span>, and <span className="text-indigo-300 font-semibold">Electron</span>.
          </p>
          <a href="#projects" className="mt-4 inline-block bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:from-indigo-500 hover:to-purple-600 transition-transform duration-300 font-semibold text-lg">
            🚀 View My Work
          </a>
        </div>
        
      </div>
    </ParallaxSection>
  );
}
