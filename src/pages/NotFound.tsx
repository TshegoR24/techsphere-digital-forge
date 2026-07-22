import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background orbit-grid">
      <div className="text-center relative z-10">
        <span className="block text-xs font-mono text-accent tracking-widest uppercase mb-4">// 404</span>
        <h1 className="text-6xl font-heading font-semibold text-text mb-4">Lost in orbit</h1>
        <p className="text-lg text-muted mb-6">This page doesn't exist.</p>
        <a href="/" className="text-accent hover:underline font-medium">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
