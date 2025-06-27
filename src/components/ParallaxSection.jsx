export default function ParallaxSection({ bgImage, children, height = 'min-h-screen' }) {
  return (
    <section
      className={`${height} bg-fixed bg-center bg-cover flex items-center justify-center relative`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
      <div className="relative w-full h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}
