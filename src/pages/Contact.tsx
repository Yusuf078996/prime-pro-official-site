import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', organization: '', subject: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-[0.2em] uppercase text-gold/80 border border-gold/30 rounded-full">
              Contact & Partnerships
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Let's Connect &
              <span className="text-gradient-gold block mt-2">Collaborate</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              Whether you're interested in partnership opportunities or have inquiries, 
              we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                Get in <span className="text-gradient-maroon">Touch</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-maroon flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-cream" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      University Campus<br />
                      Address to be updated
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-maroon flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-cream" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      contact@primeproteam.edu
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-maroon flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-cream" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      To be updated
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-xl bg-card border border-border">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  Partnership Inquiries
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For sponsorship and partnership opportunities, please use the form 
                  and indicate your interest in the subject line.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-elegant">
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                  Send us a <span className="text-gradient-maroon">Message</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Organization (Optional)
                      </label>
                      <Input
                        type="text"
                        placeholder="Company or organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-background"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="maroon" size="xl" className="w-full md:w-auto">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
