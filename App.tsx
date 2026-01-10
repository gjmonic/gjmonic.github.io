
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/CV';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Data from './pages/Data';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/cv', label: 'CV' },
    { path: '/research', label: 'Research' },
    { path: '/teaching', label: 'Teaching' },
    { path: '/data', label: 'Data' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-sky-100 px-6 py-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-slate-900 group">
          George Marten
          <span className="block h-0.5 bg-orange-300 w-0 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </div>
      <div className="flex space-x-4 md:space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
              location.pathname === item.path 
                ? 'text-orange-400 border-b border-orange-200' 
                : 'text-slate-600 hover:text-orange-300'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="mt-20 py-12 px-6 border-t border-sky-100 text-center">
    <div className="max-w-4xl mx-auto">
      <p className="font-serif italic text-slate-500 mb-4">"The impediment to action advances action. What stands in the way becomes the way."</p>
      <div className="flex justify-center space-x-6 text-sm text-slate-400">
        <span>© {new Date().getFullYear()} George Marten</span>
        <a href="mailto:gjm2004@hw.ac.uk" className="hover:text-orange-300 transition-colors">Email</a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col selection:bg-orange-100 selection:text-orange-900">
        <Navbar />
        <main className="flex-grow container mx-auto px-6 py-12 max-w-5xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
