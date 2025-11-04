import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SceneContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // For now, just open user's email client as fallback
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.open(`mailto:akash@example.com?subject=Portfolio%20Contact&body=${body}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-24 text-slate-100">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          The Shrine
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-slate-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Leave a message. The paper bird will carry it under the moonlight.
        </motion.p>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300">Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300">Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none"
                placeholder="Tell me about your project"
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">
                {sent ? 'Thanks! If your email app opened, your message is ready to send.' : 'EmailJS integration can be added later.'}
              </p>
              <button
                type="submit"
                className="rounded-full bg-white/10 px-5 py-2.5 text-white transition hover:bg-white/20"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
