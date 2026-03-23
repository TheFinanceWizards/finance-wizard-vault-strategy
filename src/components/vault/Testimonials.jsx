import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Marcus T.",
    location: "Miami, FL",
    stars: 5,
    text: "I was skeptical at first, but after my free consultation I understood exactly how the Vault strategy works. Within 6 months I had my first rental property funded through my policy. Life-changing.",
    tag: "Real Estate Investor"
  },
  {
    name: "Priya K.",
    location: "Houston, TX",
    stars: 5,
    text: "As a business owner, I needed my money to work harder. The Finance Wizards showed me how to legally move money tax-free and leverage it into real estate. I wish I had found them sooner.",
    tag: "Business Owner"
  },
  {
    name: "James R.",
    location: "Atlanta, GA",
    stars: 5,
    text: "The consultation was completely free and zero pressure. They walked me through everything clearly. Already have $80K in cash value growing tax-free while my rental pays itself.",
    tag: "New Investor"
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-stone-50 border-b border-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-emerald-900">
            Real Clients. Real Results.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-stone-100 rounded-sm shadow-md p-7 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-stone-600 leading-relaxed text-sm flex-1">"{t.text}"</p>

              <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{t.name}</p>
                  <p className="text-stone-400 text-xs">{t.location}</p>
                </div>
                <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2.5 py-1 rounded-full border border-emerald-100">
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}