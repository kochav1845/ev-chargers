import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does EV Managers prevent electrical overloads?",
      answer: "EV Managers uses real-time data from eGauge monitors to continuously track your building's electrical load. When demand approaches capacity limits, our system automatically reduces EV charging current to maintain safe operation of all building systems."
    },
    {
      question: "What equipment do I need for installation?",
      answer: "You'll need an existing electrical panel and breakers. Our team will install all necessary monitoring hardware and load management components, seamlessly integrating them with your infrastructure. We also provide compatible software to ensure safe, optimized EV charging across your site."
    },
    {
      question: "Is the system compatible with all EV chargers?",
      answer: "EV Managers works with most modern EV chargers that support load management protocols. We'll assess your specific charger models during our initial consultation to ensure compatibility."
    },
    {
      question: "How much can I save on electrical upgrades?",
      answer: "Savings vary by building size and local electrical costs, but customers typically avoid $10,000-$100,000+ in electrical service upgrades while still expanding their EV charging capacity."
    },
    {
      question: "How long does installation take?",
      answer: "Most installations are completed within 1-2 business days. Our certified electricians handle all electrical work, and we provide comprehensive testing to ensure optimal system performance."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support packages including remote monitoring, software updates, and 24/7 technical support to ensure your system operates flawlessly."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-white via-emerald-50 to-blue-50 wave-pattern relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our load management system.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-white/80 to-blue-50/60 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-emerald-100/30"
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-blue-50/50 transition-all duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;