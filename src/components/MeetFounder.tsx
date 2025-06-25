const MeetFounder = () => (
  <section className="py-20 bg-surface">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
      {/* Placeholder photo */}
      <div className="flex-shrink-0">
        <div className="w-40 h-40 rounded-full bg-accent/10 flex items-center justify-center overflow-hidden shadow-xl border-4 border-accent/20">
          <img
            src="/e0df0d4d-e0dd-4ce4-83d5-40311c10e3d8.jpg"
            alt="Founder Tshegofats Rakoma"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      {/* Founder info */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-heading font-extrabold text-primary mb-2">Meet the Founder</h2>
        <h3 className="text-xl font-heading text-accent mb-2">Tshegofats Rakoma</h3>
        <p className="text-lg font-sans text-text mb-4">Founder & Lead Developer</p>
        <p className="text-text font-sans max-w-xl mx-auto md:mx-0">
          Hi! I'm Tshegofats Rakoma, a passionate web and software developer dedicated to helping businesses grow through technology. I work directly with every client to ensure your vision is brought to life with care, creativity, and technical excellence.
        </p>
      </div>
    </div>
  </section>
);

export default MeetFounder; 