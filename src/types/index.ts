export interface Product {
  id: string;
  name: string;
  category: 'runners' | 'loungers' | 'hikers' | 'slip-ons';
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  sustainability: {
    materials: string[];
    carbonFootprint: number;
    recyclable: boolean;
  };
  sizes: string[];
  colors: ProductColor[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export interface ProductColor {
  name: string;
  hex: string;
  images: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}