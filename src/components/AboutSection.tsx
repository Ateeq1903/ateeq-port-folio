
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8,
      rotateX: -30,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      id="about" 
      className="min-h-screen py-20 px-6 relative"
      style={{ y, opacity, scale, rotateX }}
    >
      <motion.div
        ref={inViewRef}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div 
          variants={itemVariants} 
          className="text-center mb-16"
          whileInView={{
            scale: [0.8, 1.05, 1],
            rotateY: [0, 10, 0]
          }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ backgroundSize: "0% 100%" }}
            whileInView={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              About Me
            </motion.span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              variants={itemVariants}
              whileInView={{
                x: [0, 10, 0],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              I'm a passionate AI Engineer and Full-Stack Developer with a deep fascination for
              creating intelligent systems that solve real-world problems. My journey spans across
              machine learning, computer vision, and modern web technologies.
            </motion.p>
            
            <motion.p
              className="text-lg text-gray-400 leading-relaxed"
              variants={itemVariants}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              From developing advanced face liveness detection systems to building scalable web
              applications, I thrive on pushing the boundaries of what's possible with technology.
              My expertise bridges the gap between AI research and practical implementation.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mt-8"
            >
              {[
                { number: "50+", label: "Projects Completed", color: "cyan" },
                { number: "3+", label: "Years Experience", color: "purple" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className={`p-6 bg-gradient-to-br ${stat.color === 'cyan' ? 'from-blue-900/20 to-purple-900/20 border-blue-500/20' : 'from-purple-900/20 to-pink-900/20 border-purple-500/20'} backdrop-blur-sm border rounded-xl`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + (index * 0.2),
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    boxShadow: stat.color === 'cyan' 
                      ? "0 20px 40px rgba(6, 182, 212, 0.2)" 
                      : "0 20px 40px rgba(147, 51, 234, 0.2)"
                  }}
                >
                  <motion.h3 
                    className={`${stat.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'} text-2xl font-bold mb-2`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                  >
                    {stat.number}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + (index * 0.2) }}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
            style={{
              y: useTransform(scrollYProgress, [0, 1], ["0px", "-50px"])
            }}
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated Rings with advanced scroll effects */}
              <motion.div
                className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  scale: useTransform(scrollYProgress, [0.2, 0.8], [0.8, 1.2])
                }}
                whileInView={{
                  borderColor: ["rgba(6, 182, 212, 0.3)", "rgba(6, 182, 212, 0.8)", "rgba(6, 182, 212, 0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-4 border-2 border-purple-500/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{
                  scale: useTransform(scrollYProgress, [0.3, 0.7], [1.2, 0.8])
                }}
              />
              <motion.div
                className="absolute inset-8 border-2 border-pink-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                  opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.3, 1, 0.3])
                }}
              />
              
              {/* Center Content with enhanced animations */}
              <motion.div 
                className="absolute inset-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-md rounded-full flex items-center justify-center"
                variants={floatingVariants}
                animate="animate"
                whileHover={{
                  scale: 1.1,
                  rotateY: 20,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                }}
              >
                <motion.div
                  className="text-center"
                  animate={{ 
                    y: [0, -10, 0],
                    rotateZ: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <motion.div 
                    className="text-4xl mb-2"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360]
                    }}
                    transition={{
                      scale: { duration: 2, repeat: Infinity },
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    🚀
                  </motion.div>
                  <motion.p 
                    className="text-sm text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    Innovation
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Enhanced Floating Icons */}
              {[
                { icon: "🤖", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", delay: 0 },
                { icon: "💡", position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2", delay: 0.5 },
                { icon: "⚡", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2", delay: 1 },
                { icon: "🎯", position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2", delay: 1.5 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-md rounded-full flex items-center justify-center text-xl cursor-pointer`}
                  animate={{ 
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 3 + index * 0.5, 
                    repeat: Infinity,
                    delay: item.delay
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 180,
                    boxShadow: "0 10px 20px rgba(6, 182, 212, 0.4)"
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                >
                  <motion.span
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {item.icon}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
