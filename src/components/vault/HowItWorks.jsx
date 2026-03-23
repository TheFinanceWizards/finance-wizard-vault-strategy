import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, UserCheck, Zap } from 'lucide-react';
import { createPageUrl } from '@/utils';

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Get Your Free Quote",
    description: "Answer a few quick questions about your goals and financial situation. Takes about 3 minutes."
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Meet Your Senior Broker",
    description: "A licensed expert from The Finance Wizards will walk you through your personalized Bank Vault blueprint — completely free, zero pressure."
  },
  {
    icon: Zap,
    number: "03",
    title: "Start Building Wealth",
    description: "Your policy activates and your money begins compounding tax-free. Most clients leverage their first real estate deal within 12–36 months."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-emerald-950">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">OUR PROCESS</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white">
            Three Steps to Financial Freedom
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-white/5 border border-white/10 rounded-sm p-8 text-center hover:bg-white/10 transition-colors"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">{step.number}</span>
              </div>
              <step.icon className="w-10 h-10 text-emerald-400 mx-auto mb-5 mt-3" />
              <h3 className="font-serif text-xl text-white mb-3">{step.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={createPageUrl('QuoteFlow')}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-8 py-4 rounded-sm text-base transition-colors shadow-lg"
          >
            Start Step 1 — It's Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}