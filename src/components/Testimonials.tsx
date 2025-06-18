import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, RetailPro Inc.",
    company: "Retail",
    testimonial: "Tech Sphere delivered a stunning e-commerce platform that increased our online sales by 40%. Their team is professional, creative, and always on time.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    position: "CTO, HealthFirst Clinics",
    company: "Healthcare",
    testimonial: "The custom healthcare management system built by Tech Sphere has streamlined our operations and improved patient satisfaction. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    position: "Head of Marketing, NextGen Solutions",
    company: "Technology",
    testimonial: "Our new corporate website and branding exceeded expectations. Tech Sphere's attention to detail and technical expertise set them apart.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Bar */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <div className="flex items-center bg-white rounded-xl shadow-md px-6 py-4 gap-3">
            <Users className="h-6 w-6 text-primary" />
            <div>
              <span className="block text-xl font-bold text-gray-900">100+</span>
              <span className="block text-sm text-gray-500">Happy Clients</span>
            </div>
          </div>
          <div className="flex items-center bg-white rounded-xl shadow-md px-6 py-4 gap-3">
            <Star className="h-6 w-6 text-yellow-400" />
            <div>
              <span className="block text-xl font-bold text-gray-900">5-Star</span>
              <span className="block text-sm text-gray-500">Client Reviews</span>
            </div>
          </div>
        </div>
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
            Hear from business leaders who have partnered with Tech Sphere for their digital transformation.
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
