import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Theme3D } from "@/components/3d/Theme3D";

const Hero3D = () => {
  return (
    <section id="home" className="relative pt-32 pb-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 min-h-[80vh] flex flex-col items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between relative z-10 w-full">
        {/* Left: Headline, Subheading, CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 text-left lg:pr-12 mb-8 lg:mb-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-extrabold text-primary mb-6 leading-tight"
          >
            Innovative Web & Software Solutions for Modern Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-sans text-text mb-12 max-w-2xl leading-relaxed"
          >
            Custom website design, web development, and digital transformation services to help your business grow, engage, and succeed in the digital world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(26,35,126,0.18)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl font-heading"
              >
                Start Your Project
              </Button>
            </motion.div>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-full font-heading"
            >
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Right: 3D Theme Display */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="w-full max-w-md">
            <Theme3D 
              theme="tech" 
              height="h-[400px]"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
      
      {/* SVG Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24 md:h-32">
          <path
            fill="#F5F7FA"
            d="M0,32 C360,120 1080,0 1440,80 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero3D; 