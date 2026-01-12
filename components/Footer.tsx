import React from 'react';
import { Zap, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-zinc-950 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded bg-violet-600 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-lg font-bold">Fluxo.ai</span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            A plataforma definitiva para times que constroem o futuro. Gerencie menos, produza mais.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-zinc-200">Produto</h4>
          <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Features</a>
          <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Integrações</a>
          <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Preços</a>
          <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Changelog</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-zinc-200">Empresa</h4>
          <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Sobre</a>
          <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Blog</a>
          <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Carreiras</a>
          <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Contato</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-zinc-200">Legal</h4>
          <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacidade</a>
          <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Termos</a>
          <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Segurança</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
        <p className="text-zinc-600 text-sm">© 2026 Fluxo.ai Inc. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;