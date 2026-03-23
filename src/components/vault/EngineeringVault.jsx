import React from 'react';
import { motion } from 'framer-motion';
import { Lock, RefreshCw, Sliders, Home } from 'lucide-react';

export default function EngineeringVault() {
  const steps = [
    {
      icon: Lock,
      title: "Premium Structure",
      description: "We strategically allocate your premiums to maximize the cash value accumulation within your policy."
    },
    {
      icon: RefreshCw,
      title: "Maximize Cash Value",
      description: "The policy is designed to build accessible cash reserves quickly, allowing you to leverage this growing equity for opportunities."
    },
    {
      icon: Sliders,
      title: "Tax-Efficient Growth",
      description: "Your cash value grows tax-free, and when accessed through policy loans, remains tax-free — keeping more of your money working for you."
    },
    {
      icon: Home,
      title: "Real Estate Deployment",
      description: "Access your cash value to invest in real estate, using your growing vault as collateral for strategic property acquisitions."
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.96), rgba(245, 243, 238, 0.98)), url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-emerald-900 mb-6">
            Engineering your own Bank Vault with Life Insurance
          </h2>
          <p className="text-lg text-stone-600 max-w-4xl mx-auto">
            The Whole Life products we work with are purpose-built for this strategy. 
            Our Carriers have software that handles overfunding and high-liquidity designs required for Dual Compounding.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-6 md:gap-8 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-900 rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-amber-200" />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-serif text-xl md:text-2xl text-emerald-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}