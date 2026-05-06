import { Connector, Workflow, PricingPlan, NavLink } from './types';

export const COMPANY = {
  name: 'Fluxo',
  legalName: 'Fluxo Automação Comercial LTDA',
  cnpj: '52.187.094/0001-43',
  address: 'R. Augusta, 2840 · 8º andar · Cerqueira César, São Paulo · SP',
  founded: 2023,
  team: 9,
  customers: 184,
  supportHours: 'Seg a sex · 9h–18h (horário de Brasília)',
};

export const NAV: NavLink[] = [
  { label: 'Conectores', href: '#conectores' },
  { label: 'Casos', href: '#casos' },
  { label: 'Preços', href: '#precos' },
  { label: 'Documentação', href: '/docs' },
];

export const CONNECTORS: Connector[] = [
  // E-commerce platforms
  { name: 'Tray', category: 'plataforma', region: 'BR', triggers: 14, actions: 23 },
  { name: 'Loja Integrada', category: 'plataforma', region: 'BR', triggers: 11, actions: 19 },
  { name: 'Bagy', category: 'plataforma', region: 'BR', triggers: 9, actions: 16 },
  { name: 'Nuvemshop', category: 'plataforma', region: 'LATAM', triggers: 13, actions: 22 },
  { name: 'WooCommerce', category: 'plataforma', region: 'global', triggers: 18, actions: 27 },
  // Marketplaces (treated as plataforma here for simplicity)
  { name: 'Mercado Livre', category: 'plataforma', region: 'LATAM', triggers: 12, actions: 18 },
  { name: 'Shopee', category: 'plataforma', region: 'LATAM', triggers: 8, actions: 11 },
  // ERP
  { name: 'Bling', category: 'erp', region: 'BR', triggers: 16, actions: 31 },
  { name: 'Tiny ERP', category: 'erp', region: 'BR', triggers: 14, actions: 28 },
  { name: 'Olist Tiny', category: 'erp', region: 'BR', triggers: 13, actions: 26 },
  // Marketing / CRM
  { name: 'RD Station Marketing', category: 'marketing', region: 'BR', triggers: 9, actions: 15 },
  { name: 'RD Station CRM', category: 'marketing', region: 'BR', triggers: 7, actions: 13 },
  { name: 'Hotmart', category: 'marketing', region: 'BR', triggers: 11, actions: 9 },
  // Pagamentos
  { name: 'Pagar.me', category: 'pagamento', region: 'BR', triggers: 8, actions: 14 },
  { name: 'Asaas', category: 'pagamento', region: 'BR', triggers: 7, actions: 12 },
  { name: 'Mercado Pago', category: 'pagamento', region: 'LATAM', triggers: 10, actions: 16 },
  // Logística
  { name: 'Loggi', category: 'logistica', region: 'BR', triggers: 6, actions: 11 },
  { name: 'Mercado Envios', category: 'logistica', region: 'LATAM', triggers: 5, actions: 9 },
  { name: 'Frenet', category: 'logistica', region: 'BR', triggers: 4, actions: 7 },
  // Mensageria
  { name: 'WhatsApp Business', category: 'mensageria', region: 'global', triggers: 7, actions: 13 },
];

export const WORKFLOWS: Workflow[] = [
  {
    id: '01',
    title: 'Estoque Bling → Mercado Livre, sem o gap de 4h',
    trigger: 'Estoque do produto X muda no Bling',
    steps: [
      'Buscar SKU correspondente no anúncio do Mercado Livre',
      'Diff entre estoque Bling e estoque ML',
      'Se diff &gt; 0, atualizar quantidade do anúncio ML',
      'Se anúncio estiver pausado e estoque &gt; 5, reativar',
      'Postar log no canal #estoque do Slack',
    ],
    outcome: 'Tempo médio de propagação 12s. Antes: 4h por sincronização batch nativa do ML.',
    who: 'Loja Tray com 1.200+ SKUs em ML',
  },
  {
    id: '02',
    title: 'Carrinho abandonado RD → WhatsApp, segmentado por LTV',
    trigger: 'Lead em "Carrinho abandonado" no RD Station Marketing há 12h',
    steps: [
      'Consultar histórico de pedidos do CPF na Tray',
      'Calcular LTV em 12 meses',
      'Se LTV &gt; R$ 800: WhatsApp via Z-API com cupom 10%',
      'Se LTV R$ 200–800: WhatsApp sem cupom, copy curta',
      'Se LTV &lt; R$ 200 ou primeiro pedido: e-mail RD com fluxo padrão',
    ],
    outcome: 'Taxa média de conversão 13% (Z-API) vs 4,2% (e-mail RD nativo). Em 47 lojas.',
    who: 'E-commerce com ticket &gt; R$ 250 e base &gt; 5k contatos',
  },
  {
    id: '03',
    title: 'Pix recebido (Asaas) → NF-e via Bling + entrega Loggi',
    trigger: 'Webhook Asaas: Pix confirmado para o pedido #N',
    steps: [
      'Marcar pedido como pago na Tray',
      'Disparar emissão de NF-e no Bling com regime Simples Nacional',
      'Aguardar XML autorizado (timeout 60s, retry 3x)',
      'Anexar PDF da NF ao pedido na Tray',
      'Solicitar coleta Loggi a partir do CEP do remetente',
      'Notificar cliente via WhatsApp com código de rastreio',
    ],
    outcome: 'Pedido pago entra em coleta em até 4 minutos, 7 dias por semana, sem operador humano.',
    who: 'Lojas que vendem fim de semana e tinham pedido parado até segunda',
  },
];

export const PRICING: PricingPlan[] = [
  {
    name: 'MEI',
    price: 'R$ 89',
    unit: '/mês',
    taxNote: 'até 4.000 execuções/mês · até 5 fluxos ativos',
    fit: 'Loja com 1 plataforma + 1 ERP. Boa pra quem está começando ou rodando solo.',
    features: [
      'Todos os 20 conectores',
      '5 fluxos ativos',
      '4.000 execuções/mês',
      'Histórico de execução: 30 dias',
      'Suporte por e-mail (resposta em 24h úteis)',
    ],
    cta: 'Começar 14 dias grátis',
  },
  {
    name: 'Simples',
    price: 'R$ 249',
    unit: '/mês',
    taxNote: 'até 25.000 execuções/mês · fluxos ilimitados',
    fit: 'Loja consolidada com 2-3 marketplaces, ERP + plataforma + WhatsApp.',
    features: [
      'Todos os 20 conectores',
      'Fluxos ilimitados',
      '25.000 execuções/mês',
      'Histórico de execução: 90 dias',
      'Suporte por chat (resposta em 1h útil)',
      'Webhook custom (HTTP/HTTPS)',
    ],
    cta: 'Começar 14 dias grátis',
    highlighted: true,
  },
  {
    name: 'Lucro Real',
    price: 'R$ 749',
    unit: '/mês',
    taxNote: 'até 150.000 execuções/mês · auditoria + SSO',
    fit: 'Lojas com faturamento &gt; R$ 1M/mês ou múltiplas filiais. Compliance e auditoria.',
    features: [
      'Todos os 20 conectores',
      'Fluxos ilimitados',
      '150.000 execuções/mês',
      'Histórico completo (sem expiração)',
      'Suporte por chat e telefone (SLA 30min úteis)',
      'SSO via Google Workspace ou Microsoft 365',
      'Audit log com exportação CSV',
      'Self-hosted opcional (mediante consulta)',
    ],
    cta: 'Falar com vendas',
  },
];

export const FAQ_TEASER = [
  {
    q: 'Vocês cobrem tudo o que o Zapier cobre?',
    a: 'Não. Cobrimos a stack brasileira de e-commerce com profundidade — Bling tem 16 triggers e 31 actions no Fluxo, contra 4 e 8 no Zapier. Em troca, não cobrimos integrações de produtividade SaaS-genérica que o Zapier cobre (Airtable Enterprise, Salesforce Marketing Cloud, etc.). Se o seu caso é stack BR, somos melhores. Se é stack global enterprise, Zapier ou Make seguem mais adequados.',
  },
  {
    q: 'Tem self-hosted?',
    a: 'Plano Lucro Real, mediante consulta. Entregamos imagem Docker, instruções de subida em VPS e suporte de implantação inicial. Não é o caminho recomendado para a maioria — mas para quem tem time DevOps e exige dado em servidor próprio, está disponível.',
  },
];
