import { useState, useRef } from 'react';
import { FaCode, FaServer } from 'react-icons/fa';

const frontend = ['React.js','React Native','Electron js', 'React Ionic Framework', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive Web Design'];
const backend = ['Node.js', 'Express.js', 'MongoDB',  'REST APIs'];
const others  = ['Git', 'GitHub', 'Redux Toolkit','Android Studio','Postman'];

const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

const SkillsCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [offset,  setOffset]  = useState(0);
  const dragStart = useRef(null);

  const onDragStart = e => {
    try {
      dragStart.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
      document.addEventListener('mousemove', onDragMove);
      document.addEventListener('mouseup',   onDragEnd);
      document.addEventListener('touchmove', onDragMove);
      document.addEventListener('touchend',  onDragEnd);
    } catch (err) { console.error(err); }
  };

  const onDragMove = e => {
    try {
      if (dragStart.current == null) return;
      const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      setOffset(clamp(dragStart.current - clientX, 0, 140));
    } catch (err) { console.error(err); }
  };

  const onDragEnd = () => {
    try {
      dragStart.current = null;
      document.removeEventListener('mousemove', onDragMove);
      document.removeEventListener('mouseup',   onDragEnd);
      document.removeEventListener('touchmove', onDragMove);
      document.removeEventListener('touchend',  onDragEnd);
    } catch (err) { console.error(err); }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="relative w-[350px] h-[420px] [perspective:1200px]">
        <div className={`absolute w-full h-full transition-transform duration-700 [transform-style:preserve-3d] z-10 ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
          <div className="absolute w-full h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col items-center justify-between p-8 [backface-visibility:hidden]">
            <div className="flex flex-col items-center">
              <FaCode className="text-4xl text-indigo-300 mb-2" />
              <h3 className="text-2xl font-bold text-indigo-100 mb-4">Frontend</h3>
              <ul className="flex flex-wrap gap-2 justify-center">
                {frontend.map(s => (
                  <li key={s} className="px-3 py-1 bg-black/30 text-indigo-100 rounded-full border border-white/10 text-sm font-semibold shadow">{s}</li>
                ))}
              </ul>
            </div>
            <button onClick={() => setFlipped(true)} className="mt-6 px-5 py-2 bg-black/30 text-indigo-100 rounded-full border border-white/10 shadow">Backend Tech ↓</button>
          </div>

          <div className="absolute w-full h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col items-center justify-between p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex flex-col items-center">
              <FaServer className="text-4xl text-indigo-300 mb-2" />
              <h3 className="text-2xl font-bold text-indigo-100 mb-4">Backend</h3>
              <ul className="flex flex-wrap gap-2 justify-center">
                {backend.map(s => (
                  <li key={s} className="px-3 py-1 bg-black/30 text-indigo-100 rounded-full border border-white/10 text-sm font-semibold shadow">{s}</li>
                ))}
              </ul>
            </div>
            <button onClick={() => setFlipped(false)} className="mt-6 px-5 py-2 bg-black/30 text-indigo-100 rounded-full border border-white/10 shadow">↑ Frontend</button>
          </div>
        </div>

        {offset === 0 && (
          <div className="absolute left-[-45px] top-1/2 -translate-y-1/2 z-20">
            <div
              className="w-[2.9rem] h-32 bg-black/60 border border-indigo-400/30 rounded-l-2xl flex items-center justify-center shadow group cursor-pointer select-none"
              onMouseDown={onDragStart}
              onTouchStart={onDragStart}
            >
              <span className="-rotate-90 text-s text-indigo-200 font-bold tracking-widest">Pull me</span>

            </div>
          </div>
        )}

        <div
          className="absolute left-[-140px] top-[20%] -translate-y-1/2 z-0 flex items-center"
          style={{
            transform: `translateX(${140 - offset}px)`,
            opacity: offset / 140,
            transition: dragStart.current
              ? 'none'
              : 'transform 0.4s cubic-bezier(.4,2,.6,1), opacity 0.3s ease-in-out',
          }}
        >
          <div className="w-36 bg-black/80 backdrop-blur-xl rounded-2xl border border-indigo-400/30 shadow-lg p-4 flex flex-col items-center gap-2">
            <span className="mb-1 text-xs text-indigo-200 font-bold tracking-widest">Other Skills</span>
            {others.map(s => (
              <span key={s} className="px-3 py-1 bg-black/70 text-indigo-100 rounded-full border border-indigo-400/30 text-xs font-semibold shadow">{s}</span>
            ))}
            {offset > 0 && (
              <button onClick={() => setOffset(0)} className="mt-2 px-3 py-1 bg-black/40 text-indigo-200 rounded-full border border-indigo-400/30 text-xs font-semibold shadow">Close</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
