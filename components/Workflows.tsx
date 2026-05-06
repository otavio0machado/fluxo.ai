import React from 'react';
import { WORKFLOWS } from '../constants';

const Workflows: React.FC = () => {
  return (
    <section id="casos" className="w-full max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 border-t rule">
      <p className="label-mono text-chalk-mute mb-3">Casos · fluxos reais</p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight-2 text-chalk mb-3 max-w-2xl">
        Três fluxos rodando em produção hoje.
      </h2>
      <p className="text-chalk-soft max-w-2xl mb-12 leading-relaxed">
        Especificações abertas, não &ldquo;casos de sucesso&rdquo; com nome ocultado.
        Você consegue copiar a lógica e implementar — em Fluxo, em Make, em
        n8n ou direto em código.
      </p>

      <div className="space-y-12">
        {WORKFLOWS.map((w) => (
          <article key={w.id} className="grid md:grid-cols-12 gap-8 md:gap-10 border-t rule pt-10 first:border-t-0 first:pt-0">
            <header className="md:col-span-4">
              <p className="label-mono text-warn mb-3">Fluxo {w.id}</p>
              <h3 className="text-2xl font-semibold tracking-tight-2 text-chalk leading-tight mb-4">
                {w.title}
              </h3>
              <p className="text-sm text-chalk-soft italic mb-2">Para quem é</p>
              <p className="text-[14px] text-chalk-soft leading-relaxed">{w.who}</p>
            </header>

            <div className="md:col-span-8 bg-ink-soft border rule p-6 font-mono text-[13px]">
              <p className="label-mono text-ok mb-3">Trigger</p>
              <p className="text-chalk mb-6">{w.trigger}</p>

              <p className="label-mono text-chalk-mute mb-3">Steps</p>
              <ol className="space-y-2 text-chalk-soft mb-6 list-decimal list-inside marker:text-chalk-mute">
                {w.steps.map((s, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: s }} />
                ))}
              </ol>

              <p className="label-mono text-chalk-mute mb-3">Resultado observado</p>
              <p className="text-chalk leading-relaxed">{w.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Workflows;
