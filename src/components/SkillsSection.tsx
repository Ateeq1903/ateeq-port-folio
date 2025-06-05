
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

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

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl">
        <motion.div
          className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-2xl mb-6 mx-auto`}
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          💡
        </motion.div>
        
        <h3 className="text-xl font-bold text-center mb-6 text-white">
          {category.title}
        </h3>
        
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.1) }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                </div>
                <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
              </div>
              
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.1) + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative">
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
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI, web development, and modern technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Interactive Skill Cloud */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-300 mb-8">Technologies I Work With</h3>
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
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + (index * 0.05) }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
