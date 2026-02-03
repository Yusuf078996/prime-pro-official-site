import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield } from 'lucide-react';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-[0.2em] uppercase text-gold/80 border border-gold/30 rounded-full">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              The Face & Voice of
              <span className="text-gradient-gold block mt-2">Our Institution</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              PRIME PRO-TEAM serves as the official Public Relations, Branding, 
              Representation, and Advisory Team of the university.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              className="p-10 rounded-2xl bg-card shadow-elegant border border-border"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-maroon flex items-center justify-center mb-6">
                <Target size={32} className="text-cream" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To elevate the university's presence through strategic public relations, 
                innovative branding, and professional representation. We are committed to 
                building meaningful partnerships and fostering a positive institutional image 
                that reflects our values of excellence, integrity, and community.
              </p>
            </motion.div>

            <motion.div
              className="p-10 rounded-2xl bg-card shadow-elegant border border-border"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6">
                <Eye size={32} className="text-charcoal" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as the premier student-led public relations organization, 
                setting the standard for institutional representation and partnership 
                development. We envision a future where every voice is amplified, every 
                event is memorable, and every partnership creates lasting impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Foundation
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Core <span className="text-gradient-maroon">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Integrity',
                description: 'We uphold the highest ethical standards in all our endeavors.',
              },
              {
                icon: Target,
                title: 'Excellence',
                description: 'We strive for perfection in every project we undertake.',
              },
              {
                icon: Heart,
                title: 'Commitment',
                description: 'We are dedicated to our institution and its community.',
              },
              {
                icon: Eye,
                title: 'Innovation',
                description: 'We embrace creative solutions and forward-thinking strategies.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-maroon flex items-center justify-center mx-auto mb-6">
                  <value.icon size={28} className="text-cream" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Statement */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-wide">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-px bg-gold mx-auto mb-8" />
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed italic mb-8">
              "We are not a political organization. We are professionals dedicated 
              solely to the advancement and positive representation of our institution."
            </blockquote>
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <p className="text-gold text-sm tracking-[0.2em] uppercase">
              Prime Pro-Team Core Principle
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
