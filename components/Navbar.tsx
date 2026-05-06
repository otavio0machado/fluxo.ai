import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV, COMPANY } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-ink/90 backdrop-blur border-b rule">
      <div className="w-full max-w-6xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
        <a href="#topo" className="flex items-baseline gap-3">
          <span className="text-base font-semibold tracking-tight-2 text-chalk">{COMPANY.name}</span>
          <span className="hidden sm:inline label-mono text-chalk-mute">automação · e-commerce BR</span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-chalk-soft hover:text-chalk transition-colors">
              {n.label}
            </a>
          ))}
          <a
            href="#precos"
            className="bg-chalk text-ink px-4 py-2 text-sm font-medium hover:bg-chalk-soft transition-colors"
          >
            14 dias grátis
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-chalk"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-ink border-t rule px-5 py-4 flex flex-col gap-1">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setIsOpen(false)} className="py-3 text-chalk-soft">
              {n.label}
            </a>
          ))}
          <a href="#precos" onClick={() => setIsOpen(false)} className="mt-2 text-center bg-chalk text-ink py-3 font-medium">
            14 dias grátis
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
