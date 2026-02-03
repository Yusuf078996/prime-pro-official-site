import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import Layout from '@/components/Layout';

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-[0.2em] uppercase text-gold/80 border border-gold/30 rounded-full">
              Our Team
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              The Faces Behind
              <span className="text-gradient-gold block mt-2">Excellence</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              Meet the dedicated professionals who bring passion, expertise, 
              and commitment to everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
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
              Leadership
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Executive <span className="text-gradient-maroon">Team</span>
            </h2>
          </motion.div>

          {/* Team Members Placeholder */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <motion.div
                key={index}
                className="group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Photo placeholder */}
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full bg-card border-2 border-border group-hover:border-gold/50 transition-colors duration-300 overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <User size={48} className="text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground/60 text-xs">Photo</p>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-maroon opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-cream text-sm font-medium">View Profile</p>
                  </div>
                </div>
                
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  Team Member
                </h3>
                <p className="text-muted-foreground text-sm">
                  Position Title
                </p>
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
              Team member profiles are managed through the admin dashboard. 
              Photos and information will appear here once added.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-wide">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
              Interested in <span className="text-gradient-gold">Joining?</span>
            </h2>
            <p className="text-cream/70 text-lg mb-8">
              We're always looking for passionate individuals who share our commitment 
              to excellence and professional development.
            </p>
            <p className="text-gold/60 text-sm">
              Recruitment information will be posted during open application periods.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
