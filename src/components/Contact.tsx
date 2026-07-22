import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-accent tracking-widest uppercase mb-4">// 05 · contact</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-text mb-4">
            Get <span className="text-accent">In Touch</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Ready to start your next project or have questions about our services? Contact us today and let's build something great together.
          </p>
        </motion.div>
        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 bg-surface rounded-2xl border border-steel/60 p-10"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-text mb-2 font-heading">Email Us</h4>
                <a href="mailto:ts.techsphere@gmail.com" className="text-accent hover:underline">ts.techsphere@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-text mb-2 font-heading">Call Us</h4>
                <a href="tel:0682328258" className="text-accent hover:underline">068 232 8258</a>
              </div>
            </div>
          </motion.div>
          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-surface rounded-2xl border border-steel/60 p-10 flex flex-col gap-4"
          >
            <h3 className="text-2xl font-heading font-semibold text-text mb-2">Send Us a Message</h3>
            <input className="rounded-lg border border-steel bg-background px-4 py-3 text-text placeholder:text-muted focus:ring-2 focus:ring-accent outline-none" placeholder="Your Name" />
            <input className="rounded-lg border border-steel bg-background px-4 py-3 text-text placeholder:text-muted focus:ring-2 focus:ring-accent outline-none" placeholder="Your Email" />
            <textarea className="rounded-lg border border-steel bg-background px-4 py-3 text-text placeholder:text-muted focus:ring-2 focus:ring-accent outline-none min-h-[120px]" placeholder="Your Message" />
            <button className="bg-gradient-to-r from-primary to-accent text-background font-heading font-semibold rounded-full px-8 py-4 text-base glow-sphere hover:opacity-90 transition-all duration-300 mt-2">Send Message</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
