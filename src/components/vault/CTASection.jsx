import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-950">
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-96 h-1 bg-gradient-to-r from-amber-500/60 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-1 bg-gradient-to-l from-emerald-500/60 to-transparent" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 border border-emerald-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">Unlock Your Financial Magic</span>
          <h2 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
            <span className="text-white block">Ready to Secure Your</span>
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent font-bold">Tomorrow?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-emerald-300 mb-3">
            Join <span className="font-semibold text-white">500+ families</span> already building generational wealth with The Finance Wizards.
          </p>
          <p className="text-stone-400 text-base mb-10">One of our Senior Brokers will walk you through your personalized blueprint — completely free.</p>

          <motion.a
            href={createPageUrl('QuoteFlow')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xl md:text-2xl px-10 py-5 rounded-sm shadow-lg transition-colors duration-300"
          >
            Get My Free Quote
            <ChevronRight className="w-6 h-6" />
          </motion.a>
          <p className="mt-5 text-emerald-600 text-sm">🔒 Free consultation · No pressure · No cost · Limited spots per week</p>
        </motion.div>
      </div>
    </section>
  );
}