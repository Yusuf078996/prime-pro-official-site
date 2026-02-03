import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-24 h-24 rounded-full border-2 border-gold/30 flex items-center justify-center mx-auto mb-8">
          <span className="font-serif text-5xl font-bold text-gold">404</span>
        </div>
        
        <h1 className="font-serif text-3xl md:text-4xl text-cream mb-4">
          Page Not Found
        </h1>
        
        <p className="text-cream/60 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/">
          <Button variant="hero" size="lg">
            <Home size={18} className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
