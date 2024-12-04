import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, price, features } = location.state || {};

  const handleGoogleSignIn = () => {
    // Implement Google Sign In logic here
    console.log('Google Sign In clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Get Started with {plan || 'Our Service'}
          </h2>
          {price !== undefined && (
            <p className="mt-2 text-gray-600">
              Selected Plan: ${price}/month
            </p>
          )}
        </div>

        {/* Plan Features */}
        {features && features.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">Plan Features:</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Sign Up Options */}
        <div className="mt-8 space-y-6">
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <img
                src="/google-icon.png" // Add your Google icon
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Sign up with Google
            </button>
          </div>
        </div>

        {/* Terms */}
        <p className="text-center text-sm text-gray-600">
          By signing up, you agree to our{' '}
          <a href="/terms" className="text-blue-600 hover:text-blue-800">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-blue-600 hover:text-blue-800">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;