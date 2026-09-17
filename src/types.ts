export type AppViewMode = 'digital' | 'print' | 'roleta';

export type MenuCategory = 
  | 'todos'
  | 'hamburgueres'
  | 'hotdog-porcoes'
  | 'pizzas-salgadas'
  | 'pizzas-doces'
  | 'bebidas';

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  prices?: { label: string; price: string }[];
  category: 'hamburgueres' | 'hotdog-porcoes' | 'pizzas-salgadas' | 'pizzas-doces' | 'bebidas';
  subCategory?: string;
  badge?: string;
  highlight?: boolean;
}

export interface PizzaPricing {
  media: string;
  grande: string;
  fatiasMedia: string;
  fatiasGrande: string;
}
