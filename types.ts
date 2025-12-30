export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  listPrice: number;
  transferPrice: number;
  specs: string[];
  dataAos?: string;
}

export interface InfoCard {
  id?: string;
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export interface Testimonial {
  quote: string;
  author: string;
}