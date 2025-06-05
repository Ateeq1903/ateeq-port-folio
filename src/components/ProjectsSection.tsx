
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

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

  return (
    <motion.div
      className="relative group cursor-pointer"
      data-hover="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="relative h-96 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}
          animate={{
            opacity: isHovered ? 0.2 : 0.1,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          <motion.div
            className="text-6xl mb-4"
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 10 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {project.image}
          </motion.div>
          
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-xs rounded-full text-gray-300 border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <motion.button
              className="w-full py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl text-cyan-400 font-semibold hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Project
            </motion.button>
          </div>
        </div>
        
        {/* Hover Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        
        {/* Particles */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                initial={{
                  x: Math.random() * 300,
                  y: 400,
                  opacity: 0
                }}
                animate={{
                  y: -10,
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend cutting-edge AI with exceptional user experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg shadow-2xl shadow-purple-500/25"
            data-hover="true"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
