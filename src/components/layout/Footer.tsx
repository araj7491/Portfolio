import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Ankit Raj</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Full Stack Developer passionate about creating innovative web solutions and collaborative learning platforms.
            </p>
            <div className="flex space-x-4">
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
                href="mailto:araj7491@gmail.com"
                aria-label="Email"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Have a project in mind? Let's talk!
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              <a 
                href="mailto:araj7491@gmail.com" 
                className="text-blue-600 hover:underline"
              >
                araj7491@gmail.com
              </a>
            </p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Greater Noida, Uttar Pradesh (India)
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © {currentYear} Ankit Raj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;