import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Wallet, Receipt, Users } from 'lucide-react';

export default function TurnkeyRealEstate() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Appreciation",
      description: "The house value goes up over time, building equity automatically."
    },
    {
      icon: Wallet,
      title: "Cash Flow",
      description: "Monthly rent checks arrive whether you're working or not."
    },
    {
      icon: Receipt,
      title: "Tax Advantages",
      description: "The government gives you significant tax breaks on real estate ownership."
    },
    {
      icon: Users,
      title: "Amortization",
      description: "Your tenant pays your mortgage — building your wealth with their money."
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
            Why Turnkey Real Estate?
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            "Done-for-you" ownership delivers four powerful benefits simultaneously — no active management required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-stone-50 p-8 rounded-sm border border-stone-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-emerald-800" />
              </div>
              <h3 className="font-serif text-xl text-emerald-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}