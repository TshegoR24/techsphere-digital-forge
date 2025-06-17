import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Cpu, Database } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-white to-purple-50 min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/30 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Powering Digital Growth with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                Smart Solutions
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge software development, innovative web solutions, 
              and strategic technology consulting tailored to your unique needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/80 hover:to-cyan-300 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Feature icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Custom Development</h3>
              <p className="text-gray-600 text-center mt-2">Tailored solutions for your unique needs</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Cpu className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">AI Integration</h3>
              <p className="text-gray-600 text-center mt-2">Smart automation and machine learning</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Database className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Cloud Solutions</h3>
              <p className="text-gray-600 text-center mt-2">Scalable and secure infrastructure</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <ArrowDown className="h-6 w-6 text-gray-400 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
