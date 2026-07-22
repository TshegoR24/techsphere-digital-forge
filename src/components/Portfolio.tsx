import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Seamless Travel",
    client: "Travel Platform",
    description: "A modern travel booking platform with seamless user experience, real-time booking capabilities, and comprehensive travel management features.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
    alt: "Seamless Travel platform screenshot",
    link: "https://seamlesstravel.netlify.app/",
  },
  {
    title: "E-Commerce Platform Redesign",
    client: "RetailPro Inc.",
    description: "A modern, scalable e-commerce platform with custom UI/UX and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
    alt: "E-commerce website redesign project screenshot",
    link: "#",
  },
  {
    title: "Healthcare Management System",
    client: "HealthFirst Clinics",
    description: "A secure, cloud-based system for patient records, appointments, and analytics.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
    alt: "Healthcare management software dashboard",
    link: "#",
  },
  {
    title: "Corporate Website & Branding",
    client: "NextGen Solutions",
    description: "A responsive corporate website with custom branding and interactive features.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500&h=300&fit=crop",
    alt: "Corporate website and branding project screenshot",
    link: "#",
  },
  {
    title: "Logistics Tracking Portal",
    client: "MoveFast Logistics",
    description: "A real-time shipment tracking portal with GPS integration and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
    alt: "Logistics tracking portal project screenshot",
    link: "#",
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

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-24 md:py-28 bg-surface border-y border-steel/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-accent tracking-widest uppercase mb-4">// 03 · portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-text mb-4">
            Our <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Explore some of our recent projects and see how we help businesses succeed with innovative digital solutions.
          </p>
        </motion.div>

        {/* Animated Project Grid */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative bg-background rounded-2xl border border-steel/60 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col overflow-hidden"
              style={{ zIndex: 1 + projects.length - index }}
            >
              {/* Image with overlay and zoom */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Optional: View Project button overlay */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-surface text-accent px-4 py-2 rounded-full font-semibold flex items-center gap-2 border border-steel/60 hover:bg-background"
                >
                  View Project <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-text mb-2">
                    {project.title}
                  </h3>
                  <p className="text-accent mb-2 text-sm font-mono">
                    {project.client}
                  </p>
                  <p className="text-muted mb-4 leading-relaxed min-h-[56px]">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
