import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const RING_NODES = [
  { cx: 200, cy: 40, r: 5 },
  { cx: 330, cy: 130, r: 4 },
  { cx: 300, cy: 300, r: 6 },
  { cx: 100, cy: 320, r: 4 },
  { cx: 55, cy: 150, r: 5 },
];

const EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
  [0, 2],
];

const OrbitSphere = () => (
  <div className="relative w-full max-w-[420px] aspect-square mx-auto">
    {/* Ambient glow */}
    <div className="absolute inset-8 rounded-full bg-primary/25 blur-3xl" />
    <div className="absolute inset-16 rounded-full bg-accent/20 blur-2xl" />

    <svg
      viewBox="0 0 400 400"
      className="relative w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="coreGradient" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#8AA3FF" />
          <stop offset="55%" stopColor="#4C6FFF" />
          <stop offset="100%" stopColor="#2638A8" />
        </radialGradient>
        <linearGradient id="edgeGradient" x1="0" y1="0" x2="400" y2="400">
          <stop offset="0%" stopColor="#49E0FF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4C6FFF" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Core sphere */}
      <motion.circle
        cx="200"
        cy="200"
        r="86"
        fill="url(#coreGradient)"
        initial={{ scale: 0.94 }}
        animate={{ scale: [0.94, 1, 0.94] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="200" cy="200" r="86" stroke="#49E0FF" strokeOpacity="0.35" strokeWidth="1" />

      {/* Wireframe latitude rings */}
      <motion.g
        style={{ transformOrigin: "200px 200px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      >
        <ellipse cx="200" cy="200" rx="180" ry="60" stroke="#3450DB" strokeOpacity="0.45" strokeWidth="1" />
        <ellipse cx="200" cy="200" rx="60" ry="180" stroke="#3450DB" strokeOpacity="0.3" strokeWidth="1" />
      </motion.g>
      <motion.g
        style={{ transformOrigin: "200px 200px" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        <ellipse cx="200" cy="200" rx="150" ry="150" stroke="#49E0FF" strokeOpacity="0.25" strokeWidth="1" />
      </motion.g>

      {/* Network graph overlay — nodes + edges, orbiting slowly */}
      <motion.g
        style={{ transformOrigin: "200px 200px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 130, repeat: Infinity, ease: "linear" }}
      >
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={RING_NODES[a].cx}
            y1={RING_NODES[a].cy}
            x2={RING_NODES[b].cx}
            y2={RING_NODES[b].cy}
            stroke="url(#edgeGradient)"
            strokeWidth="1"
          />
        ))}
        {RING_NODES.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="#49E0FF"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.4, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.g>
    </svg>
  </div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-40 pb-28 min-h-[92vh] flex flex-col items-center justify-center overflow-hidden orbit-grid"
    >
      {/* Base + edge fade so the dot-grid doesn't run flush to the viewport edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_75%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left: Headline, Subheading, CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <span className="inline-block text-xs font-mono text-accent tracking-widest uppercase mb-6 border border-steel rounded-full px-4 py-1.5">
            // web &amp; software solutions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-text mb-6 leading-[1.08] tracking-tight">
            We build the software
            <br />
            your business orbits around
          </h1>
          <p className="text-lg text-muted mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            TechSphere Solutions designs and engineers websites, web apps, and custom
            software for businesses that need to move fast without breaking things.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-background font-heading font-semibold px-8 py-6 text-base rounded-full glow-sphere hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="#contact">Start Your Project</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-steel text-text hover:bg-surface hover:text-text px-8 py-6 text-base rounded-full font-heading"
              asChild
            >
              <a href="#portfolio">View Portfolio</a>
            </Button>
          </div>
        </motion.div>

        {/* Right: Orbit sphere signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <OrbitSphere />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
