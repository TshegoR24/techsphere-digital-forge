import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, RetailPlus",
      company: "E-commerce",
      testimonial: "TechSphere Solutions transformed our online presence completely. Their e-commerce platform increased our sales by 300% in just six months. The team's attention to detail and commitment to excellence is outstanding.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "CTO, HealthTech Pro",
      company: "Healthcare",
      testimonial: "The custom software they developed for our healthcare facility has streamlined our operations significantly. Patient management is now effortless, and our staff productivity has improved dramatically.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthCorp",
      company: "Marketing",
      testimonial: "Their CRM solution has revolutionized how we manage our customer relationships. The insights and automation features have helped us increase our conversion rates by 45%. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say
            about their experience working with TechSphere Solutions.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 hover:bg-primary/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>

          <div className="w-full max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-10 rounded-2xl shadow-xl text-center"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary/20 shadow-md"
                  />
                </div>
                <div className="flex justify-center text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic mb-6">
                  "{testimonials[current].testimonial}"
                </p>
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm text-gray-600">{testimonials[current].position}</p>
                <p className="text-sm text-primary">{testimonials[current].company}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="absolute right-0 z-10 bg-white rounded-full shadow-md p-2 hover:bg-primary/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current ? "bg-primary" : "bg-primary/20"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
