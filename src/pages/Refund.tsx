const Refund = () => {
  return (
    <div className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
      <p className="text-primary/80 mb-4">
        We stand behind our work and aim for your satisfaction. This policy explains when refunds may be available, applicable timeframes, and how to submit a request.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Eligibility</h2>
      <ul className="list-disc pl-5 text-primary/80 space-y-2">
        <li>Material defects in deliverables that are not resolved after reasonable revisions.</li>
        <li>Non-delivery of agreed scope where no work product has been provided.</li>
        <li>Duplicate or erroneous charges.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">Non-Refundable Items</h2>
      <ul className="list-disc pl-5 text-primary/80 space-y-2">
        <li>Deposits once project work has commenced.</li>
        <li>Hours spent on discovery, consulting, and delivered work that meets specifications.</li>
        <li>Third-party costs (e.g., domains, hosting, licenses) already incurred on your behalf.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">Timeframes</h2>
      <p className="text-primary/80 mb-4">
        Refund requests must be submitted within 30 days of the relevant invoice date or delivery of the milestone, whichever is later.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Milestones and Revisions</h2>
      <p className="text-primary/80 mb-4">
        We will provide revisions aligned to the agreed scope. If after reasonable attempts the requirements cannot be met, a partial refund for the relevant milestone may be offered at our discretion.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Support & Maintenance</h2>
      <p className="text-primary/80 mb-4">
        Prepaid support plans are refundable on a prorated basis for unused months when cancelled with at least 14 days’ notice before the next billing cycle.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">How to Request a Refund</h2>
      <ol className="list-decimal pl-5 text-primary/80 space-y-2">
        <li>Email <a className="text-primary underline" href="mailto:ts.techsphere@gmail.com">ts.techsphere@gmail.com</a> with your invoice number and reason.</li>
        <li>Include relevant documentation (statement of work, screenshots, correspondence).</li>
        <li>We will acknowledge within 2 business days and complete a review within 7 business days.</li>
      </ol>

      <h2 className="text-xl font-semibold mt-8 mb-3">Refund Method</h2>
      <p className="text-primary/80 mb-4">
        Approved refunds are processed via the original payment method (e.g., card, bank transfer) through our payment processor. Processing times may vary by bank.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>
      <p className="text-primary/80 mb-4">
        Questions? Contact our support team at <a className="text-primary underline" href="mailto:ts.techsphere@gmail.com">ts.techsphere@gmail.com</a>.
      </p>

      <p className="text-primary/80 mt-10">Last updated: 2025</p>
    </div>
  );
};

export default Refund;


