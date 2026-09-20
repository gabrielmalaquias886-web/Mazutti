export interface ProductCardItem {
  id: string;
  name: string;
  category: 'Campo' | 'Society' | 'Futsal' | 'Elite';
  description: string;
  image?: string;
  badge?: string;
}

export interface GameTypeItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  spec: string;
}
