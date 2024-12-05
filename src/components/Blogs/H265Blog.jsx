import React, { useState } from 'react';
import { User, Calendar, BookOpen, Hash, ArrowRight } from 'lucide-react';
import { h265Posts } from './BlogData';

const H265Blog = () => {
  const [hoveredPost, setHoveredPost] = useState(null);

  const categoryStyles = {
    'Technical': 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    'Implementation': 'bg-orange-50 text-orange-700 border border-orange-200'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          H.265/HEVC Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Expert insights into H.265/HEVC codec technology, implementation strategies, and optimization techniques.
        </p>
        <meta name="description" content="Comprehensive guides and tutorials about H.265/HEVC codec, implementation best practices, and optimization techniques for high-quality video delivery." />
        <meta name="keywords" content="H.265, HEVC, video codec, 4K video, video encoding, compression efficiency" />
      </header>

      <div className="grid grid-cols-1 gap-10">
        {h265Posts.map((post) => (
          <article 
            key={post.id}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent transition-all duration-300"
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
                  className="w-full h-72 lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
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

                <h2 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-3 mb-8">
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

                <div className="flex items-center text-emerald-600 font-medium">
                  Read More 
                  <ArrowRight className={`w-5 h-5 ml-2 transform transition-all duration-300 ${
                    hoveredPost === post.id ? 'translate-x-1' : ''
                  }`} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default H265Blog;