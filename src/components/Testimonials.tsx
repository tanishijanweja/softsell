"use client";

import { useState } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonials = [
    {
      name: "John Doe",
      role: "IT Manager",
      company: "xyz",
      image: "/images/testimonial-1.jpg",
      message:
        "SoftSell made it incredibly easy to offload our unused licenses. The process was smooth, secure, and we got paid within 24 hours. Highly recommend their service for any company looking to recover costs on unused software.",
      rating: 5,
    },
    {
      name: "Jonanthan Doe",
      role: "pyq",
      company: "InnoByte",
      image: "/images/testimonial-2.jpg",
      message:
        "I loved how straightforward everything was. The support team was responsive and super helpful throughout the process. As a startup, every dollar counts, and SoftSell helped us recoup significant costs from software we were no longer using.",
      rating: 5,
    },
    {
      name: "Jaen Doeh",
      role: "lmn",
      company: "DataStream",
      image: "/images/testimonial-3.jpg",
      message:
        "After downsizing our team, we had several licenses sitting unused. SoftSell provided an excellent platform to sell these licenses securely. The verification process was thorough but quick, giving both us and the buyers confidence.",
      rating: 4,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        }
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-1000 ${
          inView ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from companies who successfully sold their software licenses
            using SoftSell.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 relative h-full flex flex-col"
              >
                <Quote
                  size={36}
                  className="absolute top-6 right-6 text-blue-100 dark:text-blue-900/30"
                />

                <div className="mb-6 flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex items-center justify-center text-xl font-bold text-gray-400 dark:text-gray-500">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  <p className="...">&ldquo;{testimonial.message}&rdquo;</p>
                </p>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 relative">
              <Quote
                size={30}
                className="absolute top-4 right-4 text-blue-100 dark:text-blue-900/30"
              />

              <div className="mb-6 flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex items-center justify-center text-xl font-bold text-gray-400 dark:text-gray-500">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonials[currentIndex].role},{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              <p className="text-gray-600 dark:text-gray-300">
                <p>"{testimonials[currentIndex].message}"</p>
              </p>

              <div className="flex items-center justify-between mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="h-8 w-8"
                >
                  <ArrowLeft size={16} />
                </Button>
                <div className="flex space-x-2">
                  {testimonials.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 w-2 rounded-full ${
                        idx === currentIndex
                          ? "bg-blue-600 dark:bg-blue-400"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="h-8 w-8"
                >
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
