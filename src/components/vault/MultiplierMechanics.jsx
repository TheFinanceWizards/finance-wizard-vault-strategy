import React from 'react';
import { motion } from 'framer-motion';
import { CircleDollarSign, ArrowLeftRight, Calendar } from 'lucide-react';

export default function MultiplierMechanics() {
  const mechanics = [
    {
      icon: CircleDollarSign,
      title: "Non-Direct Recognition Loans",
      description: "The Insurance Carrier's loan provision means your full cash value earns the same dividend rate even while a loan is out for your real estate down payment."
    },
    {
      icon: ArrowLeftRight,
      title: "1:1 Borrowing Ratio",
      description: "For every $1 of cash value, you have immediate access to borrow $1 for your investment — illustrated directly in their software."
    },
    {
      icon: Calendar,
      title: "Flexible Repayment",
      description: "The Insurance Carrier requires no forced repayment schedule on policy loans, giving clients total control over their cash flow."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-emerald-900 mb-6">
            Activating the Multiplier Mechanics
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mechanics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-emerald-800" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-emerald-900 mb-4">
                {item.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}