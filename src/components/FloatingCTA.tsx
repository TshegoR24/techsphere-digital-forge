import { MessageCircle } from "lucide-react";

const FloatingCTA = () => (
  <button
    onClick={() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }}
    className="fixed z-50 bottom-6 right-6 bg-gradient-to-r from-primary to-accent text-background px-6 py-3 rounded-full glow-ion flex items-center gap-2 font-heading font-semibold text-base hover:opacity-90 transition-all focus:outline-none focus:ring-4 focus:ring-accent/30"
    aria-label="Let's Talk"
  >
    <MessageCircle className="w-6 h-6" />
    Let's Talk
  </button>
);

export default FloatingCTA; 