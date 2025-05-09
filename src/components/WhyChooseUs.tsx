"use client";

import {
  ShieldCheck,
  Clock,
  TrendingUp,
  ThumbsUp,
  Users,
  Globe,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: (
        <ShieldCheck size={36} className="text-blue-600 dark:text-blue-400" />
      ),
      title: "Secure Transactions",
      description:
        "Your data and transactions are protected with enterprise-grade encryption and security practices.",
    },
    {
      icon: (
        <Clock size={36} className="text-yellow-500 dark:text-yellow-400" />
      ),
      title: "Fast Processing",
      description:
        "Get your license evaluated and sold quickly with our streamlined process and 24/7 support.",
    },
    {
      icon: (
        <TrendingUp size={36} className="text-green-600 dark:text-green-400" />
      ),
      title: "Maximize Value",
      description:
        "Our competitive marketplace ensures you get the best price for your unused software.",
    },
    {
      icon: (
        <ThumbsUp size={36} className="text-purple-600 dark:text-purple-400" />
      ),
      title: "Trusted by Users",
      description:
        "Join hundreds of satisfied customers who have successfully sold licenses on our platform.",
    },
    {
      icon: <Users size={36} className="text-pink-600 dark:text-pink-400" />,
      title: "Verified Buyers",
      description:
        "Our network of pre-vetted buyers ensures legitimate transactions and reduces fraud risk.",
    },
    {
      icon: (
        <Globe size={36} className="text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Global Marketplace",
      description:
        "Access an international network of buyers looking for software licenses like yours.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 px-6 bg-white dark:bg-gray-950"
    >
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          inView ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-4">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose SoftSell?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We simplify and secure the process of selling your unused software
            licenses, providing you with a safe and efficient marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to sell your software licenses?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Create an account today and start listing your unused software
                licenses. Our team is ready to help you every step of the way.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  Create Account
                </button>
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                    <ThumbsUp size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Trusted by over
                    </p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      5,000+ Users
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      ✓
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      100% Secure Payment System
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      ✓
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      24/7 Customer Support
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      ✓
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Verified Buyer Network
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
