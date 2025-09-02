import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/TechSphere_Logo_WhiteBG.jpg"
              alt="TechSphere Solutions Logo"
              className="h-12 w-12 mb-4 rounded-full shadow-md inline-block"
            />
            <h3 className="text-2xl font-bold text-primary mb-4">TechSphere Solutions</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses through innovative technology solutions. 
              We transform ideas into powerful digital experiences that drive growth and success.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-primary transition-colors rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-primary transition-colors rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-gray-400 hover:text-primary transition-colors rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary/70">
              <li><a href="#services" className="hover:text-primary transition-colors">Custom Software</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">CRM Solutions</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Tech Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary/70">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-primary/70">
            © 2024 TechSphere Solutions. All rights reserved. |
            <a href="/privacy" className="hover:text-primary transition-colors ml-1">Privacy Policy</a> |
            <a href="/terms" className="hover:text-primary transition-colors ml-1">Terms of Service</a> |
            <a href="/pricing" className="hover:text-primary transition-colors ml-1">Pricing</a> |
            <a href="/refund" className="hover:text-primary transition-colors ml-1">Refund Policy</a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
