import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';

const ContactSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);

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
    <motion.section 
      ref={ref}
      id="contact" 
      className="min-h-screen py-20 px-6 relative"
      style={{ y, opacity, scale, rotateX }}
    >
      <motion.div
        ref={inViewRef}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 100, scale: 0.5, rotateX: -90 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
          transition={{ 
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            whileInView={{ letterSpacing: "normal", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                filter: [
                  "hue-rotate(0deg)",
                  "hue-rotate(180deg)",
                  "hue-rotate(360deg)"
                ]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Let's Connect
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full mt-6"
            initial={{ width: 0, opacity: 0, rotateZ: 180 }}
            whileInView={{ width: 96, opacity: 1, rotateZ: 0 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(236, 72, 153, 0.5)",
                "0 0 40px rgba(6, 182, 212, 0.5)",
                "0 0 20px rgba(236, 72, 153, 0.5)"
              ]
            }}
            transition={{
              width: { duration: 1.5, delay: 0.7 },
              opacity: { duration: 1.5, delay: 0.7 },
              rotateZ: { duration: 1.5, delay: 0.7 },
              boxShadow: { duration: 3, repeat: Infinity }
            }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Enhanced Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100, rotateY: -45 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ 
              duration: 1.2, 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
            style={{
              y: useTransform(scrollYProgress, [0.2, 0.8], ["0px", "-20px"])
            }}
          >
            <div className="space-y-6">
              <motion.h3 
                className="text-3xl font-bold text-white mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.5)",
                    "0 0 40px rgba(6, 182, 212, 0.5)",
                    "0 0 20px rgba(255, 255, 255, 0.5)"
                  ]
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.2 },
                  scale: { duration: 0.8, delay: 0.2 },
                  textShadow: { duration: 3, repeat: Infinity }
                }}
              >
                Get In Touch
              </motion.h3>
              
              {[
                { icon: "📧", title: "Email", value: "mohammed.ateeq@example.com", link: "mailto:mohammed.ateeq@example.com" },
                { icon: "💼", title: "LinkedIn", value: "Connect with me", link: "#" },
                { icon: "🐙", title: "GitHub", value: "View my repositories", link: "#" },
                { icon: "📱", title: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" }
              ].map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.link}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group relative overflow-hidden"
                  data-hover="true"
                  initial={{ 
                    opacity: 0, 
                    y: 50, 
                    scale: 0.8,
                    rotateX: -30
                  }}
                  animate={inView ? { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    rotateX: 0
                  } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + (index * 0.15),
                    type: "spring",
                    stiffness: 150
                  }}
                  whileHover={{ 
                    scale: 1.03, 
                    x: 15,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)"
                  }}
                >
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: 180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div 
                    className="text-3xl relative z-10"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                      filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))"
                    }}
                  >
                    {contact.icon}
                  </motion.div>
                  <div className="relative z-10">
                    <motion.h4 
                      className="text-white font-semibold group-hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {contact.title}
                    </motion.h4>
                    <motion.p 
                      className="text-gray-400 text-sm"
                      whileHover={{ 
                        color: "#d1d5db",
                        x: 5
                      }}
                    >
                      {contact.value}
                    </motion.p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <motion.div
              className="flex gap-4 pt-8"
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 1, 
                delay: 1.2,
                type: "spring",
                stiffness: 150
              }}
            >
              {["💙", "🐦", "📸", "💼"].map((social, index) => (
                <motion.button
                  key={index}
                  className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center justify-center text-xl hover:from-cyan-500/30 hover:to-purple-600/30 transition-all duration-300 relative overflow-hidden"
                  data-hover="true"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    borderColor: "#06b6d4",
                    boxShadow: "0 10px 30px rgba(6, 182, 212, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ 
                    opacity: 0, 
                    scale: 0, 
                    rotate: -180 
                  }}
                  animate={inView ? { 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0 
                  } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.4 + (index * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <motion.span
                    animate={{
                      filter: [
                        "hue-rotate(0deg)",
                        "hue-rotate(360deg)"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {social}
                  </motion.span>
                  
                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 border border-cyan-400 rounded-full opacity-0"
                    whileHover={{
                      scale: [1, 1.5, 2],
                      opacity: [0.5, 0.2, 0]
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ 
              duration: 1.2, 
              delay: 0.6,
              type: "spring",
              stiffness: 100
            }}
            style={{
              y: useTransform(scrollYProgress, [0.2, 0.8], ["0px", "-30px"])
            }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial={{ filter: "blur(10px)" }}
              whileInView={{ filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30, rotateX: -30 }}
                  animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8,
                    type: "spring",
                    stiffness: 150
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.label 
                    className="block text-gray-300 mb-2 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Name
                  </motion.label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 relative"
                    placeholder="Your Name"
                    required
                    whileFocus={{
                      scale: 1.02,
                      borderColor: "#06b6d4",
                      boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)"
                    }}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30, rotateX: -30 }}
                  animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.9,
                    type: "spring",
                    stiffness: 150
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.label 
                    className="block text-gray-300 mb-2 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Email
                  </motion.label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                    whileFocus={{
                      scale: 1.02,
                      borderColor: "#06b6d4",
                      boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)"
                    }}
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: -30 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 1,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ scale: 1.01 }}
              >
                <motion.label 
                  className="block text-gray-300 mb-2 font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Message
                </motion.label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-4 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                  whileFocus={{
                    scale: 1.01,
                    borderColor: "#06b6d4",
                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)"
                  }}
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold text-lg shadow-2xl shadow-cyan-500/25 hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden"
                data-hover="true"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.1,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 30px 60px rgba(6, 182, 212, 0.3)",
                  rotateX: 5
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="relative z-10"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255, 255, 255, 0.5)",
                      "0 0 40px rgba(6, 182, 212, 0.5)",
                      "0 0 20px rgba(255, 255, 255, 0.5)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  Send Message 🚀
                </motion.span>
                
                {/* Animated background waves */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                      "linear-gradient(45deg, transparent 70%, rgba(255,255,255,0.1) 90%, transparent 110%)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
