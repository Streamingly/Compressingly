import React from 'react';
import { Upload, Check, Play, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="bg-white py-16">
      <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
            
            <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="text-center mb-8 md:mb-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Upload</h3>
                <p className="text-gray-600">Upload your video file</p>
              </div>
              
              <ArrowRight className="hidden md:block h-8 w-8 text-gray-300" />
              
              {/* Step 2 */}
              <div className="text-center mb-8 md:mb-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Process</h3>
                <p className="text-gray-600">We compress using H.265</p>
              </div>
              
              <ArrowRight className="hidden md:block h-8 w-8 text-gray-300" />
              
              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Download</h3>
                <p className="text-gray-600">Get your compressed file</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default HowItWorks;
