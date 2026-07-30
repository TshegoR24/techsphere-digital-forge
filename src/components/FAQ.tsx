import { useState } from "react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide web and software development, UI/UX design, and digital consulting for businesses of all sizes.",
  },
  {
    q: "Who will I work with?",
    a: "You'll work directly with our founder, Tshegofats Sekhotha, ensuring clear communication and personal attention.",
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
    <section className="py-20 md:py-28 bg-surface border-y border-steel/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="block text-xs font-mono text-accent tracking-widest uppercase mb-4 text-center">// faq</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-text mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-steel/60 rounded-xl bg-background overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 font-heading text-lg text-text flex justify-between items-center focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {faq.q}
                <span className={`ml-4 text-accent transition-transform ${open === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-muted leading-relaxed animate-fade-in">
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