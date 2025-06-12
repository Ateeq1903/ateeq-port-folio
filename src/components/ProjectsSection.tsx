import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: "Face Liveness Detection",
    description: "Advanced AI system for real-time face anti-spoofing using deep learning and computer vision techniques.",
    tech: ["TensorFlow", "OpenCV", "Python", "React"],
    image: "🤖",
    color: "from-blue-500 to-cyan-500",
    link: "#"
  },
  {
    id: 2,
    title: "Smart Analytics Dashboard",
    description: "Interactive data visualization platform with real-time analytics and predictive modeling capabilities.",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    image: "📊",
    color: "from-purple-500 to-pink-500",
    link: "#"
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    description: "Intelligent conversational AI with natural language processing and context-aware responses.",
    tech: ["Python", "NLP", "FastAPI", "Docker"],
    image: "💬",
    color: "from-green-500 to-emerald-500",
    link: "#"
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with advanced search, recommendations, and secure payment integration.",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    image: "🛒",
    color: "from-orange-500 to-red-500",
    link: "#"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer"
      data-hover="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ 
        opacity: 0, 
        y: 150, 
        scale: 0.5, 
        rotateY: -45,
        filter: "blur(10px)"
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        rotateY: 0,
        filter: "blur(0px)"
      }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ 
        duration: 1, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -20, 
        scale: 1.05,
        rotateY: 10,
        rotateX: 5
      }}
      style={{ y, opacity, scale, rotateX }}
    >
      <motion.div 
        className="relative h-96 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
        whileHover={{
          borderColor: "#06b6d4",
          boxShadow: "0 30px 60px rgba(6, 182, 212, 0.2)"
        }}
      >
        {/* Enhanced Animated Background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}
          animate={{
            opacity: isHovered ? 0.3 : 0.1,
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Animated mesh background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(6, 182, 212, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(6, 182, 212, 0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(147, 51, 234, 0.1) 75%)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}
          animate={{
            backgroundPosition: isHovered 
              ? '20px 20px, 20px 30px, 30px 10px, 10px 20px'
              : '0 0, 0 10px, 10px -10px, -10px 0px'
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Content with enhanced animations */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          <motion.div
            className="text-6xl mb-4"
            animate={{
              scale: isHovered ? 1.3 : 1,
              rotate: isHovered ? 360 : 0,
              y: isHovered ? -10 : 0
            }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{
              filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))"
            }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.5)",
                  "0 0 40px rgba(147, 51, 234, 0.5)",
                  "0 0 20px rgba(6, 182, 212, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {project.image}
            </motion.span>
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              x: 10,
              color: "#00ffff"
            }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ color: "#d1d5db" }}
          >
            {project.description}
          </motion.p>
          
          <div className="space-y-4">
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-xs rounded-full text-gray-300 border border-white/20"
                  initial={{ opacity: 0, scale: 0, rotate: 180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.5 + (i * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(6, 182, 212, 0.2)",
                    borderColor: "#06b6d4",
                    color: "#ffffff"
                  }}
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.button
              className="w-full py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl text-cyan-400 font-semibold hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.span
                className="relative z-10"
                animate={{
                  color: isHovered ? "#ffffff" : "#06b6d4"
                }}
              >
                View Project
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0"
                animate={{
                  opacity: isHovered ? 0.8 : 0,
                  scale: isHovered ? 1 : 0.8
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
        
        {/* Enhanced Hover Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        
        {/* Enhanced Particles */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                initial={{
                  x: Math.random() * 400,
                  y: 500,
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  y: -50,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}

        {/* Floating orbs */}
        <motion.div
          className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full opacity-60"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  return (
    <motion.section 
      ref={ref}
      id="projects" 
      className="min-h-screen py-20 px-6 relative"
      style={{ y, opacity, scale }}
    >
      <motion.div
        ref={inViewRef}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 100, rotateX: -90 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ 
            duration: 1.2,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                backgroundSize: ["100% 100%", "200% 100%", "100% 100%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Featured Projects
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Showcasing innovative solutions that blend cutting-edge AI with exceptional user experiences
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6"
            initial={{ width: 0, opacity: 0, scale: 0 }}
            whileInView={{ width: 96, opacity: 1, scale: 1 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(6, 182, 212, 0.5)",
                "0 0 40px rgba(147, 51, 234, 0.5)",
                "0 0 20px rgba(6, 182, 212, 0.5)"
              ]
            }}
            transition={{
              width: { duration: 1.5, delay: 0.6 },
              opacity: { duration: 1.5, delay: 0.6 },
              scale: { duration: 1.5, delay: 0.6 },
              boxShadow: { duration: 3, repeat: Infinity }
            }}
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          style={{
            y: useTransform(scrollYProgress, [0.2, 0.8], ["0px", "-30px"])
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ 
            duration: 1, 
            delay: 1,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg shadow-2xl shadow-purple-500/25 relative overflow-hidden"
            data-hover="true"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 30px 60px rgba(147, 51, 234, 0.4)",
              rotateX: 5
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ rotateY: -90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.span
              className="relative z-10"
              animate={{
                textShadow: [
                  "0 0 20px rgba(147, 51, 234, 0.5)",
                  "0 0 40px rgba(236, 72, 153, 0.5)",
                  "0 0 20px rgba(147, 51, 234, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              View All Projects
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
