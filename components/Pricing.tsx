import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  // Pricing Data Logic
  const prices = {
    starter: isAnnual ? 0 : 0,
    pro: isAnnual ? 16 : 20,
    enterprise: 'Sob Medida'
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Preços transparentes</h2>
        <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
          Escolha o plano ideal para o tamanho da sua equipe. Cancele a qualquer momento.
        </p>
        
        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 bg-zinc-900/50 p-1.5 rounded-full border border-white/5 w-fit mx-auto">
          <button 
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${!isAnnual ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            Mensal
          </button>
          <button 
             onClick={() => setIsAnnual(true)}
             className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${isAnnual ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            Anual
            <span className="text-[10px] font-bold bg-violet-500/20 text-violet-300 px-1.5 py-0.5 rounded-md border border-violet-500/20">
              -20%
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl items-start">
        
        {/* Starter Plan */}
        <div className="glass-card rounded-3xl p-8 flex flex-col border border-white/5 hover:border-zinc-700 transition-colors">
          <h3 className="text-lg font-medium text-zinc-100 mb-2">Starter</h3>
          <p className="text-zinc-500 text-sm mb-6 h-10">Ideal para freelancers e testes.</p>
          <div className="text-4xl font-bold text-white mb-6 tracking-tight">
            R$ {prices.starter}
            <span className="text-lg text-zinc-500 font-normal ml-1">/mês</span>
          </div>
          <button className="w-full py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-medium transition-all duration-200 mb-8 text-sm">
            Começar Grátis
          </button>
          <ul className="space-y-3">
            {['Até 3 membros', '2 Projetos ativos', 'Histórico de 7 dias'].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                <Check className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="relative glass-card rounded-3xl p-8 flex flex-col border border-violet-500/30 bg-zinc-900/60 shadow-[0_0_30px_-10px_rgba(139,92,246,0.15)] md:-translate-y-4 z-10">
           <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-violet-600 text-[10px] font-bold text-white uppercase tracking-wider border border-violet-400">
            Recomendado
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Pro Team</h3>
          <p className="text-zinc-400 text-sm mb-6 h-10">Poder total para times ágeis.</p>
          <div className="text-5xl font-bold text-white mb-6 tracking-tight">
            R$ {prices.pro}
            <span className="text-lg text-zinc-500 font-normal ml-1">/mês</span>
          </div>
          <button className="w-full py-2.5 rounded-lg bg-white text-black hover:bg-zinc-200 font-bold transition-all duration-200 mb-8 text-sm shadow-lg shadow-white/10">
            Assinar Pro
          </button>
          <ul className="space-y-3">
            {['Membros ilimitados', 'Projetos ilimitados', 'Analytics Avançado', 'Integrações (GitHub/Slack)'].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-zinc-200">
                <Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="glass-card rounded-3xl p-8 flex flex-col border border-white/5 hover:border-zinc-700 transition-colors">
          <h3 className="text-lg font-medium text-zinc-100 mb-2">Enterprise</h3>
          <p className="text-zinc-500 text-sm mb-6 h-10">Controle e segurança total.</p>
          <div className="text-4xl font-bold text-white mb-6 tracking-tight">
            {prices.enterprise}
          </div>
          <button className="w-full py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-medium transition-all duration-200 mb-8 text-sm">
            Falar com Vendas
          </button>
          <ul className="space-y-3">
            {['SSO & SAML', 'SLA Garantido', 'Gerente de Conta', 'Audit Logs'].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                <Check className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Pricing;