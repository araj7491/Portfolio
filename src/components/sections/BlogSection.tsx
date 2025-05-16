import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, ChevronRight } from 'lucide-react';
import { blogPosts, BlogPost } from '../../data/blogPosts';
import BlogPostModal from '../ui/BlogPostModal';

const BlogSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
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
  
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  return (
    <section id="blog" className="section" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">
            Insights, tutorials and thoughts on web development, design, and technology.
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="card bg-white dark:bg-slate-800 group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {post.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-3 py-1 bg-slate-900/70 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime} min read
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{post.author}</span>
                  <button className="text-blue-600 dark:text-blue-500 flex items-center gap-1 text-sm hover:underline">
                    Read More
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Blog post modal */}
        {selectedPost && (
          <BlogPostModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </div>
    </section>
  );
};

export default BlogSection;