
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
              
              {[
                { icon: "📧", title: "Email", value: "mohammed.ateeq@example.com", link: "mailto:mohammed.ateeq@example.com" },
                { icon: "💼", title: "LinkedIn", value: "Connect with me", link: "#" },
                { icon: "🐙", title: "GitHub", value: "View my repositories", link: "#" },
                { icon: "📱", title: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" }
              ].map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.link}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group"
                  data-hover="true"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="text-3xl">{contact.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                      {contact.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {["💙", "🐦", "📸", "💼"].map((social, index) => (
                <motion.button
                  key={index}
                  className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center justify-center text-xl hover:from-cyan-500/30 hover:to-purple-600/30 transition-all duration-300"
                  data-hover="true"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label className="block text-gray-300 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label className="block text-gray-300 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-4 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold text-lg shadow-2xl shadow-cyan-500/25 hover:shadow-purple-500/25 transition-all duration-300"
                data-hover="true"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message 🚀
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
