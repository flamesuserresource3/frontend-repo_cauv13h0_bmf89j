import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';

export default function SceneHome({ onScrollTo }) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = muted;
    a.loop = true;
    a.volume = 0.6;
    const tryPlay = async () => {
      try {
        await a.play();
        setReady(true);
      } catch (_) {
        setReady(false);
      }
    };
    tryPlay();
  }, [muted]);

  const toggleMute = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (muted) {
      setMuted(false);
      try {
        await a.play();
      } catch (_) {}
    } else {
      setMuted(true);
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignettes on top of Spline (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-3xl px-6 text-center"
        >
          <motion.h1
            className="font-semibold tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Akash Bhuker — <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">The Ronin Developer</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-slate-200/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Frontend mastery through discipline.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <button
              onClick={() => onScrollTo('projects')}
              className="rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur transition hover:bg-white/20"
            >
              View Projects
            </button>
            <button
              onClick={() => onScrollTo('contact')}
              className="rounded-full border border-white/20 px-6 py-3 text-white/90 backdrop-blur transition hover:bg-white/15"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Audio Controls */}
        <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
          <button
            onClick={toggleMute}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            title={muted ? 'Unmute lofi' : 'Mute lofi'}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <span className="hidden text-sm text-white/80 sm:block">
            {ready ? (muted ? 'Lofi muted' : 'Lofi playing') : 'Click to enable audio'}
          </span>
        </div>

        <motion.button
          onClick={() => onScrollTo('about')}
          className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white/90 backdrop-blur transition hover:bg-white/20"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Explore
          <ChevronDown size={16} />
        </motion.button>
      </div>

      {/* Hidden but live audio element */}
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_5e9b5fbd3f.mp3?filename=lofi-study-112191.mp3"
      />
    </section>
  );
}
