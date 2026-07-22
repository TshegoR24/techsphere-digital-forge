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
    <section id="services" className="relative py-24 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-accent tracking-widest uppercase mb-4">// 02 · services</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-text mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Comprehensive digital solutions to elevate your business and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="bg-surface rounded-2xl p-10 border border-steel/60 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-start"
              style={{ zIndex: 1 + services.length - index }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-text mb-4">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed">
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
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-10 glow-sphere">
            <h3 className="text-2xl font-heading font-semibold text-background mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-background/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals and drive growth.
            </p>
            <a
              href="#contact"
              className="inline-block bg-background text-text px-8 py-3 rounded-full font-heading font-semibold hover:bg-background/80 transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
