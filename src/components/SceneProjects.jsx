import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Mentor-Mentee Platform',
    stack: 'React • Node • MongoDB',
    description:
      'A platform that matches mentors with mentees, featuring real-time chat, calendars, and profile matching.',
  },
  {
    title: 'Kafka Integration Demo',
    stack: 'TypeScript • Kafka',
    description:
      'Event-driven demo showcasing producers/consumers, backpressure handling, and observability.',
  },
  {
    title: 'React Hooks Playground',
    stack: 'React',
    description:
      'Interactive gallery of advanced hooks patterns with live code examples and sandboxes.',
  },
  {
    title: 'Nginx + AWS Deployment Setup',
    stack: 'Nginx • AWS',
    description:
      'Production-hardened setup scripts for blue/green deployments, SSL, and CI/CD.',
  },
];

export default function SceneProjects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative w-full bg-slate-980 py-24 text-slate-100" style={{ backgroundColor: '#0b1220' }}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          The Forge
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-slate-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Projects shaped under neon and steel. Hover to feel the heat; click to learn more.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              onClick={() => setActive(p)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-sm transition hover:bg-white/[0.07]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 transition group-hover:opacity-100">
                <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400/15 via-fuchsia-400/15 to-amber-400/15 blur-2xl" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{p.stack}</p>
                </div>
                <div className="rounded-full bg-white/10 p-2 text-white/80 transition group-hover:bg-white/20">
                  <ExternalLink size={16} />
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300/90">
                {p.description}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-6 text-slate-100 shadow-xl"
              initial={{ scale: 0.95, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 8 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            >
              <h3 className="text-xl font-semibold text-white">{active.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{active.stack}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300/95">{active.description}</p>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full border border-white/20 px-4 py-2 text-white/90 hover:bg-white/10"
                >
                  Close
                </button>
                <a
                  href="#"
                  className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20"
                  onClick={(e) => e.preventDefault()}
                >
                  Visit
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
