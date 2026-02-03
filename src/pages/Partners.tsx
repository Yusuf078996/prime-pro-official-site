import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Partners = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-1/2 left-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-[0.2em] uppercase text-gold/80 border border-gold/30 rounded-full">
              Partners & Collaborations
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Building Lasting
              <span className="text-gradient-gold block mt-2">Partnerships</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              We collaborate with organizations that share our commitment to excellence 
              and community development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
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
              Our Network
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Valued <span className="text-gradient-maroon">Partners</span>
            </h2>
          </motion.div>

          {/* Partner Logos Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <motion.div
                key={index}
                className="aspect-[3/2] rounded-xl bg-card border border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300 flex items-center justify-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-center">
                  <Building2 size={40} className="text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">Partner Logo</p>
                  <p className="text-muted-foreground/60 text-xs mt-1">Admin managed</p>
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
              Partner logos and information are managed through the admin dashboard. 
              Content will appear here once added.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-card border border-border shadow-elegant"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Become a <span className="text-gradient-maroon">Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join our network of valued partners and collaborate with us to create 
              meaningful impact. We offer tailored partnership packages to meet your objectives.
            </p>
            <Link to="/contact">
              <Button variant="maroon" size="xl">
                Inquire About Partnership
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
