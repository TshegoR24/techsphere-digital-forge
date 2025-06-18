import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AnimatedBlob = ({ className, style = {}, color, delay = 0 }: { className: string; style?: React.CSSProperties; color: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.18, scale: 1, y: [0, 20, 0], x: [0, -10, 0] }}
    transition={{ duration: 8, delay, repeat: Infinity, repeatType: "loop" }}
    className={className}
    style={style}
  >
    <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="160" cy="160" rx="160" ry="120" fill={color} />
    </svg>
  </motion.div>
);

const AnimatedPerson = ({ cx, cy, r, bodyX, bodyY, bodyW, bodyH, bodyR, headColor, bodyColor, delay = 0 }) => (
  <motion.g
    initial={{ y: 0 }}
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 2.5, delay, repeat: Infinity, repeatType: "loop" }}
  >
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill={headColor}
      animate={{ opacity: [1, 0.7, 1] }}
      transition={{ duration: 2.5, delay: delay + 0.5, repeat: Infinity, repeatType: "loop" }}
    />
    <rect x={bodyX} y={bodyY} width={bodyW} height={bodyH} rx={bodyR} fill={bodyColor} />
  </motion.g>
);

const AnimatedMonitor = () => (
  <motion.rect
    x="120" y="120" width="80" height="48" rx="8" fill="#1A237E"
    initial={{ opacity: 0.7 }}
    animate={{ opacity: [0.7, 1, 0.7] }}
    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
  />
);

const AnimatedCodeLines = () => (
  <>
    <motion.rect x="220" y="130" width="40" height="4" rx="2" fill="#fff" initial={{ opacity: 0.5 }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }} />
    <motion.rect x="220" y="138" width="28" height="4" rx="2" fill="#fff" initial={{ opacity: 0.5 }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.8, repeat: Infinity, repeatType: "loop" }} />
    <motion.rect x="220" y="146" width="32" height="4" rx="2" fill="#fff" initial={{ opacity: 0.5 }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.1, repeat: Infinity, repeatType: "loop" }} />
  </>
);

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 min-h-[80vh] flex flex-col items-center overflow-hidden">
      {/* Layered Animated Blobs */}
      <AnimatedBlob className="absolute -top-32 -left-32 z-0" color="#00B8D9" delay={0.2} style={{}} />
      <AnimatedBlob className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" color="#1A237E" delay={0.5} style={{}} />
      <AnimatedBlob className="absolute -bottom-32 right-0 z-0" color="#00B8D9" delay={0.8} style={{}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10 w-full">
        {/* Left: Headline, Subheading, CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 text-left md:pr-12"
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
        {/* Right: Custom SVG Digital Agency Scene with animation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 flex justify-center items-center mt-12 md:mt-0 relative"
        >
          <svg width="380" height="320" viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Abstract workspace background */}
            <rect x="40" y="60" width="300" height="180" rx="32" fill="#F5F7FA" />
            {/* Desk */}
            <rect x="80" y="200" width="220" height="24" rx="8" fill="#A0AEC0" />
            {/* Monitor (animated) */}
            <AnimatedMonitor />
            {/* Code window */}
            <rect x="210" y="120" width="60" height="36" rx="6" fill="#00B8D9" />
            {/* Animated code lines */}
            <AnimatedCodeLines />
            {/* Person 1 (animated) */}
            <AnimatedPerson cx={140} cy={180} r={18} bodyX={130} bodyY={180} bodyW={20} bodyH={28} bodyR={8} headColor="#1A237E" bodyColor="#00B8D9" delay={0.2} />
            {/* Person 2 (animated) */}
            <AnimatedPerson cx={220} cy={180} r={16} bodyX={210} bodyY={180} bodyW={18} bodyH={24} bodyR={7} headColor="#00B8D9" bodyColor="#1A237E" delay={0.5} />
            {/* Floating accent icons */}
            <motion.circle cx="320" cy="80" r="10" fill="#00B8D9" fillOpacity="0.7" animate={{ cy: [80, 70, 80] }} transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }} />
            <motion.rect x="60" y="90" width="18" height="18" rx="4" fill="#1A237E" fillOpacity="0.7" animate={{ y: [90, 100, 90] }} transition={{ duration: 2.2, repeat: Infinity, repeatType: "loop" }} />
            <motion.rect x="300" y="220" width="14" height="14" rx="3" fill="#00B8D9" fillOpacity="0.7" animate={{ y: [220, 210, 220] }} transition={{ duration: 2.4, repeat: Infinity, repeatType: "loop" }} />
            <motion.circle cx="80" cy="240" r="8" fill="#1A237E" fillOpacity="0.7" animate={{ cy: [240, 250, 240] }} transition={{ duration: 2.6, repeat: Infinity, repeatType: "loop" }} />
          </svg>
          {/* Animated floating accent card */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            className="absolute left-0 top-0"
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <rect x="8" y="8" width="44" height="44" rx="12" fill="#00B8D9" fillOpacity="0.18" />
              <rect x="18" y="18" width="24" height="8" rx="4" fill="#1A237E" fillOpacity="0.18" />
            </svg>
          </motion.div>
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

export default Hero;
