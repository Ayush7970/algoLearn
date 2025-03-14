import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Practice from './pages/Practice';
import AskAI from './pages/AskAI';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/ask-ai" element={<AskAI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;