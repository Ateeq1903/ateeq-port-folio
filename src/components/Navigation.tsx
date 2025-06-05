
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40 px-6 py-3 backdrop-blur-md bg-black/20 border border-white/10 rounded-full"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.5 }}
    >
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <motion.a
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors relative ${
                activeSection === item.id ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
              data-hover="true"
              onClick={() => setActiveSection(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navigation;
