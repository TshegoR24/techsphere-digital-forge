import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const formatZAR = (amountZar: number) =>
  `R ${Math.round(amountZar).toLocaleString("en-ZA")}`;

// VAT is included in every displayed price but not itemized on the page.
const VAT_RATE = 0.15;
const withVatRounded = (baseZar: number) =>
  Math.round((baseZar * (1 + VAT_RATE)) / 1000) * 1000;

const Pricing = () => {
  // Base rates set directly in ZAR, benchmarked against the South African
  // small-agency market rather than converted from a USD list price.
  const landingZar = withVatRounded(5000);
  const starterZar = withVatRounded(8000);
  const growthZar = withVatRounded(18000);

  return (
    <div className="min-h-screen bg-background">
    <Navigation />
    <div className="px-6 pt-32 pb-16 max-w-4xl mx-auto">
      <span className="inline-block text-xs font-mono text-accent tracking-widest uppercase mb-4">// pricing</span>
      <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-text mb-6">Pricing</h1>
      <p className="text-muted mb-10 leading-relaxed">
        Transparent pricing with indicative rates in South African Rand (ZAR). Final quotes are based on confirmed scope. We accept Visa, Mastercard, and bank transfer via Paystack.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface border border-steel/60 rounded-2xl p-6">
          <h2 className="text-xl font-heading font-semibold text-text mb-2">Landing Page</h2>
          <p className="text-muted mb-4">A single focused page to launch fast.</p>
          <p className="text-3xl font-heading font-semibold text-text">{formatZAR(landingZar)}</p>
        </div>
        <div className="bg-surface border border-steel/60 rounded-2xl p-6">
          <h2 className="text-xl font-heading font-semibold text-text mb-2">Starter</h2>
          <p className="text-muted mb-4">Ideal for small business websites and simple MVPs.</p>
          <p className="text-3xl font-heading font-semibold text-text">From {formatZAR(starterZar)}</p>
        </div>
        <div className="bg-surface border border-primary/50 rounded-2xl p-6 glow-sphere">
          <h2 className="text-xl font-heading font-semibold text-text mb-2">Growth</h2>
          <p className="text-muted mb-4">Multi-page business websites with custom features.</p>
          <p className="text-3xl font-heading font-semibold text-text">From {formatZAR(growthZar)}</p>
        </div>
        <div className="bg-surface border border-steel/60 rounded-2xl p-6">
          <h2 className="text-xl font-heading font-semibold text-text mb-2">Enterprise</h2>
          <p className="text-muted mb-4">Custom software and system integrations.</p>
          <p className="text-3xl font-heading font-semibold text-text">Custom</p>
        </div>
      </div>
      <div className="bg-surface border border-steel/60 rounded-2xl p-6 mt-10 text-sm text-muted">
        <p className="mb-2"><span className="font-semibold text-text">Notes:</span> Prices are indicative and subject to a detailed scope of work.</p>
        <p>Accepted payment methods: Visa, Mastercard, bank transfer via Paystack. No hidden fees; any third-party costs (domains, hosting, licenses) are quoted separately.</p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Pricing;


