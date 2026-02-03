import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-maroon text-cream">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-gold/50 flex items-center justify-center">
                <span className="font-serif text-lg font-bold text-gold">P</span>
              </div>
              <span className="font-serif text-xl font-semibold tracking-wide">
                PRIME PRO-TEAM
              </span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              The official Public Relations, Branding, Representation, and Advisory Team of the university.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-px bg-gold/30" />
              <span className="text-gold/60 text-xs tracking-widest">EST. 2024</span>
              <div className="w-8 h-px bg-gold/30" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/what-we-do', label: 'What We Do' },
                { href: '/events', label: 'Events & Campaigns' },
                { href: '/team', label: 'Our Team' },
                { href: '/partners', label: 'Partners' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">Resources</h4>
            <ul className="space-y-3">
              {[
                { href: '/media', label: 'Media Gallery' },
                { href: '/announcements', label: 'Announcements' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/contact', label: 'Partnership Inquiry' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold/60 mt-0.5 flex-shrink-0" />
                <span className="text-cream/60 text-sm">
                  University Campus<br />
                  Address to be updated
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold/60 flex-shrink-0" />
                <span className="text-cream/60 text-sm">contact@primeproteam.edu</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold/60 flex-shrink-0" />
                <span className="text-cream/60 text-sm">To be updated</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-cream/40 text-sm">
              © {new Date().getFullYear()} PRIME PRO-TEAM. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/admin" className="text-cream/40 hover:text-gold text-sm transition-colors duration-300">
                Admin Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
