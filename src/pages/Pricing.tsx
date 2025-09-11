const EXCHANGE_RATE_ZAR_PER_USD = 18.5; // Indicative; adjust as needed

const formatZAR = (amountZar: number) =>
  `R ${Math.round(amountZar).toLocaleString("en-ZA")}`;

const Pricing = () => {
  const starterUsd = 1499;
  const growthUsd = 4999;
  const vatRate = 0.15; // South Africa VAT (if applicable)

  const starterZar = starterUsd * EXCHANGE_RATE_ZAR_PER_USD;
  const growthZar = growthUsd * EXCHANGE_RATE_ZAR_PER_USD;
  const starterVat = starterZar * vatRate;
  const growthVat = growthZar * vatRate;

  return (
    <div className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pricing</h1>
      <p className="text-primary/80 mb-8">
        Transparent pricing with indicative rates in South African Rand (ZAR). Final quotes are based on confirmed scope. Prices shown include VAT where applicable. We accept Visa, Mastercard, and bank transfer via Paystack.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Starter</h2>
          <p className="text-primary/80 mb-4">Ideal for small sites and MVPs.</p>
          <p className="text-3xl font-bold">{formatZAR(starterZar + starterVat)} <span className="text-base font-medium align-middle">incl. VAT</span></p>
          <p className="text-primary/60 mt-1 text-sm">Excl. VAT: {formatZAR(starterZar)} | VAT (15%): {formatZAR(starterVat)}</p>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Growth</h2>
          <p className="text-primary/80 mb-4">For growing businesses and apps.</p>
          <p className="text-3xl font-bold">{formatZAR(growthZar + growthVat)} <span className="text-base font-medium align-middle">incl. VAT</span></p>
          <p className="text-primary/60 mt-1 text-sm">Excl. VAT: {formatZAR(growthZar)} | VAT (15%): {formatZAR(growthVat)}</p>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
          <p className="text-primary/80 mb-4">Custom solutions and integrations.</p>
          <p className="text-3xl font-bold">Custom</p>
        </div>
      </div>
      <div className="bg-muted border rounded-lg p-4 mt-10 text-sm text-primary/80">
        <p className="mb-2"><span className="font-semibold">Notes:</span> Prices are indicative and subject to a detailed scope of work. Exchange rate used: {EXCHANGE_RATE_ZAR_PER_USD}:1 USD (for display only).</p>
        <p>Accepted payment methods: Visa, Mastercard, bank transfer via Paystack. No hidden fees; any third-party costs (domains, hosting, licenses) are quoted separately.</p>
      </div>
    </div>
  );
};

export default Pricing;


