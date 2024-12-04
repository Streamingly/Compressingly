import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Zap, Users, Building } from 'lucide-react';

const PricingSection = () => {
    const navigate = useNavigate();

    // Add these handler functions
    const handleFreeTier = () => {
      navigate('/signup', { 
        state: { 
          plan: 'Free',
          price: 0,
          features: ['500MB per video', '5 videos per month', 'Basic compression']
        } 
      });
    };
  
    const handleProTier = () => {
      navigate('/signup', { 
        state: { 
          plan: 'Pro',
          price: 29,
          priceId: 'your_stripe_price_id_here', // Add your Stripe price ID
          features: ['4GB per video', 'Unlimited videos', 'Advanced H.265 compression', 'Priority support']
        } 
      });
    };
  
    const handleEnterpriseTier = () => {
      navigate('/contact', { 
        state: { 
          plan: 'Enterprise',
          features: ['Unlimited video size', 'Custom compression settings', '24/7 dedicated support', 'SLA guarantee']
        } 
      });
    };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Start with our free tier or upgrade for more powerful features
          </p>
        </div>

        {/* Horizontal Cards Container */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
          {/* Free Tier */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <p className="text-gray-600">Perfect for trying out our service</p>
            </div>
            <ul className="space-y-4 mb-8 text-gray-600">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span>500MB per video</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span>5 videos per month</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Basic compression</span>
              </li>
            </ul>
            <button 
                onClick={handleFreeTier}
                className="w-full py-3 px-4 rounded-xl bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Pro Tier */}
          <div className="flex-1 bg-blue-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </span>
            </div>
            <div className="mb-8">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-white">$29</span>
                <span className="text-blue-200 ml-2">/month</span>
              </div>
              <p className="text-blue-200">For professional content creators</p>
            </div>
            <ul className="space-y-4 mb-8 text-white">
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>4GB per video</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>Unlimited videos</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>Advanced H.265 compression</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>Priority support</span>
              </li>
            </ul>
            <button 
                onClick={handleProTier}
                className="w-full py-3 px-4 rounded-xl bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-200">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Tier */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold">Custom</span>
              </div>
              <p className="text-gray-600">For large organizations</p>
            </div>
            <ul className="space-y-4 mb-8 text-gray-600">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Unlimited video size</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Custom compression settings</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span>SLA guarantee</span>
              </li>
            </ul>
            <button
                onClick={handleEnterpriseTier}
                className="w-full py-3 px-4 rounded-xl bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>

        {/* FAQ Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need more information?{" "}
            <a href="#contact" className="text-blue-600 font-semibold hover:text-blue-700">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;