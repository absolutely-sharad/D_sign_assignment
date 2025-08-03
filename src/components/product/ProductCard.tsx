import React from 'react';
import { Star, Leaf } from 'lucide-react';
import { Product } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add with default size and first color
    const defaultSize = product.sizes[3] || product.sizes[0]; // Size 8.5 or first available
    const defaultColor = product.colors[0].name;
    addToCart(product, defaultSize, defaultColor);
  };

  const formatPrice = (price: number) => `$${price}`;

  return (
    <Card hover className="group cursor-pointer overflow-hidden">
      <div onClick={() => onViewDetails(product)}>
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {product.originalPrice && (
              <Badge variant="error" size="sm">Sale</Badge>
            )}
            <Badge variant="success" size="sm" className="flex items-center space-x-1">
              <Leaf className="w-3 h-3" />
              <span>Sustainable</span>
            </Badge>
          </div>

          {/* Quick Add Button */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button
              size="sm"
              onClick={handleQuickAdd}
              className="shadow-lg"
            >
              Quick Add
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Star className="w-4 h-4 fill-current text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-gray-400">({product.reviewCount})</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Colors */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-xs text-gray-500">Colors:</span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color) => (
                <div
                  key={color.name}
                  className="w-4 h-4 rounded-full border-2 border-gray-200"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 3 && (
                <div className="w-4 h-4 rounded-full border-2 border-gray-200 bg-gray-100 flex items-center justify-center">
                  <span className="text-xs text-gray-600">+{product.colors.length - 3}</span>
                </div>
              )}
            </div>
          </div>

          {/* Price and Carbon Footprint */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {product.originalPrice ? (
                <>
                  <span className="font-bold text-lg text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                </>
              ) : (
                <span className="font-bold text-lg text-gray-900">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
            
            <div className="text-xs text-emerald-600 font-medium">
              {product.sustainability.carbonFootprint} kg CO₂
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};