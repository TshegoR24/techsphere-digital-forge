
import { Code, Briefcase, Users, Pen, Contact } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements, from desktop applications to enterprise systems."
    },
    {
      icon: Briefcase,
      title: "Web & Mobile App Development",
      description: "Responsive websites and mobile applications that deliver exceptional user experiences across all platforms and devices."
    },
    {
      icon: Users,
      title: "CRM Solutions",
      description: "Customer relationship management systems that help you organize, automate, and synchronize your business processes."
    },
    {
      icon: Pen,
      title: "Website Maintenance & SEO",
      description: "Ongoing website maintenance, performance optimization, and search engine optimization to keep your online presence strong."
    },
    {
      icon: Contact,
      title: "Tech Consulting",
      description: "Strategic technology consulting to help you make informed decisions about your digital infrastructure and growth."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth 
            and enhance your competitive advantage in the digital marketplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
