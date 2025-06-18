import { motion } from "framer-motion";
import { Code, Monitor, Layers, PenTool, Users } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Design",
    description: "Modern, responsive, and visually stunning websites tailored to your brand.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Robust, scalable web applications using the latest technologies and best practices.",
  },
  {
    icon: Layers,
    title: "Software Engineering",
    description: "Custom software solutions to streamline your business operations and drive growth.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Intuitive, user-centered interfaces that deliver exceptional digital experiences.",
  },
  {
    icon: Users,
    title: "Digital Consulting",
    description: "Expert advice and strategy to help you navigate digital transformation and achieve your goals.",
  },
];

const staggerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-background">
      {/* SVG Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path
            fill="#FFFFFF"
            d="M0,40 C360,80 1080,0 1440,32 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-extrabold text-primary mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl font-sans text-text max-w-3xl mx-auto">
            Comprehensive digital solutions to elevate your business and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="bg-surface rounded-2xl p-10 shadow-xl border border-accent/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group flex flex-col items-start"
              style={{ zIndex: 1 + services.length - index }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-text font-sans leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-cyan-400 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals and drive growth.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
