import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="px-6 pt-32 pb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-heading font-semibold text-text mb-6">Terms of Service</h1>
        <p className="text-muted mb-4 leading-relaxed">
          These Terms of Service ("Terms") govern your use of TechSphere Solutions' website and services. By accessing or using our site, you agree to be bound by these Terms.
        </p>
        <h2 className="text-xl font-heading font-semibold text-text mt-8 mb-3">Use of Services</h2>
        <p className="text-muted mb-4 leading-relaxed">
          You agree to use our services only for lawful purposes and in accordance with these Terms. We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.
        </p>
        <h2 className="text-xl font-heading font-semibold text-text mt-8 mb-3">Intellectual Property</h2>
        <p className="text-muted mb-4 leading-relaxed">
          All content, trademarks, and logos are the property of TechSphere Solutions or its licensors and are protected by applicable laws.
        </p>
        <h2 className="text-xl font-heading font-semibold text-text mt-8 mb-3">Limitation of Liability</h2>
        <p className="text-muted mb-4 leading-relaxed">
          To the fullest extent permitted by law, TechSphere Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
        </p>
        <h2 className="text-xl font-heading font-semibold text-text mt-8 mb-3">Changes to Terms</h2>
        <p className="text-muted mb-4 leading-relaxed">
          We may update these Terms from time to time. Continued use of the site after changes constitutes acceptance of the updated Terms.
        </p>
        <p className="text-muted mt-10">Last updated: 2024</p>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;


