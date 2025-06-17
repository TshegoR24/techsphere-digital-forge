
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About TechSphere Solutions
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Empowering Businesses Through Innovative Technology
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At TechSphere Solutions, we believe that technology should be a catalyst for growth, 
              not a barrier. Our mission is to empower businesses of all sizes by delivering 
              innovative, scalable, and efficient digital solutions that drive real results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience in software development, web technologies, and digital 
              transformation, we partner with our clients to understand their unique challenges 
              and create tailored solutions that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Innovation First</h4>
                  <p className="text-gray-600">We stay ahead of technology trends to deliver cutting-edge solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Client-Centric</h4>
                  <p className="text-gray-600">Your success is our priority. We build lasting partnerships.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">03</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quality Assured</h4>
                  <p className="text-gray-600">Rigorous testing and quality control in every project.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
