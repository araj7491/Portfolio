import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, ArrowDown, Download, MessageSquare } from 'lucide-react';
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
    "Django Developer",
    "UI/UX Enthusiast"
  ];
  
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center pt-20"
      ref={ref}
    >
      {/* Background circle gradient */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-300/10 dark:bg-blue-300/20 rounded-full blur-3xl -z-10" />
      
      <div className="w-full px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="order-2 md:order-1 text-center md:text-left md:pl-8 lg:pl-12">
            
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white"
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-500">Ankit Raj</span>
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-slate-700 dark:text-slate-300"
            >
              <TypeWriter texts={roleTexts} />
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto md:mx-0"
            >
              I create modern, responsive web applications with a focus on 
              user experience and clean code. Passionate about building
              innovative solutions that make a difference.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-2 rounded-md transition-all duration-300 font-medium bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <MessageSquare size={18} />
                Hire Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-2 rounded-md transition-all duration-300 font-medium border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 flex items-center justify-center gap-2 dark:text-white w-full sm:w-auto"
              >
                View Projects
              </a>
              <a 
                href="/Ankit_Raj-Resume.pdf"
                download="Ankit_Raj-Resume.pdf"
                className="px-6 py-2 rounded-md transition-all duration-300 font-medium border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 flex items-center justify-center gap-2 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20 w-full sm:w-auto"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center md:justify-start gap-4 mt-8"
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
              <a 
                href="https://x.com/ankitraj0707" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </motion.div>
            
            {/* Scroll indicator - Mobile */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center mt-8 md:hidden"
            >
              <span className="text-slate-600 dark:text-slate-400 text-sm mb-2">Scroll Down</span>
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowDown size={20} className="text-blue-600 dark:text-blue-500" />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="order-1 md:order-2 flex justify-center md:justify-end md:pr-8 lg:pr-12"
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                <img 
                  src="/hero.jpg"
                  alt="Ankit Raj"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white dark:bg-slate-800 rounded-full p-3 sm:p-4 shadow-lg">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-sm sm:text-base">
                  <code>{'</>'}</code>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator - Desktop */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex"
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