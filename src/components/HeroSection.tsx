
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center, Float } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

const FloatingCube = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push(
      <mesh
        key={i}
        position={[
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ]}
      >
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#00FFFF" />
      </mesh>
    );
  }
  return <>{particles}</>;
};

const CentralSphere = () => {
  return (
    <Center>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial
            color="#00FFFF"
            transparent
            opacity={0.7}
            emissive="#001122"
            wireframe
          />
        </mesh>
      </Float>
    </Center>
  );
};

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF00FF" />
      
      <Suspense fallback={null}>
        <CentralSphere />
        
        <FloatingCube position={[-3, 2, -1]} color="#FF00FF" />
        <FloatingCube position={[3, -1, 1]} color="#00FFFF" />
        <FloatingCube position={[0, 3, -2]} color="#FFFF00" />
        <FloatingCube position={[-2, -2, 2]} color="#FF4444" />
        
        <ParticleField />
      </Suspense>
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <motion.section 
      ref={ref}
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity, scale, rotate }}
    >
      {/* 3D Background with scroll parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
        }}
      >
        <Scene3D />
      </motion.div>

      {/* Content Overlay with advanced animations */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.5, 
            delay: 4,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ 
              duration: 1.8, 
              delay: 4.2,
              type: "spring",
              stiffness: 120,
              damping: 20
            }}
            style={{
              y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]),
            }}
          >
            <motion.span 
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              MOHAMMED
            </motion.span>
            <br />
            <motion.span
              className="text-white"
              initial={{ opacity: 0, x: -200, rotateY: -90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 4.8,
                type: "spring",
                stiffness: 150
              }}
            >
              ATEEQ
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ 
            duration: 1.2, 
            delay: 5.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="mb-12"
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]),
          }}
        >
          <motion.h2 
            className="text-xl md:text-2xl text-gray-300 mb-4 font-light tracking-wider"
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "0.1em", opacity: 1 }}
            transition={{ duration: 1.5, delay: 5.4 }}
          >
            AI Engineer & Full-Stack Developer
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 5.6 }}
          >
            Crafting intelligent solutions with cutting-edge AI technologies and
            immersive digital experiences that push the boundaries of innovation.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 5.8,
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]),
          }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg shadow-2xl shadow-cyan-500/25"
            data-hover="true"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)",
              rotateX: 5,
              rotateY: 5
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 6 }}
          >
            Explore My Work
          </motion.button>
          
          <motion.button
            className="px-8 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold text-lg backdrop-blur-sm hover:bg-purple-500/10 transition-all duration-300"
            data-hover="true"
            whileHover={{ 
              scale: 1.05,
              borderColor: "#a855f7",
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 6.2 }}
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>

      {/* Animated Background Grid with scroll effect */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 2])
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-purple-900/20" />
        <motion.div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 50, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 1, 
          delay: 6,
          type: "spring",
          stiffness: 200
        }}
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0])
        }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative overflow-hidden"
          animate={{ 
            y: [0, 10, 0],
            borderColor: ["#9ca3af", "#06b6d4", "#9ca3af"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2"
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
