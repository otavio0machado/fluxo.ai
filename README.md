# Fluxo · landing study case

Landing fictícia para um produto SaaS de **automação visual entre
plataformas brasileiras de e-commerce** — Tray, Loja Integrada, Bling,
Tiny, Mercado Livre, Shopee, RD Station, Asaas, Loggi, WhatsApp Business
e mais 10 outros conectores nativos. Este repositório é um **study case**
para portfolio — não há produto real, CNPJ real ou cliente em produção
por trás.

## Sobre este study case

A versão original do repo era um **clone-de-Linear genérico**: paleta
violet+cyan dark, hero "Gerencie seu time na velocidade do pensamento",
navbar pill, logos fictícios "Acme Corp / Nebula / Velocity / Kinetix"
com ícones Lucide aleatórios (Triangle/Circle/Square/Hexagon), bento grid
de 4 features (Roadmaps Visuais / Chat Real-time / **Dark Mode Nativo** /
Integração GitHub — note que IA pôs *dark mode* como feature
diferenciada), pricing R$ 0/16/Sob Medida com toggle Mensal/Anual e -20%,
footer com 12 links # mortos. Title HTML dizia "Gestão de Times" mas
metadata.json original mencionava "automação com IA" — produto sem
identidade.

O exercício aqui foi tirar o "mais um clone Linear template default"
e dar uma **identidade brasileira nicho-específica**, defensável vs
Zapier/Make/n8n:

- **Nicho real**: stack brasileira de e-commerce (Tray, Bling, ML, RD,
  WhatsApp), com profundidade — *Bling tem 16 triggers e 31 actions
  no Fluxo, contra 4 e 8 no Zapier*. Diferencial verificável.
- **Lógica BR-específica**: NF-e por regime tributário, Pix com retry,
  segmentação de carrinho abandonado por LTV consultado em ERP, regras
  de cobrança Boleto. Coisas que template global não cobre.
- **Métricas auditáveis no hero**: 184 lojas em produção · 2,1 M
  execuções/dia (média 7d) · uptime 99,87% em 90 dias · status público
  em status.fluxo.com.br.
- **Casos abertos** (não "case de sucesso" com nome ocultado) — 3
  fluxos com trigger, steps numerados e resultado quantificado, em
  formato copiável para qualquer ferramenta de automação.
- **Preços por regime tributário** (MEI / Simples / Lucro Real), por
  execução, não por usuário. Sem "−50% por tempo limitado" e sem
  toggle Mensal/Anual com desconto fake.
- **Compliance brasileiro** no footer: CNPJ, razão social, endereço
  São Paulo, suporte em horário comercial Brasília, e-mail de suporte
  de domínio próprio.

## Estrutura

| Seção | Por quê |
| ---- | ---- |
| Hero | Posicionamento direto + métricas com fonte (uptime, lojas, execuções) |
| Conectores | 20 cards filtráveis por categoria, com triggers e actions reais |
| Casos | 3 fluxos rodando hoje, especificações abertas em formato monoespaçado |
| Preços | 3 planos por regime tributário + FAQ teaser inline com 2 perguntas honestas |
| Footer | CNPJ + endereço + horário Brasília + status pública |

## Decisões de design

- **Paleta technical-doc** (off-black #0E0F11, chalk #F4EFE6, ok #2F7D5C
  verde-conector, warn #C28A2B âmbar, err #B23A48 magenta). Plausible
  Analytics-style, não Linear+Vercel padrão IA. Sem violet+cyan blur.
- **Tipografia dupla**: *Inter* sans para corpo + *JetBrains Mono*
  para etiquetas mono (label-mono), preços, métricas, e o bloco de
  especificação dos fluxos. Sensação de documentação, não pitch.
- **Sem animação decorativa**: removidos `animate-blob`, `animate-scroll`,
  `animate-pulse-slow`, `animate-in slide-in-from-bottom-X`. Mantida
  apenas a transição de cor em hover.
- **Sem logos fictícios**: o ticker de "Acme Corp / Nebula / Velocity"
  com ícones Lucide rotativos foi substituído por **dl de métricas
  auditáveis** com link público para a status page.
- **Restrição de ícones**: 4 ícones funcionais (Menu, X, ArrowRight,
  Check). Removidos: Zap (logo), Triangle/Circle/Square/Hexagon
  (logos fictícios), Map/MessageSquare/Moon/GitBranch (bento icons),
  Twitter/Github/Linkedin (footer sociais).
- **Bordas retas** (rule editorial #23262C) em vez de `rounded-3xl`
  glass-card. Cards de conector e plano compartilham uma única border
  de hairline com divisores 1px, em vez de cards flutuantes com
  shadow-2xl.

## Stack

`React 19` · `TypeScript` · `Vite 6` · `Tailwind via CDN` · `lucide-react`

## Rodar local

```bash
npm install
npm run dev
```

Vite roda em `http://localhost:3000` (porta definida no `vite.config.ts`).

## Aviso

Todo o conteúdo deste site — Fluxo, CNPJ, endereço Augusta, métricas
de uptime, número de lojas, e-mail de suporte, valores de plano,
descrição dos fluxos, números de carrinho abandonado de R$ 312, lista
de 20 conectores e suas profundidades — é **fictício**. Foi escrito
pra parecer plausível como produto SaaS BR de automação, e não tem
qualquer pretensão de induzir contratação. Os dados de profundidade
de conector (triggers/actions) são exemplos didáticos.
