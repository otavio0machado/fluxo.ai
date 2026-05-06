import React, { useState, useMemo } from 'react';
import { CONNECTORS } from '../constants';
import { Connector } from '../types';

type Category = 'todas' | Connector['category'];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'plataforma', label: 'Plataforma' },
  { id: 'erp', label: 'ERP' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'pagamento', label: 'Pagamento' },
  { id: 'logistica', label: 'Logística' },
  { id: 'mensageria', label: 'Mensageria' },
];

const CATEGORY_LABEL: Record<Connector['category'], string> = {
  plataforma: 'plataforma',
  erp: 'ERP',
  marketing: 'marketing',
  pagamento: 'pagamento',
  logistica: 'logística',
  mensageria: 'mensageria',
};

const Connectors: React.FC = () => {
  const [filter, setFilter] = useState<Category>('todas');

  const filtered = useMemo(() => {
    if (filter === 'todas') return CONNECTORS;
    return CONNECTORS.filter((c) => c.category === filter);
  }, [filter]);

  return (
    <section id="conectores" className="w-full max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 border-t rule">
      <p className="label-mono text-chalk-mute mb-3">Conectores</p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight-2 text-chalk mb-3 max-w-2xl">
        20 conectores. 14 brasileiros, com profundidade.
      </h2>
      <p className="text-chalk-soft max-w-2xl mb-10 leading-relaxed">
        Cada conector com triggers e actions próprias — o número ao lado do
        nome é a quantidade real, não &ldquo;qualquer evento&rdquo; genérico. Lista
        completa abaixo, filtrada por categoria.
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`label-mono px-3 py-1.5 border rule transition-colors ${filter === c.id ? 'bg-chalk text-ink border-chalk' : 'text-chalk-soft hover:bg-ink-soft'}`}
          >
            {c.label}
            {c.id !== 'todas' && (
              <span className="ml-2 text-chalk-mute">{CONNECTORS.filter((x) => x.category === c.id).length}</span>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-ink-line border rule">
        {filtered.map((c) => (
          <article key={c.name} className="bg-ink p-5 flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <h3 className="text-chalk text-base font-medium">{c.name}</h3>
              <span className="label-mono text-chalk-mute">{c.region}</span>
            </div>
            <p className="label-mono text-chalk-mute">{CATEGORY_LABEL[c.category]}</p>
            <dl className="flex gap-4 mt-auto pt-3 border-t rule font-mono text-xs">
              <div>
                <dt className="text-chalk-mute">triggers</dt>
                <dd className="text-chalk text-sm">{c.triggers}</dd>
              </div>
              <div>
                <dt className="text-chalk-mute">actions</dt>
                <dd className="text-chalk text-sm">{c.actions}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Connectors;
