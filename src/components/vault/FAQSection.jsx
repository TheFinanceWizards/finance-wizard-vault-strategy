import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Is this free? Will I be pressured to buy something?",
    a: "The consultation is 100% free. There's no pressure, no obligation, and no hard sell. Our brokers will walk you through what the strategy could look like for your specific situation — and the decision is entirely yours."
  },
  {
    q: "I've never heard of this. Is it legitimate?",
    a: "Absolutely. The Bank-on-Yourself and Infinite Banking strategy has been used by the ultra-wealthy for over 100 years. Nelson Nash popularized it in his bestselling book. It uses whole life insurance from a mutual company — a regulated, licensed financial product."
  },
  {
    q: "I don't have a lot of money. Is this for me?",
    a: "You can start the Vault strategy for as little as $500/month. Our brokers will help you understand what's realistic for your income and goals. Many of our clients started small and scaled up as their cash value grew."
  },
  {
    q: "What's the catch? Why don't more people know about this?",
    a: "Banks profit when your money sits in their accounts. Wall Street profits from your market exposure. The Vault strategy moves money out of those systems — so it's not heavily advertised. It's the strategy wealthy families use to keep wealth in-house."
  },
  {
    q: "How quickly will I see results?",
    a: "Cash value begins building immediately, though the first couple of years focus on establishing the policy. Most clients begin leveraging their Vault for real estate within 12–36 months. Your broker will give you a personalized projection during your free call."
  },
  {
    q: "What happens after I fill out the form?",
    a: "A senior broker from The Finance Wizards will call you at your scheduled time. The call is 30–45 minutes. They'll review your situation, explain the strategy in plain language, and send you a personalized blueprint — all at no cost."
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-emerald-900 mb-4">
            Common Questions
          </h2>
          <p className="text-stone-500 text-lg">Everything you need to know before your free call.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-stone-200 rounded-sm overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-stone-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-stone-800 text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-stone-500 text-sm leading-relaxed border-t border-stone-100 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}