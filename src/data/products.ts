import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Tree Runners',
    category: 'runners',
    price: 98,
    images: [
      'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Our original running shoe made with eucalyptus tree fiber for incredible comfort and breathability.',
    sustainability: {
      materials: ['Eucalyptus Tree Fiber', 'Recycled Plastic', 'Castor Bean Oil'],
      carbonFootprint: 7.6,
      recyclable: true
    },
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    colors: [
      { 
        name: 'Natural Black', 
        hex: '#1f2937',
        images: ['https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800']
      },
      { 
        name: 'Natural Grey', 
        hex: '#6b7280',
        images: ['https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800']
      }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 1247
  },
  {
    id: '2',
    name: 'Tree Loungers',
    category: 'loungers',
    price: 95,
    images: [
      'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'The world\'s most comfortable slip-on made with eucalyptus tree fiber.',
    sustainability: {
      materials: ['Eucalyptus Tree Fiber', 'Merino Wool', 'Recycled Plastic'],
      carbonFootprint: 6.8,
      recyclable: true
    },
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    colors: [
      { 
        name: 'Natural White', 
        hex: '#f9fafb',
        images: ['https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=800']
      },
      { 
        name: 'Tui Blue', 
        hex: '#1e40af',
        images: ['https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=800']
      }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 892
  },
  {
    id: '3',
    name: 'Wool Runners',
    category: 'runners',
    price: 98,
    originalPrice: 115,
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3613132/pexels-photo-3613132.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'The original wool runner that started it all. Made with soft, cozy merino wool.',
    sustainability: {
      materials: ['ZQ Merino Wool', 'Castor Bean Oil', 'Recycled Plastic'],
      carbonFootprint: 8.1,
      recyclable: true
    },
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    colors: [
      { 
        name: 'Tuke Red', 
        hex: '#dc2626',
        images: ['https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800']
      },
      { 
        name: 'Kotare Green', 
        hex: '#059669',
        images: ['https://images.pexels.com/photos/3613132/pexels-photo-3613132.jpeg?auto=compress&cs=tinysrgb&w=800']
      }
    ],
    inStock: true,
    rating: 4.3,
    reviewCount: 2156
  },
  {
    id: '4',
    name: 'Tree Dashers',
    category: 'runners',
    price: 125,
    images: [
      'https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'High-performance running shoe designed for speed and comfort on any terrain.',
    sustainability: {
      materials: ['Eucalyptus Tree Fiber', 'Sweet Foam', 'Recycled Plastic'],
      carbonFootprint: 9.2,
      recyclable: true
    },
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    colors: [
      { 
        name: 'Storm', 
        hex: '#374151',
        images: ['https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=800']
      },
      { 
        name: 'Blizzard', 
        hex: '#f3f4f6',
        images: ['https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=800']
      }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 743
  },
  {
    id: '5',
    name: 'Wool Pipers',
    category: 'slip-ons',
    price: 95,
    images: [
      'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1153838/pexels-photo-1153838.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Minimalist slip-on with merino wool upper for everyday comfort.',
    sustainability: {
      materials: ['ZQ Merino Wool', 'Castor Bean Oil', 'Organic Cotton'],
      carbonFootprint: 6.4,
      recyclable: true
    },
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    colors: [
      { 
        name: 'Natural Grey', 
        hex: '#9ca3af',
        images: ['https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=800']
      },
      { 
        name: 'Natural Black', 
        hex: '#111827',
        images: ['https://images.pexels.com/photos/1153838/pexels-photo-1153838.jpeg?auto=compress&cs=tinysrgb&w=800']
      }
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 567
  },
  {
    id: '6',
    name: 'Tree Skippers',
    category: 'slip-ons',
    price: 78,
    images: [
      'https://images.pexels.com/photos/1240894/pexels-photo-1240894.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Breezy boat shoe made with eucalyptus tree fiber for warm weather adventures.',
    sustainability: {
      materials: ['Eucalyptus Tree Fiber', 'Algae Foam', 'Recycled Plastic'],
      carbonFootprint: 5.9,
      recyclable: true
    },
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    colors: [
      { 
        name: 'Natural White', 
        hex: '#ffffff',
        images: ['https://images.pexels.com/photos/1240894/pexels-photo-1240894.jpeg?auto=compress&cs=tinysrgb&w=800']
      },
      { 
        name: 'Hazy Indigo', 
        hex: '#4338ca',
        images: ['https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=800']
      }
    ],
    inStock: true,
    rating: 4.2,
    reviewCount: 334
  },
  {
    id: '7',
    name: 'Wool Runners Mizzles',
    category: 'runners',
    price: 135,
    images: [
      'https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Weather-resistant runners with a water-repellent finish for all-weather comfort.',
    sustainability: {
      materials: ['ZQ Merino Wool', 'Bio-Based Nylon', 'Recycled Plastic'],
      carbonFootprint: 9.8,
      recyclable: true
    },
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    colors: [
      { 
        name: 'Storm', 
        hex: '#374151',
        images: ['https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=800']
      },
      { 
        name: 'Kauri Brown', 
        hex: '#92400e',
        images: ['https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800']
      }
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 445
  },
  {
    id: '8',
    name: 'Tree Toppers',
    category: 'hikers',
    price: 145,
    images: [
      'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'High-top hiking boot with superior ankle support and weather protection.',
    sustainability: {
      materials: ['Eucalyptus Tree Fiber', 'Merino Wool', 'Natural Rubber'],
      carbonFootprint: 11.2,
      recyclable: true
    },
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    colors: [
      { 
        name: 'Pine', 
        hex: '#064e3b',
        images: ['https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=800']
      },
      { 
        name: 'Burnt Sienna', 
        hex: '#9a3412',
        images: ['https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=800']
      }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 289
  }
];

export const categories = [
  { id: 'all', name: 'All Shoes', count: products.length },
  { id: 'runners', name: 'Runners', count: products.filter(p => p.category === 'runners').length },
  { id: 'loungers', name: 'Loungers', count: products.filter(p => p.category === 'loungers').length },
  { id: 'slip-ons', name: 'Slip-Ons', count: products.filter(p => p.category === 'slip-ons').length },
  { id: 'hikers', name: 'Hikers', count: products.filter(p => p.category === 'hikers').length }
];