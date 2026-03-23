import React from 'react';
import { motion } from 'framer-motion';

export default function ResultSection() {
  const results = [
    {
      amount: "$1",
      label: "Contributed",
      description: "Begins compounding tax-free inside the Vault immediately."
    },
    {
      amount: "$1",
      label: "Borrowed Back",
      description: "Used as a 20% down payment on a turnkey property."
    },
    {
      amount: "$4",
      label: "Bank Loan",
      description: "80% mortgage added to the investment — the bank's money working for you."
    },
    {
      amount: "$5",
      label: "Total Capital",
      description: "Five dollars of productive, working capital for every $1 you put in."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-stone-100 to-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-emerald-900 mb-4">
            The Result: $1 to $5 Under The Carrier's Design
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="bg-emerald-900 py-8 px-6 text-center">
                <span className="font-serif text-4xl md:text-5xl text-amber-200 font-bold">
                  {result.amount}
                </span>
                <p className="text-emerald-200 mt-2 font-medium">
                  {result.label}
                </p>
              </div>
              <div className="p-6">
                <p className="text-stone-600 leading-relaxed text-center">
                  {result.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}