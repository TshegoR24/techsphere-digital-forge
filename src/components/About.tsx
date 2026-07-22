import { motion } from "framer-motion";
import { Users, Award, Briefcase } from "lucide-react";

const stats = [
  { number: "1+", label: "Years in Business", icon: Award },
  { number: "15+", label: "Projects Delivered", icon: Briefcase },
  { number: "10+", label: "Happy Clients", icon: Users },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-28 bg-surface border-y border-steel/60">
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
            <div className="rounded-3xl overflow-hidden border border-steel/60 glow-sphere">
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
            <span className="inline-block text-xs font-mono text-accent tracking-widest uppercase mb-4">// 01 · about</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-text mb-6">
              About <span className="text-accent">Tech Sphere</span>
            </h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Tech Sphere is a team of passionate designers, developers, and engineers dedicated to delivering innovative web and software solutions. We help businesses of all sizes transform their digital presence and achieve their goals through technology.
            </p>
            <p className="text-lg text-muted mb-10 leading-relaxed">
              With a focus on quality, creativity, and client satisfaction, we bring your ideas to life—on time and on budget.
            </p>
            {/* Stats Highlight Bar */}
            <div className="flex flex-col sm:flex-row gap-6 justify-between items-center bg-background rounded-xl border border-steel/60 p-6">
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
                    <stat.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="text-3xl font-heading font-semibold text-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-muted text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
