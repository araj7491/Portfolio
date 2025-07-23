import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '../../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface BlogPostModalProps {
  post: BlogPost;
  onClose: () => void;
}

const BlogPostModal: React.FC<BlogPostModalProps> = ({ post, onClose }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Image */}
          <div className="relative w-full h-56 md:h-72">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-slate-800/80 rounded-full text-slate-900 dark:text-white hover:bg-white dark:hover:bg-slate-700 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-3 items-center mb-4">
              <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 text-sm">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 text-sm">
                <Clock size={14} />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 text-sm">
                <User size={14} />
                <span>{post.author}</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">{post.title}</h2>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                  // Add more custom components as needed
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogPostModal;