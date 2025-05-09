"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-100 dark:from-gray-950 dark:via-blue-950/20 dark:to-slate-900">

      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-300 dark:bg-blue-700 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4"
            >
              Turn idle licenses into revenue
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Sell Your Unused{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Software Licenses
              </span>{" "}
              with Ease
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
              SoftSell helps you turn idle software into real cash. Our platform
              makes selling software licenses safe, fast, and hassle-free.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 text-base"
              >
                Sell My Licenses <ArrowRight size={16} className="ml-2" />
              </Button>

              <Link href="#how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-base"
                >
                  Learn How It Works
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center md:justify-start gap-6">
              <div className="flex items-center">
                <ShieldCheck
                  size={20}
                  className="text-green-600 dark:text-green-400 mr-2"
                />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Secure Process
                </span>
              </div>
              <div className="flex items-center">
                <Clock
                  size={20}
                  className="text-green-600 dark:text-green-400 mr-2"
                />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Quick Payment
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="hidden md:block relative"
          >
            <div className="w-full h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden relative p-4">
              <div className="absolute top-0 left-0 right-0 h-10 bg-gray-100 dark:bg-gray-700 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="mt-10 p-4">
                <div className="w-full h-16 bg-blue-100 dark:bg-blue-900/40 rounded mb-4"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 bg-gray-100 dark:bg-gray-700 rounded p-4 flex flex-col justify-between">
                    <div className="w-1/2 h-4 bg-blue-200 dark:bg-blue-800 rounded"></div>
                    <div className="w-2/3 h-8 bg-green-200 dark:bg-green-800 rounded"></div>
                  </div>
                  <div className="h-32 bg-gray-100 dark:bg-gray-700 rounded p-4 flex flex-col justify-between">
                    <div className="w-1/2 h-4 bg-blue-200 dark:bg-blue-800 rounded"></div>
                    <div className="w-2/3 h-8 bg-yellow-200 dark:bg-yellow-800 rounded"></div>
                  </div>
                </div>
                <div className="mt-4 w-full h-12 bg-blue-500 rounded flex items-center justify-center">
                  <div className="w-1/3 h-4 bg-white rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
