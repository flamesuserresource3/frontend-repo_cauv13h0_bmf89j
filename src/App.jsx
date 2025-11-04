import { useRef } from 'react';
import SceneHome from './components/SceneHome';
import SceneAbout from './components/SceneAbout';
import SceneProjects from './components/SceneProjects';
import SceneContact from './components/SceneContact';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const onScrollTo = (id) => {
    const targetMap = {
      about: aboutRef.current,
      projects: projectsRef.current,
      contact: contactRef.current,
    };
    const el = targetMap[id];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Hero with Spline background and audio */}
      <SceneHome onScrollTo={onScrollTo} />

      {/* About */}
      <div ref={aboutRef}>
        <SceneAbout />
      </div>

      {/* Projects */}
      <div ref={projectsRef}>
        <SceneProjects />
      </div>

      {/* Contact */}
      <div ref={contactRef}>
        <SceneContact />
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} Akash Bhuker — Built with React, Framer Motion, and Spline.
        </p>
      </footer>
    </div>
  );
}

export default App;
