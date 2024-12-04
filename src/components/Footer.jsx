import React from 'react';
import { Upload, Zap, Download,Mail } from 'lucide-react';


const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-500 mb-4">compressingly</h3>
            <p className="text-gray-300 mb-4">
              Revolutionizing video compression with cutting-edge technology and user-friendly design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">LinkedIn</a>
            </div>
          </div>
  
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Use Cases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Roadmap</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-400 flex items-center">
                <Mail className="w-4 h-4 mr-2" /> hello@compressingly.com
              </p>
              <p className="text-gray-400">
                San Francisco, CA, USA
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
  
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © 2024 compressingly. All Rights Reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;