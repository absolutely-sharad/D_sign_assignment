import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { items, total, itemCount, updateQuantity, removeFromCart, clearCart } = useCart();

  if (!isOpen) return null;

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-6 h-6 text-emerald-600" />
              <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
              {itemCount > 0 && (
                <Badge variant="success">{itemCount} items</Badge>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-600 mb-6">Start shopping to add items to your cart.</p>
                <Button onClick={onClose}>Continue Shopping</Button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => {
                  const itemKey = `${item.product.id}-${item.selectedSize}-${item.selectedColor}`;
                  const selectedColor = item.product.colors.find(c => c.name === item.selectedColor);
                  
                  return (
                    <div key={itemKey} className="flex space-x-4 p-4 border border-gray-200 rounded-lg">
                      <img
                        src={selectedColor?.images[0] || item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                      />
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                            <p className="text-sm text-gray-600">
                              {item.selectedColor} • Size {item.selectedSize}
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                              {formatPrice(item.product.price)}
                            </p>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                              className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                              className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          
                          <span className="font-semibold text-gray-900">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Clear Cart */}
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="w-full text-center text-sm text-gray-500 hover:text-red-600 transition-colors"
                  >
                    Clear all items
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total:</span>
                <span>{formatPrice(total)}</span>
              </div>
              
              <div className="space-y-3">
                <Button size="lg" className="w-full">
                  Checkout
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={onClose}
                >
                  Continue Shopping
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                Free shipping on orders over $75
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};