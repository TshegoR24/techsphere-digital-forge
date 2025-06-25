import { useState } from "react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide web and software development, UI/UX design, and digital consulting for businesses of all sizes.",
  },
  {
    q: "Who will I work with?",
    a: "You'll work directly with our founder, Tshegofats Rakoma, ensuring clear communication and personal attention.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects are completed within 2-6 weeks, depending on scope and requirements.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer transparent, project-based pricing with no hidden fees. You'll receive a detailed quote before we start.",
  },
  {
    q: "How do I get started?",
    a: "Just reach out via our contact form or email, and we'll schedule a free consultation to discuss your needs.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-heading font-extrabold text-primary mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-accent/10 rounded-xl bg-background shadow-sm">
              <button
                className="w-full text-left px-6 py-4 font-heading text-lg text-primary flex justify-between items-center focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {faq.q}
                <span className={`ml-4 transition-transform ${open === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-text font-sans animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 