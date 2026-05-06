import React from 'react';
import { Check } from 'lucide-react';
import { PRICING, FAQ_TEASER } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="precos" className="w-full max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 border-t rule">
      <p className="label-mono text-chalk-mute mb-3">Preços</p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight-2 text-chalk mb-3 max-w-2xl">
        Por execução de fluxo, não por usuário. Como você cobra do cliente.
      </h2>
      <p className="text-chalk-soft max-w-2xl mb-12 leading-relaxed">
        Cada execução conta como uma rodada do fluxo (do trigger até o último
        step). Retry de erro com backoff conta como uma única execução.
        Sem &ldquo;-50% por tempo limitado&rdquo; — preço fixo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border rule mb-16">
        {PRICING.map((p) => (
          <article
            key={p.name}
            className={`bg-ink p-6 md:p-8 flex flex-col ${p.highlighted ? 'relative' : ''}`}
          >
            {p.highlighted && (
              <span className="label-mono text-warn mb-3">Mais escolhido</span>
            )}
            {!p.highlighted && <span className="label-mono text-chalk-mute mb-3">Plano</span>}
            <h3 className="text-xl font-semibold text-chalk mb-1">{p.name}</h3>
            <div className="flex items-baseline gap-1 mb-1 mt-3">
              <span className="text-3xl font-semibold text-chalk font-mono">{p.price}</span>
              <span className="text-chalk-mute text-sm font-mono">{p.unit}</span>
            </div>
            {p.taxNote && <p className="label-mono text-chalk-mute mb-5">{p.taxNote}</p>}
            <p className="text-[14px] text-chalk-soft italic mb-6 leading-relaxed">{p.fit}</p>
            <ul className="space-y-2.5 mb-8 text-[14px]">
              {p.features.map((f, i) => (
                <li key={i} className="flex gap-2.5 text-chalk-soft leading-snug">
                  <Check size={14} strokeWidth={1.8} className="text-ok shrink-0 mt-1" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-auto w-full py-3 text-sm font-medium transition-colors ${p.highlighted ? 'bg-chalk text-ink hover:bg-chalk-soft' : 'border rule text-chalk hover:bg-ink-soft'}`}
            >
              {p.cta}
            </button>
          </article>
        ))}
      </div>

      {/* FAQ teaser inline pra quebrar simetria template-IA */}
      <div className="grid md:grid-cols-2 gap-10 border-t rule pt-12">
        {FAQ_TEASER.map((q, i) => (
          <article key={i}>
            <h4 className="text-lg font-semibold text-chalk mb-3 leading-snug">{q.q}</h4>
            <p className="text-[14px] text-chalk-soft leading-relaxed">{q.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
