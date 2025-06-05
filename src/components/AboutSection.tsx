
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="min-h-screen py-20 px-6 relative">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              I'm a passionate AI Engineer and Full-Stack Developer with a deep fascination for
              creating intelligent systems that solve real-world problems. My journey spans across
              machine learning, computer vision, and modern web technologies.
            </motion.p>
            
            <motion.p
              className="text-lg text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
              From developing advanced face liveness detection systems to building scalable web
              applications, I thrive on pushing the boundaries of what's possible with technology.
              My expertise bridges the gap between AI research and practical implementation.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mt-8"
            >
              <div className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl">
                <h3 className="text-cyan-400 text-2xl font-bold mb-2">50+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl">
                <h3 className="text-purple-400 text-2xl font-bold mb-2">3+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 border-2 border-purple-500/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 border-2 border-pink-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Center Content */}
              <div className="absolute inset-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <motion.div
                  className="text-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-4xl mb-2">🚀</div>
                  <p className="text-sm text-gray-300">Innovation</p>
                </motion.div>
              </div>

              {/* Floating Icons */}
              {[
                { icon: "🤖", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
                { icon: "💡", position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
                { icon: "⚡", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
                { icon: "🎯", position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-md rounded-full flex items-center justify-center text-xl`}
                  animate={{ 
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2 + index * 0.5, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
