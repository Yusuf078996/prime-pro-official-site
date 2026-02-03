import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  FileText,
  Image,
  Calendar,
  Users,
  Handshake,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  Eye,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: FileText, label: 'Content', id: 'content' },
  { icon: Image, label: 'Media', id: 'media' },
  { icon: Calendar, label: 'Events', id: 'events' },
  { icon: Users, label: 'Team', id: 'team' },
  { icon: Handshake, label: 'Partners', id: 'partners' },
  { icon: Bell, label: 'Announcements', id: 'announcements' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('admin_authenticated');
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    toast.success('Logged out successfully');
    navigate('/admin');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'content':
        return <ContentManager />;
      case 'media':
        return <MediaManager />;
      case 'events':
        return <EventsManager />;
      case 'team':
        return <TeamManager />;
      case 'partners':
        return <PartnersManager />;
      case 'announcements':
        return <AnnouncementsManager />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border shadow-md"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-maroon flex items-center justify-center">
                <span className="font-serif text-lg font-bold text-cream">P</span>
              </div>
              <div>
                <h1 className="font-serif text-lg font-semibold text-foreground">
                  Admin Panel
                </h1>
                <p className="text-xs text-muted-foreground">PRIME PRO-TEAM</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-gradient-maroon text-cream'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border space-y-2">
            <Link to="/" target="_blank">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Eye size={16} className="mr-2" />
                View Website
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-destructive hover:text-destructive"
              onClick={handleLogout}
            >
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 pt-16 lg:pt-8 overflow-auto">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

// Dashboard Overview Component
const DashboardOverview = () => (
  <div>
    <h1 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
      Welcome to Admin Dashboard
    </h1>
    <p className="text-muted-foreground mb-8">
      Manage your website content, media, and settings from here.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {[
        { label: 'Events', count: 0, icon: Calendar },
        { label: 'Team Members', count: 0, icon: Users },
        { label: 'Partners', count: 0, icon: Handshake },
        { label: 'Announcements', count: 0, icon: Bell },
      ].map((stat) => (
        <div key={stat.label} className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-4">
            <stat.icon size={24} className="text-maroon" />
            <span className="text-3xl font-bold text-foreground">{stat.count}</span>
          </div>
          <p className="text-muted-foreground text-sm">{stat.label}</p>
        </div>
      ))}
    </div>

    <div className="p-8 rounded-xl bg-card border border-border text-center">
      <Home size={48} className="text-muted-foreground mx-auto mb-4" />
      <h2 className="font-serif text-xl text-foreground mb-2">
        Getting Started
      </h2>
      <p className="text-muted-foreground max-w-md mx-auto">
        Use the sidebar to navigate between different sections. 
        Add content, manage media, and customize your website.
      </p>
    </div>
  </div>
);

// Content Manager Component
const ContentManager = () => (
  <div>
    <h1 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
      Content Management
    </h1>
    <p className="text-muted-foreground mb-8">
      Edit website text content including About, Mission, and Services sections.
    </p>

    <div className="p-8 rounded-xl bg-card border border-border text-center">
      <FileText size={48} className="text-muted-foreground mx-auto mb-4" />
      <p className="text-muted-foreground">
        Content editing functionality will be available once connected to the database.
      </p>
    </div>
  </div>
);

// Media Manager Component
const MediaManager = () => (
  <div>
    <h1 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
      Media Library
    </h1>
    <p className="text-muted-foreground mb-8">
      Upload and manage images for the website gallery and other sections.
    </p>

    <div className="p-8 rounded-xl bg-card border border-border text-center">
      <Image size={48} className="text-muted-foreground mx-auto mb-4" />
      <p className="text-muted-foreground">
        Media upload functionality will be available once connected to storage.
      </p>
    </div>
  </div>
);

// Events Manager Component
const EventsManager = () => (
  <div>
    <h1 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
      Events & Campaigns
    </h1>
    <p className="text-muted-foreground mb-8">
      Create, edit, and manage events and campaigns.
    </p>

    <div className="p-8 rounded-xl bg-card border border-border text-center">
      <Calendar size={48} className="text-muted-foreground mx-auto mb-4" />
      <p className="text-muted-foreground">
        Event management will be available once connected to the database.
      </p>
    </div>
  </div>
);

// Team Manager Component
const TeamManager = () => (
  <div>
    <h1 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
      Team Members
    </h1>
    <p className="text-muted-foreground mb-8">
      Add, edit, and remove team member profiles.
    </p>

    <div className="p-8 rounded-xl bg-card border border-border text-center">
      <Users size={48} className="text-muted-foreground mx-auto mb-4" />
      <p className="text-muted-foreground">
        Team management will be available once connected to the database.
      </p>
    </div>
  </div>
);

// Partners Manager Component
const PartnersManager = () => (
  <div>
    <h1 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
      Partners & Collaborations
    </h1>
    <p className="text-muted-foreground mb-8">
      Manage partner logos and collaboration information.
    </p>

    <div className="p-8 rounded-xl bg-card border border-border text-center">
      <Handshake size={48} className="text-muted-foreground mx-auto mb-4" />
      <p className="text-muted-foreground">
        Partner management will be available once connected to the database.
      </p>
    </div>
  </div>
);

// Announcements Manager Component
const AnnouncementsManager = () => (
  <div>
    <h1 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
      Announcements & Updates
    </h1>
    <p className="text-muted-foreground mb-8">
      Create and publish news and announcements.
    </p>

    <div className="p-8 rounded-xl bg-card border border-border text-center">
      <Bell size={48} className="text-muted-foreground mx-auto mb-4" />
      <p className="text-muted-foreground">
        Announcement management will be available once connected to the database.
      </p>
    </div>
  </div>
);

// Settings Panel Component
const SettingsPanel = () => (
  <div>
    <h1 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
      Settings
    </h1>
    <p className="text-muted-foreground mb-8">
      Configure website settings and preferences.
    </p>

    <div className="p-8 rounded-xl bg-card border border-border text-center">
      <Settings size={48} className="text-muted-foreground mx-auto mb-4" />
      <p className="text-muted-foreground">
        Settings panel will be available once connected to the database.
      </p>
    </div>
  </div>
);

export default AdminDashboard;
