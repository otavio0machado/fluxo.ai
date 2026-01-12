import React from 'react';
import { ArrowRight, ChevronRight, Triangle, Circle, Square, Hexagon, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-start pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <a href="#" className="inline-flex items-center gap-1 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 hover:bg-violet-500/20 transition-colors cursor-pointer group">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Novidade: Fluxo 2.0 chegou
            <ChevronRight className="w-3 h-3 text-violet-400 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Gerencie seu time na <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            velocidade do pensamento
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed tracking-tight animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          A única plataforma que une tarefas, docs e chat em um fluxo contínuo.
          Projetado para times que constroem o futuro.
        </p>

        {/* Buttons - High Contrast */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
            Começar Agora
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-zinc-700 text-zinc-300 font-medium hover:border-zinc-500 hover:text-white transition-all duration-300 backdrop-blur-sm">
            Ver Demonstração
          </button>
        </div>
      </div>

      {/* Logo Ticker */}
      <div className="mt-24 w-full border-y border-white/5 bg-white/[0.02] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-medium text-zinc-500 mb-6 uppercase tracking-widest">Usado por times inovadores em</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Fake Logos */}
            <div className="flex items-center gap-2 group cursor-default">
              <Triangle className="w-5 h-5 fill-current text-white" />
              <span className="font-bold text-lg text-zinc-300 group-hover:text-white transition-colors">Acme Corp</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Circle className="w-5 h-5 fill-current text-white" />
              <span className="font-bold text-lg text-zinc-300 group-hover:text-white transition-colors">Nebula</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Square className="w-5 h-5 fill-current text-white" />
              <span className="font-bold text-lg text-zinc-300 group-hover:text-white transition-colors">Velocity</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Hexagon className="w-5 h-5 fill-current text-white" />
              <span className="font-bold text-lg text-zinc-300 group-hover:text-white transition-colors">Kinetix</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Zap className="w-5 h-5 fill-current text-white" />
              <span className="font-bold text-lg text-zinc-300 group-hover:text-white transition-colors">Bolt.dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;