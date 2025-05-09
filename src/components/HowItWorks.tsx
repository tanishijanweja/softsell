"use client";

import { Upload, DollarSign, CheckCircle, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function HowItWorks() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const steps = [
    {
      icon: <Upload className="w-14 h-14 text-blue-600 dark:text-blue-400" />,
      title: "List Your License",
      description:
        "Upload your unused software license details securely to our platform.",
      feature: "Verified marketplace",
    },
    {
      icon: (
        <DollarSign className="w-14 h-14 text-green-600 dark:text-green-400" />
      ),
      title: "Get Offers",
      description:
        "Receive competitive offers from our network of verified buyers.",
      feature: "No auction fees",
    },
    {
      icon: (
        <CheckCircle className="w-14 h-14 text-purple-600 dark:text-purple-400" />
      ),
      title: "Secure Payment",
      description:
        "Complete the sale and receive your payment safely through our escrow system.",
      feature: "24-hour payouts",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How SoftSell Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We have simplified the process of selling your unused software
            licenses, making it quick and secure.
          </p>
        </div>

        <div ref={ref} className="relative">

          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-700 ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl inline-block mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-5 flex-grow">
                    {step.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                      {step.feature} <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
