import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/VideoCompressionLanding';
import SignUpPage from './components/SignUpPage';
import ContactPage from './components/ContactUs';
import APIDocumentation from './components/Documentation';
import Layout from './components/Layout';
import BlogPosts from './components/Blogs/BlogsDocs';
import H265Compression from './components/Blogs/H265Compression';
import VideoCompressionStandards from './components/Blogs/VideoCompressionStandards';
import TermsAndConditions from './components/Additional/TermsandConditions';

function App() {
  return (
    <Router>
       <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/docs" element={<APIDocumentation />} />
          <Route path="/blog" element={<BlogPosts /> } />
          <Route path="/blog/understanding-video-compression" element={<H265Compression />} />
          <Route path="/blog/video-compression-standards" element={<VideoCompressionStandards />} />

          <Route path='terms-and-conditions' element={<TermsAndConditions />} />
        </Routes>
       </Layout>
      
    </Router>
  );
}

export default App;