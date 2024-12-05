import React, { useState } from 'react';
import { Clock, User, Calendar, BookOpen, Hash, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const BlogPosts = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const allPosts = [
    
    {
      id: 1,
      slug: 'understanding-video-compression',
      title: "Understanding Video Compression: A Complete Guide",
      author: "David Chen",
      date: "2024-03-15",
      readTime: "8 min read",
      excerpt: "Dive deep into the fundamentals of video compression, including key concepts like spatial and temporal compression, bitrate optimization, and quality preservation...",
      tags: ["Video Compression", "Streaming", "Technology"],
      category: "Video Compression",
      imageUrl: "/api/placeholder/600/300"
    },
    {
      id: 2,
      slug: 'video-compression-standards',
      title: "Video Compression Standards: From MPEG-2 to AV1",
      author: "Sarah Williams",
      date: "2024-03-14",
      readTime: "10 min read",
      excerpt: "Explore the evolution of video compression standards, comparing their efficiency, features, and use cases in modern video streaming and broadcasting...",
      tags: ["Codecs", "Streaming", "Standards"],
      category: "Video Compression",
      imageUrl: "/api/placeholder/600/300"
    },
    {
      id: 3,
      slug: 'h265-hevc-future-video-compression',
      title: "H.265/HEVC: The Future of Video Compression",
      author: "Michael Zhang",
      date: "2024-03-13",
      readTime: "7 min read",
      excerpt: "Learn about H.265/HEVC codec's advanced features, benefits, and why it's becoming the standard for 4K and HDR content delivery...",
      tags: ["H.265", "HEVC", "4K Video"],
      category: "H.265",
      imageUrl: "/api/placeholder/600/300"
    },
    {
      id: 4,
      slug: 'implementing-h265-encoding',
      title: "Implementing H.265 Encoding: Best Practices Guide",
      author: "Jennifer Lee",
      date: "2024-03-12",
      readTime: "12 min read",
      excerpt: "A comprehensive guide to implementing H.265 encoding in your video workflow, covering optimization techniques, hardware considerations, and quality control...",
      tags: ["Encoding", "Optimization", "Workflow"],
      category: "H.265",
      imageUrl: "/api/placeholder/600/300"
    }
  ];

  const categoryStyles = {
    Development: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    Design: 'bg-cyan-50 text-cyan-700 border border-cyan-200',
    'Video Compression': 'bg-blue-50 text-blue-700 border border-blue-200',
    'H.265': 'bg-purple-50 text-purple-700 border border-purple-200'
  };

  const handlePostClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  const categories = ['all', 'Video Compression', 'H.265'];
  const filteredPosts = activeCategory === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Latest Blog Posts
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Explore our latest articles, tutorials, and insights about web development, video compression, and streaming technology.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategory === category 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </header>
      
      <div className="grid grid-cols-1 gap-8">
        {filteredPosts.map((post) => (
          <Link 
            to={`/blog/${post.slug}`}
            key={post.id}
            className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent transition-all duration-300"
            style={{
              boxShadow: hoveredPost === post.id 
                ? '0 20px 40px -15px rgba(0,0,0,0.1)' 
                : '0 4px 6px -1px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 relative overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-64 lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 ${categoryStyles[post.category]} px-4 py-1.5 rounded-full text-sm font-medium`}>
                  {post.category}
                </div>
              </div>
              
              <div className="lg:w-3/5 p-8">
                <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1.5 opacity-70" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1.5 opacity-70" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1.5 opacity-70" />
                    {post.readTime}
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-3">
                  <Hash className="w-4 h-4 text-gray-400" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full
                        hover:bg-gray-100 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-8 right-8">
                  <ArrowRight className={`w-6 h-6 text-indigo-600 transform transition-all duration-300 ${
                    hoveredPost === post.id ? 'translate-x-1 opacity-100' : 'opacity-0'
                  }`} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;