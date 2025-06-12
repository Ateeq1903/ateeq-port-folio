import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", level: 90, icon: "🧠" },
      { name: "PyTorch", level: 85, icon: "🔥" },
      { name: "Computer Vision", level: 88, icon: "👁️" },
      { name: "NLP", level: 82, icon: "💬" },
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 88, icon: "📝" },
      { name: "Next.js", level: 85, icon: "⚡" },
      { name: "Three.js", level: 78, icon: "🎨" },
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Python", level: 92, icon: "🐍" },
      { name: "PostgreSQL", level: 85, icon: "🐘" },
      { name: "MongoDB", level: 80, icon: "🍃" },
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 85, icon: "🐳" },
      { name: "AWS", level: 80, icon: "☁️" },
      { name: "Git", level: 90, icon: "📦" },
      { name: "CI/CD", level: 75, icon: "🔄" },
    ],
    color: "from-orange-500 to-red-500"
  }
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -25]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 100, scale: 0.8, rotateY: -45 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ y, opacity, rotateX }}
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        z: 50
      }}
    >
      <motion.div 
        className="h-full p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl relative overflow-hidden"
        initial={{ borderRadius: "1rem" }}
        whileHover={{ borderRadius: "1.5rem" }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          initial={{ scale: 0, rotate: 180 }}
          whileHover={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-2xl mb-6 mx-auto relative z-10`}
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 360 : 0,
            y: isHovered ? -10 : 0
          }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          whileHover={{
            boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
          }}
        >
          <motion.span
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              delay: index * 0.2
            }}
          >
            💡
          </motion.span>
        </motion.div>
        
        <motion.h3 
          className="text-xl font-bold text-center mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.1, color: "#06b6d4" }}
        >
          {category.title}
        </motion.h3>
        
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              className="relative"
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.6, 
                delay: (index * 0.1) + (skillIndex * 0.1),
                type: "spring",
                stiffness: 150
              }}
              whileHover={{
                x: 10,
                scale: 1.02
              }}
            >
              <motion.div 
                className="flex items-center justify-between mb-2"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-2">
                  <motion.span 
                    className="text-lg"
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: skillIndex * 0.5
                    }}
                    whileHover={{ scale: 1.5, rotate: 180 }}
                  >
                    {skill.icon}
                  </motion.span>
                  <motion.span 
                    className="text-gray-300 font-medium"
                    whileHover={{ color: "#ffffff" }}
                  >
                    {skill.name}
                  </motion.span>
                </div>
                <motion.span 
                  className="text-cyan-400 text-sm font-semibold"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + (skillIndex * 0.1) }}
                  whileHover={{ scale: 1.2, color: "#00ffff" }}
                >
                  {skill.level}%
                </motion.span>
              </motion.div>
              
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden relative">
                <motion.div
                  className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ 
                    duration: 1.5, 
                    delay: (index * 0.1) + (skillIndex * 0.1) + 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                    filter: "brightness(1.2)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: skillIndex * 0.3
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating particles effect */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                initial={{
                  x: Math.random() * 300,
                  y: 300,
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  y: -20,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
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
      id="skills" 
      className="min-h-screen py-20 px-6 relative"
      style={{ y, opacity, scale }}
    >
      <motion.div
        ref={inViewRef}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ 
            duration: 1.2,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ rotateX: -90, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Skills & Expertise
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A comprehensive toolkit spanning AI, web development, and modern technologies
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-green-500 to-purple-500 mx-auto rounded-full mt-6"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(34, 197, 94, 0.5)",
                "0 0 40px rgba(147, 51, 234, 0.5)",
                "0 0 20px rgba(34, 197, 94, 0.5)"
              ]
            }}
            transition={{
              width: { duration: 1.5, delay: 0.6 },
              opacity: { duration: 1.5, delay: 0.6 },
              boxShadow: { duration: 3, repeat: Infinity }
            }}
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{
            y: useTransform(scrollYProgress, [0.2, 0.8], ["0px", "-20px"])
          }}
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </motion.div>

        {/* Enhanced Interactive Skill Cloud */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-300 mb-8"
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Technologies I Work With
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "JavaScript", "Python", "React", "TensorFlow", "Docker", "AWS",
              "PostgreSQL", "MongoDB", "Node.js", "TypeScript", "Next.js", "Three.js",
              "OpenCV", "PyTorch", "FastAPI", "Redis", "Kubernetes", "GraphQL"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                data-hover="true"
                initial={{ 
                  opacity: 0, 
                  scale: 0, 
                  rotate: Math.random() * 360,
                  y: 100
                }}
                animate={inView ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  y: 0
                } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 1 + (index * 0.05),
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -10,
                  rotate: Math.random() * 20 - 10,
                  boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)",
                  borderColor: "#06b6d4"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
