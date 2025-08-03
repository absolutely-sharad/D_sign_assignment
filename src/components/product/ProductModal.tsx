import React, { useState } from 'react';
import { X, Star, Leaf, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useCart } from '../../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const { addToCart } = useCart();

  React.useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[3] || product.sizes[0]); // Default to size 8.5 or first available
      setSelectedColor(product.colors[0].name);
      setSelectedImageIndex(0);
      setQuantity(1);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const selectedColorData = product.colors.find(c => c.name === selectedColor);
  const currentImages = selectedColorData?.images || product.images;

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      addToCart(product, selectedSize, selectedColor, quantity);
      onClose();
    }
  };

  const formatPrice = (price: number) => `$${price}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={currentImages[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Thumbnails */}
              {currentImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {currentImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImageIndex === index ? 'border-emerald-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="w-4 h-4 fill-current text-amber-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-gray-500">({product.reviewCount} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {product.originalPrice ? (
                    <>
                      <span className="text-2xl font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                      <Badge variant="error">
                        Save {formatPrice(product.originalPrice - product.price)}
                      </Badge>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {/* Sustainability Info */}
              <div className="bg-emerald-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-emerald-800">Sustainability</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-emerald-700">Materials: </span>
                    <span className="text-emerald-600">{product.sustainability.materials.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-medium text-emerald-700">Carbon Footprint: </span>
                    <span className="text-emerald-600">{product.sustainability.carbonFootprint} kg CO₂</span>
                  </div>
                  {product.sustainability.recyclable && (
                    <Badge variant="success" size="sm">♻️ Recyclable</Badge>
                  )}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Color: {selectedColor}</h3>
                <div className="grid grid-cols-4 gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`relative aspect-square rounded-lg border-2 overflow-hidden transition-all ${
                        selectedColor === color.name 
                          ? 'border-emerald-500 ring-2 ring-emerald-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={color.images[0]}
                        alt={color.name}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Size: {selectedSize}</h3>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 text-sm font-medium rounded-lg border transition-colors ${
                        selectedSize === size
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !selectedColor || !product.inStock}
                  className="w-full"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart - {formatPrice(product.price * quantity)}
                </Button>
                
                {!product.inStock && (
                  <p className="text-center text-red-600 text-sm">Currently out of stock</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};