import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Multiplier() {
  const steps = [
    { label: "Put $1 in Vault", highlight: "$1" },
    { label: "Borrow $1 Back", highlight: "$1" },
    { label: "Bank Lends $4", highlight: "$4" },
    { label: "$5 Assets Work", highlight: "$5" }
  ];

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
          <h2 className="font-serif text-4xl md:text-6xl mb-6 text-white">
            The{' '}
            <span className="text-emerald-300 font-bold">$1 into $5</span>{' '}
            Multiplier
          </h2>
          <p className="text-lg md:text-xl text-emerald-200 font-medium">
            By doing this, you aren't just saving — you're multiplying.
          </p>
        </motion.div>

        {/* Flow diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 max-w-4xl mx-auto mb-16">
          {steps.map((step, index) => (
            <React.Fragment key={index} >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-28 h-28 md:w-32 md:h-32 bg-emerald-700 rounded-full flex items-center justify-center shadow-lg border-2 border-emerald-300">
                  <span className="text-emerald-100 font-serif text-3xl md:text-4xl font-bold">
                    {step.highlight}
                  </span>
                </div>
                <p className="mt-4 text-sm md:text-base text-white font-medium text-center">
                  {step.label}
                </p>
              </motion.div>
              
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-8 h-8 text-emerald-700 mx-4 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white max-w-3xl mx-auto text-lg leading-relaxed"
        >
          Your original <span className="font-semibold text-emerald-300">$1 keeps compounding</span> inside the policy 
          while <span className="font-semibold text-emerald-300">$4 of the bank's money</span> works in the property — 
          five times the productive capital from a single dollar.
        </motion.p>
      </div>
    </section>
  );
}