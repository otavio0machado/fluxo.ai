import { LucideIcon } from 'lucide-react';

export interface Connector {
  name: string;
  category: 'plataforma' | 'erp' | 'marketing' | 'pagamento' | 'logistica' | 'mensageria';
  region: string;
  triggers: number;
  actions: number;
}

export interface Workflow {
  id: string;
  title: string;
  trigger: string;
  steps: string[];
  outcome: string;
  who: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  unit: string;
  taxNote?: string;
  fit: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
