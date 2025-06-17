
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">TechSphere Solutions</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses through innovative technology solutions. 
              We transform ideas into powerful digital experiences that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Custom Software</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">CRM Solutions</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Tech Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TechSphere Solutions. All rights reserved. | 
            <a href="#" className="hover:text-blue-400 transition-colors ml-1">Privacy Policy</a> |
            <a href="#" className="hover:text-blue-400 transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
