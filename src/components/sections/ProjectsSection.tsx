import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';

const ProjectsSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  return (
    <section id="projects" className="section bg-slate-50 dark:bg-slate-800/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects. Each one is built with a focus on performance,
            user experience, and clean code.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group bg-white dark:bg-slate-800"
            >
              <div className="relative overflow-hidden h-48 md:h-64">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-all duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 z-20">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/araj7491"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center gap-2 dark:text-white"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;