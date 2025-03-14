import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-[var(--primary-100)]" />
              <span className="text-3xl font-bold text-[var(--primary-100)]">AlgoLearn</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/learn" className="text-2xl text-[var(--text-200)] hover:text-[var(--primary-100)]">Learn</Link>
            <Link to="/practice" className="text-2xl text-[var(--text-200)] hover:text-[var(--primary-100)]">Practice</Link>
            <Link to="/ask-ai" className="text-2xl text-[var(--text-200)] hover:text-[var(--primary-100)]">Ask AI</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;