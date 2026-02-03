import { motion } from 'framer-motion';
import { Image } from 'lucide-react';
import Layout from '@/components/Layout';

const Media = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-[0.2em] uppercase text-gold/80 border border-gold/30 rounded-full">
              Media Gallery
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Capturing
              <span className="text-gradient-gold block mt-2">Moments</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              A visual journey through our events, campaigns, and institutional milestones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
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
              Photo Gallery
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Visual <span className="text-gradient-maroon">Stories</span>
            </h2>
          </motion.div>

          {/* Gallery Placeholder - Masonry-like grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { span: 'col-span-2 row-span-2' },
              { span: '' },
              { span: '' },
              { span: '' },
              { span: 'col-span-2' },
              { span: '' },
              { span: '' },
              { span: 'col-span-2 row-span-2' },
              { span: '' },
              { span: '' },
              { span: 'col-span-2' },
              { span: '' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`${item.span} aspect-square rounded-xl bg-card border border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden group cursor-pointer`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="text-center p-4">
                  <Image size={32} className="text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Gallery Image</p>
                  <p className="text-muted-foreground/60 text-xs mt-1">Admin managed</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-maroon opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-cream text-sm font-medium">View</p>
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
              Gallery images are managed through the admin dashboard. 
              Photos will appear here once uploaded.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
