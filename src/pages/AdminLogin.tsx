import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Demo credentials check (will be replaced with proper auth)
    if (username === 'Yusuf000' && password === 'Yusufsul1234') {
      localStorage.setItem('admin_authenticated', 'true');
      toast.success('Login successful! Redirecting to dashboard...');
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 1000);
    } else {
      toast.error('Invalid credentials. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full border-2 border-gold/50 flex items-center justify-center mx-auto mb-4">
            <span className="font-serif text-2xl font-bold text-gold">P</span>
          </div>
          <h1 className="font-serif text-2xl text-cream font-semibold">
            PRIME PRO-TEAM
          </h1>
          <p className="text-cream/60 text-sm mt-2">Admin Portal</p>
        </div>

        {/* Login Card */}
        <div className="p-8 rounded-2xl bg-card border border-border shadow-elegant">
          <h2 className="font-serif text-xl text-foreground text-center mb-6">
            Sign In
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Username
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 bg-background"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 bg-background"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              variant="maroon"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <p className="text-center text-muted-foreground text-xs mt-6">
            This portal is for authorized personnel only.
          </p>
        </div>

        {/* Back to website */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-cream/60 hover:text-gold text-sm transition-colors"
          >
            ← Back to Website
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
