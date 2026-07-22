const posts = [
  {
    title: "5 Web Design Trends for 2024",
    excerpt: "Stay ahead of the curve with these modern design approaches for your business website.",
    date: "May 2024",
  },
  {
    title: "How to Choose the Right Tech Stack",
    excerpt: "A quick guide to picking the best tools and frameworks for your next project.",
    date: "April 2024",
  },
  {
    title: "Boosting Conversions with UX Best Practices",
    excerpt: "Simple changes that can make a big difference in your website's performance.",
    date: "March 2024",
  },
];

const Insights = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <span className="block text-xs font-mono text-accent tracking-widest uppercase mb-4 text-center">// 04 · insights</span>
      <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-text mb-12 text-center">Insights &amp; Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <div key={i} className="bg-surface rounded-2xl border border-steel/60 p-8 flex flex-col hover:border-primary/50 transition-colors duration-300">
            <span className="text-xs text-accent font-mono uppercase mb-2">{post.date}</span>
            <h3 className="text-xl font-heading font-semibold text-text mb-2">{post.title}</h3>
            <p className="text-muted mb-4 flex-1 leading-relaxed">{post.excerpt}</p>
            <button className="mt-auto inline-block px-4 py-2 rounded-lg bg-accent text-background font-heading font-semibold hover:bg-accent/90 transition w-fit">Read More</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Insights; 