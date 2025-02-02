import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const BlogPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  // GSAP Animations
  useGSAP(() => {
    // Featured post animation
    gsap.from(featuredRef.current, {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: 'power4.out',
    });

    // Staggered card animations
    gsap.from('.post-card', {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      delay: 0.5,
      ease: 'back.out(1.7)',
    });
  }, { scope: containerRef });

  // Sample blog posts data
  const posts = [
    { id: 1, title: 'Getting Started with Next.js', excerpt: 'Learn the basics of Next.js and build your first application...', date: 'March 15, 2024', slug: 'getting-started-nextjs' },
    { id: 2, title: 'Mastering Tailwind CSS', excerpt: 'Discover advanced techniques for working with Tailwind CSS...', date: 'March 14, 2024', slug: 'mastering-tailwind' },
    { id: 3, title: 'Animation in React', excerpt: 'Explore Framer Motion and GSAP for stunning animations...', date: 'March 13, 2024', slug: 'react-animation' },
    // Add more posts as needed
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-2 text-gray-400">Latest articles on web development</p>
      </motion.header>

      {/* Featured Post */}
      <div ref={featuredRef} className="container mx-auto px-4 py-12 opacity-0">
        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-xl transition-shadow duration-300">
          <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer">
            <h2 className="text-3xl font-bold">Featured Post: Next.js 14 Overview</h2>
            <p className="mt-4 text-gray-300">Discover the new features in Next.js 14 and how they can improve your workflow...</p>
            <div className="mt-6 flex items-center text-gray-400">
              <span className="mr-4">March 16, 2024</span>
              <button className="px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                Read More
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className="post-card bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="h-48 bg-gray-700 rounded-lg mb-4" />
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="mt-2 text-gray-400">{post.excerpt}</p>
                <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <button className="px-4 py-2 bg-gray-600 rounded-full hover:bg-gray-500 transition-colors">
                    Read →
                  </button>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="bg-gray-900 mt-24 py-8"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 My Blog. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default BlogPage;