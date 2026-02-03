import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Handshake, Megaphone, Award } from 'lucide-react';
import Layout from '@/components/Layout';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cream/5 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-[0.2em] uppercase text-gold/80 border border-gold/30 rounded-full">
                Official University PR & Branding Team
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Shaping the Voice of
              <span className="block text-gradient-gold mt-2">Excellence</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              PRIME PRO-TEAM is the official Public Relations, Branding, 
              Representation, and Advisory Team — dedicated to elevating our 
              institution's presence and partnerships.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/about">
                <Button variant="hero" size="xl" className="group">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Partner With Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity } }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-gold"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-gradient-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-maroon/60 mb-4 block">
                About Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Building Bridges,
                <span className="text-gradient-maroon block">Creating Impact</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                PRIME PRO-TEAM stands as the official face and voice of our university. 
                We specialize in strategic communications, event promotion, partnership 
                development, and institutional representation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of dedicated professionals works tirelessly to ensure our 
                institution's message resonates with clarity, professionalism, and impact.
              </p>
              <Link to="/about">
                <Button variant="maroon" size="lg" className="group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Placeholder for image upload */}
              <div className="aspect-[4/3] rounded-2xl bg-card border-2 border-dashed border-border flex items-center justify-center overflow-hidden shadow-elegant">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <Users size={32} className="text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Team photo will be displayed here
                  </p>
                  <p className="text-muted-foreground/60 text-xs mt-1">
                    Managed via Admin Dashboard
                  </p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-2xl -z-10 opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
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
              What We Do
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Our Core <span className="text-gradient-maroon">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From strategic branding to event management, we deliver excellence 
              across all facets of institutional representation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Megaphone,
                title: 'Branding & PR',
                description: 'Strategic communications and brand positioning',
              },
              {
                icon: Award,
                title: 'Event Promotion',
                description: 'Comprehensive event marketing and advisory',
              },
              {
                icon: Handshake,
                title: 'Partnerships',
                description: 'Building valuable corporate relationships',
              },
              {
                icon: Users,
                title: 'Representation',
                description: 'Professional institutional advocacy',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/50 hover:shadow-elegant transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-maroon flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} className="text-cream" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/what-we-do">
              <Button variant="outline" size="lg" className="group">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-wide">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-6">
              Ready to Partner with <span className="text-gradient-gold">Excellence?</span>
            </h2>
            <p className="text-cream/70 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're looking to collaborate, sponsor an event, or explore 
              partnership opportunities, we're here to build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/partners">
                <Button variant="heroOutline" size="xl">
                  View Our Partners
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
