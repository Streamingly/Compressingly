import React, { useState } from 'react';
import { Upload, ArrowRight, Check, Play, Menu, X } from 'lucide-react';
import PricingSection from './Pricing';
import FeaturesSection from './Features';
import VideoUploader from './VideoUploader';
import HowItWorks from './HowItWorks';

const LandingPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
    

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">
              Compress Your Videos with Advanced H.265 Technology
            </h1>
            <p className="text-xl text-gray-600 text-center mb-8">
              Get smaller file sizes while maintaining high quality
            </p>
            
            {/* Upload Area */}
            <div >
             <VideoUploader/>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <HowItWorks />

        <div id="features">
            <FeaturesSection />
        </div>

        {/* Reviews */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-500">Video Creator</p>
                  </div>
                </div>
                <p className="text-gray-600">"compressingly has been a game-changer for my workflow. The compression is amazing!"</p>
              </div>
              
              <div className="bg-white p-6 rounded shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Mike Chen</h4>
                    <p className="text-gray-500">Content Manager</p>
                  </div>
                </div>
                <p className="text-gray-600">"Fast, efficient, and reliable. Exactly what we needed for our video content."</p>
              </div>
              
              <div className="bg-white p-6 rounded shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Emily Torres</h4>
                    <p className="text-gray-500">YouTuber</p>
                  </div>
                </div>
                <p className="text-gray-600">"The quality retention is incredible. I can't believe how much space I'm saving!"</p>
              </div>
            </div>
          </div>
        </div>

        <div id="pricing">
            <PricingSection />
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">compressingly</h3>
                <p className="text-gray-400">Advanced video compression for everyone</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">Features</li>
                  <li className="text-gray-400">Pricing</li>
                  <li className="text-gray-400">API</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">About</li>
                  <li className="text-gray-400">Blog</li>
                  <li className="text-gray-400">Careers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">Help Center</li>
                  <li className="text-gray-400">Contact</li>
                  <li className="text-gray-400">Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400">&copy; 2024 compressingly. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;