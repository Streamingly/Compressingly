import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/VideoCompressionLanding';
import SignUpPage from './components/SignUpPage';
import ContactPage from './components/ContactUs';
import APIDocumentation from './components/Documentation';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
       <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/docs" element={<APIDocumentation />} />
        </Routes>
       </Layout>
      
    </Router>
  );
}

export default App;