import { motion } from 'framer-motion';
import { Megaphone, Calendar, Camera, Handshake, Users, Globe } from 'lucide-react';
import Layout from '@/components/Layout';

const services = [
  {
    icon: Megaphone,
    title: 'Branding & Public Relations',
    description: 'Strategic brand positioning and comprehensive public relations campaigns that enhance institutional visibility and reputation.',
    features: [
      'Brand identity development',
      'Press releases and media relations',
      'Crisis communication management',
      'Social media strategy',
    ],
  },
  {
    icon: Calendar,
    title: 'Event Promotion & Advisory',
    description: 'End-to-end event marketing and strategic advisory services for university functions and initiatives.',
    features: [
      'Event conceptualization',
      'Marketing campaign development',
      'Promotional material design',
      'Post-event analysis and reporting',
    ],
  },
  {
    icon: Camera,
    title: 'Media & Content Creation',
    description: 'Professional media production and content development that captures the essence of our institution.',
    features: [
      'Photography and videography',
      'Graphic design services',
      'Content writing and copywriting',
      'Digital asset management',
    ],
  },
  {
    icon: Handshake,
    title: 'Partnerships & Sponsorships',
    description: 'Strategic partnership development and sponsorship acquisition that creates mutual value.',
    features: [
      'Partner identification and outreach',
      'Proposal development',
      'Relationship management',
      'Sponsorship package creation',
    ],
  },
  {
    icon: Users,
    title: 'Institutional Representation',
    description: 'Professional representation at conferences, events, and external engagements.',
    features: [
      'Delegate selection and training',
      'Protocol and etiquette guidance',
      'Speaking engagements',
      'External liaison services',
    ],
  },
  {
    icon: Globe,
    title: 'Digital Presence Management',
    description: 'Comprehensive digital strategy and online presence optimization for maximum impact.',
    features: [
      'Website content management',
      'Social media management',
      'Online reputation monitoring',
      'Digital campaign execution',
    ],
  },
];

const WhatWeDo = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-[0.2em] uppercase text-gold/80 border border-gold/30 rounded-full">
              Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              What We
              <span className="text-gradient-gold block mt-2">Do</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              From strategic communications to event management, we deliver comprehensive 
              solutions that elevate our institution's presence and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-cream">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/50 hover:shadow-elegant transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-maroon flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-cream" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-maroon/60 mb-4 block">
              Our Approach
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              How We <span className="text-gradient-maroon">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our systematic approach ensures consistent excellence across all projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discover', desc: 'Understanding your needs and objectives' },
              { step: '02', title: 'Strategize', desc: 'Developing comprehensive action plans' },
              { step: '03', title: 'Execute', desc: 'Implementing with precision and care' },
              { step: '04', title: 'Evaluate', desc: 'Measuring impact and refining approach' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="text-5xl font-serif font-bold text-gradient-maroon mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;
