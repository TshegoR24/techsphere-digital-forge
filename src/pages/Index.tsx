import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import MeetFounder from "@/components/MeetFounder";
import Insights from "@/components/Insights";
import FAQ from "@/components/FAQ";
import FloatingCTA from "@/components/FloatingCTA";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingCTA />
      <Navigation />
      <Hero />
      <WhyChooseUs />
      <About />
      <MeetFounder />
      <Services />
      <Portfolio />
      <Insights />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
