import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "Can I rent a car for a few weeks?",
    answer: "Yes, you can. Sai Sandhya Motor Driving School offers customizable rental solutions across our diverse fleet including Hatchbacks, Sedans, and SUVs. Rates vary based on vehicle model and lease duration."
  },
  {
    id: 2,
    question: "Do you also provide a driver with the rented vehicle?",
    answer: "Yes, we do. Apart from professional driving instructions, we provide verified, experienced drivers for our rental fleet suitable for corporate events, family getaways, and long trips."
  },
  {
    id: 3,
    question: "Will I be required to pay for any damage the car sustains during training?",
    answer: "For training sessions, all our cars are fully insured and fitted with dual safety controls, so our certified instructors can intervene immediately to prevent accidents. You are not liable for training wear-and-tear."
  },
  {
    id: 4,
    question: "What types of cars are available for training and hire?",
    answer: "Our fleet consists of multiple categories: Hatchbacks (ideal for beginners), comfortable Sedans (Hyundai Aura/Honda City), SUVs (Mahindra XUV300), plus two-wheelers (Scooters and Motorcycles)."
  },
  {
    id: 5,
    question: "Can I hire a car or Tempo Traveler for a weekend trip?",
    answer: "Yes! We have spacious 7-seater SUVs, Tempo Travelers, and Buses perfect for weekend family tours or corporate outings. Please reach out to Anil at +91 90001 11697 to check availability and book."
  },
  {
    id: 6,
    question: "How do you assist with obtaining the permanent driving license?",
    answer: "We offer end-to-end support. We assist you in applying for the Learner's License (LLR), train you on the actual RTO test tracks (H-track and 8-track layout), and provide our school vehicle for the final RTO driving test."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2 block">
            Common Inquiries
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-lg">
            Have questions about our rental options, driving training batches, or licensing procedures? Find quick answers below.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-slate-800 hover:text-brand-blue transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-blue shrink-0" />
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus className="w-4 h-4 text-brand-blue" /> : <Plus className="w-4 h-4 text-slate-500" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-sm text-slate-500 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
