import { motion } from "framer-motion";
import { Users, Award, Briefcase } from "lucide-react";

const stats = [
  { number: "1+", label: "Years in Business", icon: Award },
  { number: "15+", label: "Projects Delivered", icon: Briefcase },
  { number: "10+", label: "Happy Clients", icon: Users },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-surface">
      {/* SVG Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path
            fill="#F5F7FA"
            d="M0,40 C360,0 1080,80 1440,32 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/20">
              <img
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&h=400&fit=crop"
                alt="Tech Sphere team collaborating on a project"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right column - Card with mission and stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-background rounded-2xl shadow-xl p-10 md:p-14 border border-accent/10">
              <h2 className="text-4xl font-heading font-extrabold text-primary mb-6">
                About <span className="text-accent">Tech Sphere</span>
              </h2>
              <p className="text-lg font-sans text-text mb-8 leading-relaxed">
                Tech Sphere is a team of passionate designers, developers, and engineers dedicated to delivering innovative web and software solutions. We help businesses of all sizes transform their digital presence and achieve their goals through technology.
              </p>
              <p className="text-lg font-sans text-text mb-12 leading-relaxed">
                With a focus on quality, creativity, and client satisfaction, we bring your ideas to life—on time and on budget.
              </p>
              {/* Stats Highlight Bar */}
              <div className="flex flex-col sm:flex-row gap-6 justify-between items-center bg-accent/10 rounded-xl p-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="text-3xl font-heading font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-muted text-sm font-sans">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
