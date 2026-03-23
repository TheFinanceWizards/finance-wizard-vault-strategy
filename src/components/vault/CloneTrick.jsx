import React from 'react';
import { motion } from 'framer-motion';
import { Banknote, Sparkles, Copy } from 'lucide-react';

export default function CloneTrick() {
  const steps = [
    {
      icon: Banknote,
      title: "Private Loan",
      description: "Borrow from the insurance company using your cash value as collateral — not a bank withdrawal."
    },
    {
      icon: Sparkles,
      title: "Two Places at Once",
      description: "Your original money stays in the Vault, continuing to earn interest and dividends as if untouched."
    },
    {
      icon: Copy,
      title: '"Cloned" Capital',
      description: "The borrowed funds become your real estate down payment — a second stream of wealth creation."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-emerald-900 mb-6">
            The "Clone" Trick: Dual Compounding
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            This is the part that blows people's minds. When you want to buy a rental property, 
            you <span className="font-semibold text-emerald-800">don't withdraw</span> your money from the policy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-stone-100 rounded-full flex items-center justify-center group-hover:bg-emerald-50 transition-colors duration-300">
                <step.icon className="w-9 h-9 text-emerald-800" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-emerald-900 mb-4">
                {step.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}