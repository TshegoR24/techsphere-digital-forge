import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
    <Navigation />
    <div className="px-6 pt-32 pb-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-heading font-semibold text-text mb-6">Privacy Policy</h1>
      <p className="text-muted mb-4">
        This Privacy Policy explains how TechSphere Solutions ("TechSphere", "we", "us") collects, uses, discloses, and protects your personal information when you use our website and services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Controller Details</h2>
      <p className="text-muted mb-4">
        TechSphere Solutions is the responsible party for purposes of the Protection of Personal Information Act, 2013 (POPIA). If you have questions about this policy or your rights, please contact us at <a className="text-accent underline" href="mailto:ts.techsphere@gmail.com">ts.techsphere@gmail.com</a>.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Information We Collect</h2>
      <ul className="list-disc pl-5 text-muted space-y-2">
        <li>
          Information you provide: name, email address, phone number, company, project details, and any messages sent via forms or email.
        </li>
        <li>
          Transaction data: billing details, payment confirmations, and order history when you purchase services.
        </li>
        <li>
          Usage and device data: IP address, browser type, pages visited, and referring URLs collected via cookies and analytics.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">Lawful Bases for Processing</h2>
      <p className="text-muted mb-4">
        We process personal information based on consent, performance of a contract, compliance with legal obligations, and our legitimate interests (such as improving services and website security).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
      <ul className="list-disc pl-5 text-muted space-y-2">
        <li>Provide, operate, and improve our services and website.</li>
        <li>Respond to inquiries, provide support, and communicate about projects.</li>
        <li>Process payments and manage invoicing and accounting records.</li>
        <li>Detect, prevent, and address fraud, security, or technical issues.</li>
        <li>Comply with legal and regulatory requirements.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">Sharing and Disclosure</h2>
      <p className="text-muted mb-4">
        We do not sell personal information. We may share data with trusted service providers (e.g., hosting, analytics, and payment processors) under contracts that require them to protect your information and use it only for the services provided to us. We may also disclose information where required by law or to protect our rights.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">International Transfers</h2>
      <p className="text-muted mb-4">
        Your information may be transferred to and processed in countries outside South Africa. Where we transfer data internationally, we implement appropriate safeguards consistent with POPIA requirements.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Data Retention</h2>
      <p className="text-muted mb-4">
        We retain personal information only as long as necessary for the purposes described in this policy and to comply with legal, tax, and accounting obligations. Typical periods: contact inquiries (up to 12 months), project records (up to 5 years after completion), and invoicing/payment records (7 years or as required by law).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Cookies and Analytics</h2>
      <p className="text-muted mb-4">
        We use cookies and similar technologies to improve functionality and analyze usage. You can control cookies through your browser settings. Disabling certain cookies may impact site functionality.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Your Rights</h2>
      <p className="text-muted mb-4">
        Under POPIA, you have the right to request access to, correction or deletion of your personal information, object to processing, and withdraw consent where processing is based on consent. You may also lodge a complaint with the Information Regulator. To exercise your rights, contact us at <a className="text-accent underline" href="mailto:ts.techsphere@gmail.com">ts.techsphere@gmail.com</a>.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Data Security</h2>
      <p className="text-muted mb-4">
        We implement reasonable technical and organizational measures to protect personal information, including encryption in transit (TLS/SSL), access controls, and regular monitoring. No method of transmission or storage is completely secure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Children</h2>
      <p className="text-muted mb-4">
        Our services are intended for business customers and are not directed to children under 18. We do not knowingly collect personal information from children.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Changes to This Policy</h2>
      <p className="text-muted mb-4">
        We may update this policy from time to time. We will revise the "Last updated" date below and, where appropriate, provide additional notice.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Contact Us</h2>
      <p className="text-muted mb-4">
        If you have questions about this policy or our data practices, please contact us via the details on our <a className="text-accent underline" href="/#contact">Contact</a> section or email <a className="text-accent underline" href="mailto:ts.techsphere@gmail.com">ts.techsphere@gmail.com</a>.
      </p>

      <p className="text-muted mt-10">Last updated: 2025</p>
    </div>
    <Footer />
    </div>
  );
};

export default Privacy;


