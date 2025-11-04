import { motion } from 'framer-motion';
import { Code, Server, Cloud, Boxes, Atom, Box } from 'lucide-react';

const skills = [
  { name: 'React', icon: Atom },
  { name: 'Redux-Saga', icon: Boxes },
  { name: 'TypeScript', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'MongoDB', icon: DatabaseIcon },
  { name: 'Docker', icon: Box },
  { name: 'AWS', icon: Cloud },
];

function DatabaseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20} className={props.className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 5v6c0 1.66-4.03 3-9 3s-9-1.34-9-3V5" />
      <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
    </svg>
  );
}

export default function SceneAbout() {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-24 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          The Path
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-slate-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Ronin walking the bridge between design and engineering. I craft immersive interfaces and performant systems with a calm, disciplined approach.
        </motion.p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={name}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 shadow-sm"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/20 to-amber-400/20 blur-2xl" />
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-cyan-200">
                  <Icon size={18} />
                </div>
                <span className="text-sm font-medium text-slate-200">{name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
