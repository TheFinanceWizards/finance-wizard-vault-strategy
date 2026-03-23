import React from 'react';
import { motion } from 'framer-motion';
import { createPageUrl } from '@/utils';
import { ChevronRight, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(5, 20, 10, 0.78), rgba(5, 20, 10, 0.70)), url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm font-semibold px-4 py-2 rounded-full mb-8"
          >
            THE BANK VAULT STRATEGY — <span className="text-amber-400">GET STARTED FREE</span>
          </motion.div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-lg mb-6 leading-tight">
            Become Your Own Bank.{' '}
            <span className="text-emerald-400">Fund Real Estate.</span>{' '}
            Build Generational Wealth.
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-stone-200 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            The Bank Vault Strategy uses a specially engineered Whole Life policy as your personal bank — 
            growing your money tax-free while you borrow against it to buy real estate, 
            turning every <span className="font-bold text-emerald-400">$1 into $5</span> of working capital.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <a
              href={createPageUrl('QuoteFlow')}
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-10 py-4 rounded-sm text-lg transition-colors duration-200 shadow-xl"
            >
              Get My Free Quote
              <ChevronRight className="w-5 h-5" />
            </a>
            <p className="text-stone-400 text-sm">🔒 Free consultation · No pressure · Takes 3 minutes</p>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-3 mt-2 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5"
            >
              <div className="flex -space-x-2">
                {['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop'].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-emerald-900 object-cover" />
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-stone-300 text-xs font-medium">500+ families protected</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}