import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-violet-500/30 font-sans">
      {/* Background Gradients for ambience - Linear Style */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Center Glow (Violet) */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[50vw] h-[50vh] bg-violet-900/20 rounded-full blur-[120px] opacity-60"></div>
        {/* Bottom Right Subtle Glow (Cyan/Blue) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-cyan-900/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[100vw] overflow-x-hidden">
        <Navbar />
        <main className="w-full flex flex-col items-center">
          <Hero />
          <BentoGrid />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;