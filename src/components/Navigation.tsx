
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.8)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(10px)", "blur(20px)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0.1, 0.3]
  );

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40 px-6 py-3 backdrop-blur-md border rounded-full"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        borderColor: `rgba(255, 255, 255, ${borderOpacity})`
      }}
      initial={{ y: -100, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ 
        duration: 1.2, 
        delay: 3.5,
        type: "spring",
        stiffness: 150,
        damping: 20
      }}
      whileHover={{
        scale: 1.05,
        borderColor: "rgba(6, 182, 212, 0.5)",
        boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)"
      }}
    >
      <motion.ul 
        className="flex space-x-8"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 4
            }
          }
        }}
        initial="hidden"
        animate="visible"
      >
        {navItems.map((item, index) => (
          <motion.li 
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: -20, scale: 0.8 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }
              }
            }}
          >
            <motion.a
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors relative ${
                activeSection === item.id ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
              data-hover="true"
              onClick={() => setActiveSection(item.id)}
              whileHover={{ 
                scale: 1.1,
                y: -2,
                textShadow: "0 0 20px rgba(6, 182, 212, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                color: activeSection === item.id ? "#06b6d4" : "#d1d5db"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                animate={activeSection === item.id ? {
                  textShadow: [
                    "0 0 10px rgba(6, 182, 212, 0.5)",
                    "0 0 20px rgba(6, 182, 212, 0.8)",
                    "0 0 10px rgba(6, 182, 212, 0.5)"
                  ]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {item.label}
              </motion.span>
              
              {activeSection === item.id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
                  layoutId="activeIndicator"
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 30 
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(6, 182, 212, 0.5)",
                      "0 0 20px rgba(147, 51, 234, 0.5)",
                      "0 0 10px rgba(6, 182, 212, 0.5)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              )}

              {/* Hover ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-400 opacity-0"
                whileHover={{
                  scale: [1, 1.5, 2],
                  opacity: [0.5, 0.2, 0]
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            animate={{
              x: [Math.random() * 200, Math.random() * 200],
              y: [Math.random() * 40, Math.random() * 40],
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
