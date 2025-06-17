import { motion } from "framer-motion";
import { Users, Target, Award } from "lucide-react";

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "100+", label: "Happy Clients", icon: Users },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/about-image.jpg"
                alt="TechSphere team working"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-100 rounded-full opacity-50"></div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">TechSphere</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a team of passionate technologists dedicated to transforming businesses through innovative digital solutions. 
              Our expertise spans across software development, cloud architecture, and digital transformation strategies.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              With a focus on delivering exceptional value and maintaining the highest standards of quality, 
              we help organizations navigate the digital landscape and achieve their strategic objectives.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
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
