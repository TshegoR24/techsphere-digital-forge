import { motion } from "framer-motion";

const MeetTheFounder = () => (
  <section id="founder" className="py-24 bg-surface">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-heading font-extrabold text-primary mb-4">
          Meet the <span className="text-accent">Founder</span>
        </h2>
        <p className="text-xl font-sans text-text max-w-2xl mx-auto">
          Tech Sphere is led by a passionate technologist dedicated to your success.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-background rounded-2xl shadow-xl border border-accent/10 p-10 flex flex-col items-center"
      >
        <div className="w-28 h-28 rounded-full bg-accent/10 flex items-center justify-center mb-6 overflow-hidden">
          {/* Placeholder avatar */}
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="#A0AEC0" />
            <ellipse cx="40" cy="34" rx="16" ry="16" fill="#F5F7FA" />
            <ellipse cx="40" cy="64" rx="24" ry="12" fill="#F5F7FA" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-primary mb-1">Tshegofats Sekhotha</h3>
        <p className="text-accent font-semibold mb-4">Founder & Lead Developer</p>
        <p className="text-text font-sans text-center max-w-xl">
          With a passion for technology and a commitment to client success, Tshegofats brings a hands-on, personal approach to every project. From strategy to launch, you'll work directly with the founder to ensure your vision becomes reality.
        </p>
      </motion.div>
    </div>
  </section>
);

export default MeetTheFounder; 