import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-surface border-t border-steel/60 text-text py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/TechSphere_Logo_WhiteBG.jpg"
              alt="TechSphere Solutions Logo"
              className="h-12 w-12 mb-4 rounded-full ring-2 ring-primary/40 inline-block"
            />
            <h3 className="text-2xl font-heading font-semibold text-text mb-4">TechSphere Solutions</h3>
            <p className="text-muted mb-4 max-w-md leading-relaxed">
              Empowering businesses through innovative technology solutions.
              We transform ideas into powerful digital experiences that drive growth and success.
            </p>
            <a href="mailto:ts.techsphere@gmail.com" className="inline-block text-accent hover:underline mb-4">
              ts.techsphere@gmail.com
            </a>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/TshegoR24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted hover:text-accent transition-colors rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Services</h4>
            <ul className="space-y-2 text-muted">
              <li><a href="#services" className="hover:text-text transition-colors">Custom Software</a></li>
              <li><a href="#services" className="hover:text-text transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-text transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-text transition-colors">CRM Solutions</a></li>
              <li><a href="#services" className="hover:text-text transition-colors">Tech Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-2 text-muted">
              <li><a href="#about" className="hover:text-text transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-text transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-text transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-text transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-steel/60 mt-12 pt-8 text-center">
          <p className="text-muted text-sm">
            © 2024 TechSphere Solutions. All rights reserved. |
            <a href="/privacy" className="hover:text-text transition-colors ml-1">Privacy Policy</a> |
            <a href="/terms" className="hover:text-text transition-colors ml-1">Terms of Service</a> |
            <a href="/pricing" className="hover:text-text transition-colors ml-1">Pricing</a> |
            <a href="/refund" className="hover:text-text transition-colors ml-1">Refund Policy</a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
