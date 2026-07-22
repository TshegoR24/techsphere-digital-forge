import { CheckCircle, Zap, Clock, User } from "lucide-react";

const points = [
  {
    icon: <Zap className="h-8 w-8 text-accent mb-2" />,
    title: "Modern Technology",
    desc: "We use the latest frameworks and tools to deliver robust, scalable solutions.",
  },
  {
    icon: <User className="h-8 w-8 text-accent mb-2" />,
    title: "Personal Attention",
    desc: "You work directly with the founder—no middlemen, no miscommunication.",
  },
  {
    icon: <Clock className="h-8 w-8 text-accent mb-2" />,
    title: "Fast, Reliable Delivery",
    desc: "We deliver on time and on budget, every time.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-accent mb-2" />,
    title: "Transparent Process",
    desc: "Clear communication and progress updates at every step.",
  },
];

const WhyChooseUs = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="inline-block text-xs font-mono text-accent tracking-widest uppercase mb-4">// why techsphere</span>
      <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-text mb-6">Built different, <span className="text-accent">by design</span></h2>
      <p className="text-lg text-muted mb-14 max-w-2xl mx-auto">
        We're committed to delivering exceptional results for every client, every time.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {points.map((p, i) => (
          <div key={i} className="bg-surface rounded-2xl border border-steel/60 p-8 flex flex-col items-center hover:border-primary/50 transition-colors duration-300">
            {p.icon}
            <h3 className="text-lg font-heading font-semibold text-text mb-2">{p.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs; 