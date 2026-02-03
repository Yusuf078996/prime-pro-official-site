import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Events = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-[0.2em] uppercase text-gold/80 border border-gold/30 rounded-full">
              Events & Campaigns
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Creating Memorable
              <span className="text-gradient-gold block mt-2">Experiences</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              From flagship university events to targeted campaigns, we bring ideas to life 
              with creativity and strategic precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Categories */}
      <section className="section-padding bg-gradient-cream">
        <div className="container-wide">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-maroon/60 mb-4 block">
              Our Events
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Upcoming & Past <span className="text-gradient-maroon">Events</span>
            </h2>
          </motion.div>

          {/* Placeholder Events */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <motion.div
                key={index}
                className="group rounded-2xl bg-card border border-border hover:border-gold/50 hover:shadow-elegant transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center p-4">
                    <Calendar size={32} className="text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">Event image</p>
                    <p className="text-muted-foreground/60 text-xs">Admin managed</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1.5" />
                      <span>TBD</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1.5" />
                      <span>TBD</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    Event Title
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Event description will be displayed here. Managed through the admin dashboard.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state message */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground">
              Events and campaigns are managed through the admin dashboard. 
              Content will appear here once added.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
