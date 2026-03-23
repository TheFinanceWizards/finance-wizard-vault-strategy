import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Lock } from 'lucide-react';

export default function WhatIsVault() {
  const features = [
    {
      icon: Shield,
      title: "Overfunded",
      description: "Maximum cash allowed, minimum death benefit permitted by law"
    },
    {
      icon: TrendingUp,
      title: "Tax-Free Growth",
      description: "Earns dividends every single year"
    },
    {
      icon: Lock,
      title: "Market-Proof",
      description: "Grows regardless of stock market performance"
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(245, 243, 238, 0.92), rgba(245, 243, 238, 0.95)), url('https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-5xl text-emerald-900 mb-16 text-center"
        >
          What Is "The Vault"?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-emerald-900 text-white p-8 md:p-10 rounded-sm shadow-xl"
          >
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-amber-100">
              Your very own Bank Vault
            </h3>
            <p className="text-stone-200 leading-relaxed text-lg">
              Instead of a regular savings account, your extra cash goes into a specially designed 
              Whole Life policy with a mutual company — where the bank no longer profits from your money.
            </p>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-emerald-900 mb-8">
              How It's Built
            </h3>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-emerald-900">{feature.title}:</span>{' '}
                    <span className="text-stone-600">{feature.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}