import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, ArrowDown, Briefcase } from 'lucide-react';
import TypeWriter from '../ui/TypeWriter';

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100
      }
    }
  };

  const roleTexts = [
    "Full Stack Developer",
    "React.js Expert",
    "Node.js Developer",
    "UI/UX Enthusiast"
  ];
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20"
      ref={ref}
    >
      {/* Background circle gradient */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-300/10 dark:bg-blue-300/20 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium"
            >
              Welcome to my portfolio
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white"
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-500">Ankit Raj</span>
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-slate-700 dark:text-slate-300"
            >
              <TypeWriter texts={roleTexts} />
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl"
            >
              I create modern, responsive web applications with a focus on 
              user experience and clean code. Passionate about building
              innovative solutions that make a difference.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="btn btn-primary flex items-center gap-2"
              >
                <Briefcase size={18} />
                Hire Me
              </a>
              <a 
                href="#projects" 
                className="btn btn-outline flex items-center gap-2 dark:text-white"
              >
                View Projects
              </a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 mt-8"
            >
              <span className="text-slate-600 dark:text-slate-400">Find me on:</span>
              <a 
                href="https://github.com/araj7491" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ankit-raj-3594b6237/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Computer Science"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-full p-4 shadow-lg">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <code>{'</>'}</code>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-slate-600 dark:text-slate-400 text-sm mb-2">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} className="text-blue-600 dark:text-blue-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;