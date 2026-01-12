import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 w-full flex justify-center px-4">
      {/* Main Navbar Pill */}
      <div className="w-full max-w-5xl bg-zinc-900/70 backdrop-blur-md border border-white/10 rounded-full px-4 md:px-6 h-14 flex items-center justify-between shadow-lg shadow-black/50 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group flex-shrink-0">
          <div className="relative flex items-center justify-center w-6 h-6 rounded bg-zinc-100 group-hover:bg-white transition-colors duration-300">
            <Zap className="w-3.5 h-3.5 text-black fill-black" />
          </div>
          <span className="text-sm font-bold tracking-tight text-white">Fluxo.ai</span>
        </div>

        {/* Desktop Links - Hidden on mobile, Flex on md with adaptive gap */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-xs font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors duration-200">Features</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Method</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Customers</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Pricing</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Blog</a>
        </div>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <a href="#" className="text-xs font-medium text-zinc-300 hover:text-white transition-colors px-3 py-1.5">Login</a>
          <button className="text-xs font-medium text-white bg-white/10 border border-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full transition-all duration-300 backdrop-blur-sm">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button - Visible on mobile */}
        <button 
          className="md:hidden p-2 -mr-2 text-zinc-400 hover:text-white transition-colors flex items-center justify-center rounded-full hover:bg-white/5 active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[4.5rem] left-4 right-4 max-w-5xl mx-auto bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 fade-in-0 duration-200 shadow-2xl origin-top z-40">
           {/* Mobile Links */}
          <div className="flex flex-col gap-1">
            {['Features', 'Method', 'Customers', 'Pricing', 'Blog'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-zinc-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between group"
              >
                {item}
              </a>
            ))}
          </div>
          
          <hr className="border-white/5" />
          
          {/* Mobile CTAs */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            <button className="w-full py-3 rounded-xl border border-zinc-700 text-zinc-300 text-sm font-medium hover:bg-zinc-800 hover:text-white transition-colors">
              Login
            </button>
            <button className="w-full py-3 rounded-xl bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;