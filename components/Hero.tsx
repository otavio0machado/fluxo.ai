import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="topo" className="w-full pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="w-full max-w-6xl mx-auto px-5 md:px-8">
        <p className="label-mono text-chalk-mute mb-6">
          Versão 2.4 · {COMPANY.customers} lojas em produção · São Paulo
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight-2 text-chalk mb-7 max-w-3xl leading-[1.05]">
          Tray, Bling, Mercado Livre, RD, WhatsApp — todos
          conversando entre si, sem você cuidar.
        </h1>

        <p className="text-base md:text-lg text-chalk-soft leading-relaxed mb-4 max-w-2xl">
          Automação visual com 20 conectores nativos para a stack brasileira
          de e-commerce. Inclui lógica de NF-e (Simples Nacional e Lucro Real),
          fluxos de Pix com retry, segmentação de carrinho abandonado por
          LTV — coisas que Zapier e Make ou cobrem mal ou não cobrem.
        </p>
        <p className="text-base md:text-lg text-chalk-soft leading-relaxed mb-10 max-w-2xl">
          Suporte em PT-BR no horário comercial Brasília. Self-hosted
          opcional no plano Lucro Real, para quem precisa.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-16">
          <a
            href="#precos"
            className="inline-flex items-center justify-center gap-2 bg-chalk text-ink px-5 py-3 hover:bg-chalk-soft transition-colors text-[15px] font-medium"
          >
            14 dias grátis · sem cartão
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#casos"
            className="inline-flex items-center justify-center gap-2 border rule px-5 py-3 hover:bg-ink-soft transition-colors text-[15px] text-chalk"
          >
            Ver 3 fluxos reais
          </a>
        </div>

        {/* Métricas auditáveis, não logos fictícios */}
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-5 max-w-3xl border-t rule pt-8 font-mono text-sm">
          <div>
            <dt className="label-mono text-chalk-mute mb-1">Conectores</dt>
            <dd className="text-chalk text-2xl font-medium">20</dd>
            <p className="text-xs text-chalk-mute mt-1">14 só BR</p>
          </div>
          <div>
            <dt className="label-mono text-chalk-mute mb-1">Lojas em produção</dt>
            <dd className="text-chalk text-2xl font-medium">{COMPANY.customers}</dd>
          </div>
          <div>
            <dt className="label-mono text-chalk-mute mb-1">Execuções/dia</dt>
            <dd className="text-chalk text-2xl font-medium">2,1 M</dd>
            <p className="text-xs text-chalk-mute mt-1">média · 7d</p>
          </div>
          <div>
            <dt className="label-mono text-chalk-mute mb-1">Uptime · 90d</dt>
            <dd className="text-chalk text-2xl font-medium">99,87%</dd>
            <p className="text-xs text-chalk-mute mt-1"><a href="/status" className="hover:text-chalk transition-colors underline decoration-dotted">status.fluxo.com.br</a></p>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Hero;
