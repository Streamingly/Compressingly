// Layout.js
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Adjust the padding-top to account for the fixed header height */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;
