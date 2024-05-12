// App.js

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import PdfSection from './components/PDF/pdfsection';
import { AuthProvider } from './AuthContext';

const App = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const toggleAdminLogin = () => {
    setShowAdminLogin(!showAdminLogin);
  };

  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className="admin-login-icon" onClick={toggleAdminLogin}>
          <i className="fas fa-user-shield"></i>
        </div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pdf" element={<PdfSection />} />
          <Route path="/contact" element={<Contact />} />
         
          {/* Admin routes */}
        
        
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;

