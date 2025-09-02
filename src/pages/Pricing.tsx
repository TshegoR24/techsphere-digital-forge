const Pricing = () => {
  return (
    <div className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pricing</h1>
      <p className="text-primary/80 mb-8">
        Transparent pricing tailored to your project needs. Contact us for a detailed quote.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Starter</h2>
          <p className="text-primary/80 mb-4">Ideal for small sites and MVPs.</p>
          <p className="text-3xl font-bold">$1,499+</p>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Growth</h2>
          <p className="text-primary/80 mb-4">For growing businesses and apps.</p>
          <p className="text-3xl font-bold">$4,999+</p>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
          <p className="text-primary/80 mb-4">Custom solutions and integrations.</p>
          <p className="text-3xl font-bold">Custom</p>
        </div>
      </div>
      <p className="text-primary/80 mt-10">All prices are estimates and may vary based on scope.</p>
    </div>
  );
};

export default Pricing;


