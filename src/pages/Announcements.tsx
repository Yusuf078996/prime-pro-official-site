import { motion } from 'framer-motion';
import { Bell, Calendar } from 'lucide-react';
import Layout from '@/components/Layout';

const Announcements = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-[0.2em] uppercase text-gold/80 border border-gold/30 rounded-full">
              Announcements & Updates
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Stay
              <span className="text-gradient-gold block mt-2">Informed</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              Latest news, updates, and announcements from PRIME PRO-TEAM.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Announcements List */}
      <section className="section-padding bg-gradient-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {/* Placeholder Announcements */}
            {[1, 2, 3, 4, 5].map((_, index) => (
              <motion.article
                key={index}
                className="mb-8 p-8 rounded-2xl bg-card border border-border hover:border-gold/50 hover:shadow-elegant transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-maroon flex items-center justify-center">
                    <Bell size={28} className="text-cream" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar size={14} className="mr-1.5" />
                      <span>Date TBD</span>
                      <span className="mx-3">•</span>
                      <span className="px-2 py-0.5 bg-muted rounded text-xs">Category</span>
                    </div>
                    <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                      Announcement Title
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Announcement content will be displayed here. All announcements and updates 
                      are managed through the admin dashboard and will appear once added.
                    </p>
                    <button className="text-maroon hover:text-maroon-light font-medium text-sm transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Empty state message */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground">
                Announcements are managed through the admin dashboard. 
                Content will appear here once published.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Announcements;
