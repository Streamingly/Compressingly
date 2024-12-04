import React from 'react';
import { 
  Zap, 
  Shield, 
  Cloud, 
  Code, 
  Settings2, 
  Video, 
  Gauge, 
  Download,
  Laptop 
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Advanced H.265 Compression",
      description: "Achieve up to 50% smaller file sizes while maintaining exceptional video quality using cutting-edge H.265/HEVC compression technology."
    },
    {
      icon: Zap,
      title: "Lightning-Fast Processing",
      description: "Experience rapid compression with our optimized pipeline, powered by distributed cloud processing for maximum efficiency."
    },
    {
      icon: Gauge,
      title: "Quality Preservation",
      description: "Smart compression algorithms that analyze your content to maintain the perfect balance between file size and visual quality."
    },
    {
      icon: Cloud,
      title: "Secure Cloud Storage",
      description: "Temporary cloud storage for your processed videos with enterprise-grade encryption and automatic cleanup after download."
    },
    {
      icon: Code,
      title: "Robust API Integration",
      description: "Easy-to-use REST API for seamless integration with your existing workflow, complete with comprehensive documentation and SDKs."
    },
    {
      icon: Settings2,
      title: "Custom Compression Settings",
      description: "Fine-tune compression parameters to meet your specific needs, with presets for different use cases like web, mobile, or broadcasting."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption, secure file transfer, and SOC 2 compliance to ensure your content remains protected throughout the process."
    },
    {
      icon: Download,
      title: "Batch Processing",
      description: "Process multiple videos simultaneously with our powerful batch processing capability, perfect for large content libraries."
    },
    {
      icon: Laptop,
      title: "Multi-Platform Support",
      description: "Support for all major video formats and codecs, with optimized output for web, mobile, and streaming platforms."
    }
  ];

  return (
    <div id="features" className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Why Choose compressingly
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the next generation of video compression with our powerful features designed for professionals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Video Workflow?</h3>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            Join thousands of content creators and businesses who trust compressingly for their video compression needs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;