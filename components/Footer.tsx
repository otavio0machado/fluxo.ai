import React from 'react';
import { COMPANY } from '../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t rule py-14 text-sm">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-5">
          <p className="text-base font-semibold text-chalk tracking-tight-2 mb-2">{COMPANY.name}</p>
          <p className="label-mono text-chalk-mute mb-4">automação · e-commerce BR · {COMPANY.founded}</p>
          <p className="text-[13px] text-chalk-soft leading-relaxed max-w-sm">
            {COMPANY.legalName}<br />
            CNPJ {COMPANY.cnpj}<br />
            {COMPANY.address}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="label-mono text-chalk-mute mb-3">Produto</p>
          <ul className="space-y-2 text-[13px] text-chalk-soft">
            <li><a href="#conectores" className="hover:text-chalk transition-colors">Conectores</a></li>
            <li><a href="#casos" className="hover:text-chalk transition-colors">Casos</a></li>
            <li><a href="#precos" className="hover:text-chalk transition-colors">Preços</a></li>
            <li><a href="/changelog" className="hover:text-chalk transition-colors">Changelog</a></li>
            <li><a href="/status" className="hover:text-chalk transition-colors">Status (status.fluxo.com.br)</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="label-mono text-chalk-mute mb-3">Para times</p>
          <ul className="space-y-2 text-[13px] text-chalk-soft">
            <li><a href="/docs" className="hover:text-chalk transition-colors">Documentação</a></li>
            <li><a href="/api" className="hover:text-chalk transition-colors">API</a></li>
            <li><a href="/sdk" className="hover:text-chalk transition-colors">SDK · Node</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="label-mono text-chalk-mute mb-3">Suporte</p>
          <p className="text-[13px] text-chalk-soft leading-relaxed">{COMPANY.supportHours}</p>
          <p className="text-[13px] text-chalk-soft mt-2">
            <a href="mailto:suporte@fluxo.com.br" className="hover:text-chalk transition-colors">suporte@fluxo.com.br</a>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 border-t rule pt-6 flex flex-col md:flex-row gap-3 justify-between text-[12px] text-chalk-mute">
        <p>© {year} {COMPANY.legalName}. Conteúdo deste site é fictício, parte de um study case.</p>
        <p>
          Este é um <a className="underline hover:text-chalk" href="https://github.com/otavio0machado/fluxo.ai" target="_blank" rel="noopener noreferrer">study case</a> — Fluxo não é uma empresa em operação.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
