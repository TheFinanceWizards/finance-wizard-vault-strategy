import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield } from 'lucide-react';

export default function BarbellStrategy() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-emerald-900 to-emerald-950">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
            The Magic Safety Net
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Offense */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-sm border border-white/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Rocket className="w-7 h-7 text-amber-300" />
              </div>
              <h3 className="font-serif text-2xl text-white">
                Offense: Smart Leverage
              </h3>
            </div>
            <p className="text-stone-300 leading-relaxed text-lg">
              Use strategic leverage to grow your portfolio quickly — letting the bank's money 
              and your tenants accelerate your wealth building.
            </p>
          </motion.div>

          {/* Defense */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-sm border border-white/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Shield className="w-7 h-7 text-emerald-300" />
              </div>
              <h3 className="font-serif text-2xl text-white">
                Defense: Safety Net
              </h3>
            </div>
            <p className="text-stone-300 leading-relaxed text-lg">
              Maintain 3–6 months of cash reserves so a repair or vacancy{' '}
              <span className="font-semibold text-white">never stresses you out</span>. 
              We don't gamble — we engineer.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-stone-300 text-lg md:text-xl mt-16 max-w-3xl mx-auto"
        >
          The bottom line: Instead of working for the bank, the bank and your tenants are now working for{' '}
          <span className="font-semibold text-amber-300">you</span>.
        </motion.p>
      </div>
    </section>
  );
}