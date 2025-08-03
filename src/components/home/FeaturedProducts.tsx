import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '../product/ProductCard';
import { products } from '../../data/products';
import { Product } from '../../types';
import { Button } from '../ui/Button';

interface FeaturedProductsProps {
  onViewProduct: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onViewProduct }) => {
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Favorites
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our most loved shoes, chosen by customers worldwide for their 
            unmatched comfort and sustainable design.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProduct}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            View All Products
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};