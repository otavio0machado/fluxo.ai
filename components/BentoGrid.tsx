import React from 'react';
import { MessageSquare, GitBranch, Moon, Map } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Tudo o que você precisa,<br /> em um só lugar.
        </h2>
        <p className="text-zinc-400 max-w-xl text-lg">
          Ferramentas poderosas integradas nativamente para eliminar a alternância de contexto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
        
        {/* Card 1: Roadmaps (Large - Spans 2 cols) */}
        <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-violet-500/50 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="p-8 h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 border border-white/5 group-hover:bg-violet-500/20 group-hover:text-violet-300 transition-colors">
                <Map className="w-5 h-5 text-zinc-400 group-hover:text-violet-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Roadmaps Visuais</h3>
              <p className="text-zinc-400 text-sm">Visualize o progresso macro com timelines interativas e dependências automáticas.</p>
            </div>
            
            {/* Visual Abstract representation */}
            <div className="mt-6 w-full h-32 bg-zinc-950/50 rounded-lg border border-white/5 p-4 relative overflow-hidden">
               <div className="absolute top-4 left-4 right-4 h-2 rounded-full bg-zinc-800">
                  <div className="w-2/3 h-full rounded-full bg-violet-500/50"></div>
               </div>
               <div className="absolute top-10 left-4 right-12 h-2 rounded-full bg-zinc-800">
                  <div className="w-1/3 h-full rounded-full bg-cyan-500/50"></div>
               </div>
               <div className="absolute top-16 left-8 right-4 h-2 rounded-full bg-zinc-800">
                  <div className="w-1/2 h-full rounded-full bg-pink-500/50"></div>
               </div>
            </div>
          </div>
        </div>

        {/* Card 2: Chat (Small) */}
        <div className="relative group overflow-hidden rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-violet-500/50 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="p-8 h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 border border-white/5 group-hover:bg-cyan-500/20 transition-colors">
                <MessageSquare className="w-5 h-5 text-zinc-400 group-hover:text-cyan-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Chat Real-time</h3>
              <p className="text-zinc-400 text-sm">Discussões contextuais direto nas tarefas.</p>
            </div>
            
            {/* Chat Bubble Visual */}
            <div className="space-y-2 mt-4">
              <div className="bg-zinc-800/50 rounded-lg rounded-tl-none p-2 w-3/4 border border-white/5">
                <div className="h-1.5 w-1/2 bg-zinc-600 rounded mb-1"></div>
                <div className="h-1.5 w-3/4 bg-zinc-700 rounded"></div>
              </div>
              <div className="bg-violet-500/20 rounded-lg rounded-tr-none p-2 w-3/4 ml-auto border border-violet-500/20">
                 <div className="h-1.5 w-2/3 bg-violet-400/50 rounded ml-auto"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Dark Mode (Small) */}
        <div className="relative group overflow-hidden rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-violet-500/50 transition-colors duration-500">
           <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="p-8 h-full flex flex-col relative z-10">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 border border-white/5 group-hover:bg-zinc-700 transition-colors">
              <Moon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Dark Mode Nativo</h3>
            <p className="text-zinc-400 text-sm">Descanso para os olhos. Projetado com contrastes perfeitos.</p>
            
            <div className="mt-auto flex items-center justify-center">
               <div className="w-16 h-8 rounded-full bg-zinc-800 border border-zinc-700 relative p-1">
                  <div className="w-6 h-6 rounded-full bg-white shadow-lg translate-x-8"></div>
               </div>
            </div>
          </div>
        </div>

        {/* Card 4: GitHub (Wide - Spans 2 cols) */}
        <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-violet-500/50 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="p-8 h-full flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="flex-1">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 border border-white/5 group-hover:bg-emerald-500/20 transition-colors">
                <GitBranch className="w-5 h-5 text-zinc-400 group-hover:text-emerald-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Integração GitHub</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Sincronize PRs e Issues automaticamente. Mantenha desenvolvimento e gestão sempre alinhados sem esforço manual.
              </p>
            </div>
            
            {/* Code Snippet Visual */}
            <div className="flex-1 w-full bg-zinc-950 border border-white/5 rounded-lg p-4 font-mono text-xs text-zinc-500 shadow-2xl">
              <div className="flex gap-1.5 mb-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <div className="space-y-1">
                <p><span className="text-purple-400">git</span> commit -m <span className="text-green-400">"fix: infinite loop"</span></p>
                <p><span className="text-purple-400">git</span> push origin <span className="text-blue-400">main</span></p>
                <p className="text-zinc-600 mt-2"># Fluxo.ai detected update...</p>
                <p className="text-emerald-400">✓ Task #420 moved to Done</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;