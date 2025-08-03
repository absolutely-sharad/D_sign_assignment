<template>
  <section class="product-grid-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ settings.title }}</h2>
        <p class="section-subtitle">{{ settings.subtitle }}</p>
      </div>

      <div class="products-grid" :class="`grid-cols-${settings.gridColumns}`">
        <div 
          v-for="product in featuredProducts" 
          :key="product.id"
          class="product-card"
          @click="openProductModal(product)"
        >
          <div class="product-image-container">
            <img 
              :src="product.images[0]" 
              :alt="product.name"
              class="product-image"
            />
            
            <div class="product-badges">
              <span v-if="product.originalPrice" class="badge badge-sale">Sale</span>
              <span v-if="settings.showSustainabilityInfo" class="badge badge-sustainable">
                <svg class="badge-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.82C6.16 17.4 9 12.3 17 10.5V8z"/>
                </svg>
                Sustainable
              </span>
            </div>

            <button class="quick-add-btn" @click.stop="quickAddToCart(product)">
              Quick Add
            </button>
          </div>

          <div class="product-info">
            <div class="product-header">
              <h3 class="product-name">{{ product.name }}</h3>
              <div class="product-rating">
                <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>{{ product.rating }}</span>
                <span class="review-count">({{ product.reviewCount }})</span>
              </div>
            </div>

            <p class="product-description">{{ product.description }}</p>

            <div class="product-colors">
              <span class="colors-label">Colors:</span>
              <div class="color-swatches">
                <div 
                  v-for="(color, index) in product.colors.slice(0, 3)" 
                  :key="color.name"
                  class="color-swatch"
                  :style="{ backgroundColor: color.hex }"
                  :title="color.name"
                ></div>
                <div v-if="product.colors.length > 3" class="color-more">
                  +{{ product.colors.length - 3 }}
                </div>
              </div>
            </div>

            <div class="product-footer">
              <div class="product-pricing">
                <span v-if="product.originalPrice" class="original-price">
                  ${{ product.originalPrice }}
                </span>
                <span class="current-price">${{ product.price }}</span>
              </div>
              
              <div v-if="settings.showSustainabilityInfo" class="carbon-footprint">
                {{ product.sustainability.carbonFootprint }} kg CO₂
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-footer">
        <button class="btn-outline" @click="viewAllProducts">
          View All Products
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductGrid',
  props: {
    settings: {
      type: Object,
      default: () => ({
        title: "Featured Products",
        subtitle: "Our most loved shoes",
        productsToShow: 4,
        showSustainabilityInfo: true,
        gridColumns: 4
      })
    }
  },
  data() {
    return {
      featuredProducts: [
        {
          id: '1',
          name: 'Tree Runners',
          price: 98,
          originalPrice: null,
          images: ['https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'],
          description: 'Our original running shoe made with eucalyptus tree fiber for incredible comfort.',
          sustainability: {
            carbonFootprint: 7.6
          },
          colors: [
            { name: 'Natural Black', hex: '#1f2937' },
            { name: 'Natural Grey', hex: '#6b7280' }
          ],
          rating: 4.5,
          reviewCount: 1247
        },
        {
          id: '2', 
          name: 'Tree Loungers',
          price: 95,
          originalPrice: null,
          images: ['https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=800'],
          description: 'The world\'s most comfortable slip-on made with eucalyptus tree fiber.',
          sustainability: {
            carbonFootprint: 6.8
          },
          colors: [
            { name: 'Natural White', hex: '#f9fafb' },
            { name: 'Tui Blue', hex: '#1e40af' }
          ],
          rating: 4.7,
          reviewCount: 892
        },
        {
          id: '3',
          name: 'Wool Runners', 
          price: 98,
          originalPrice: 115,
          images: ['https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800'],
          description: 'The original wool runner that started it all. Made with soft, cozy merino wool.',
          sustainability: {
            carbonFootprint: 8.1
          },
          colors: [
            { name: 'Tuke Red', hex: '#dc2626' },
            { name: 'Kotare Green', hex: '#059669' }
          ],
          rating: 4.3,
          reviewCount: 2156
        },
        {
          id: '4',
          name: 'Tree Dashers',
          price: 125,
          originalPrice: null,
          images: ['https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=800'],
          description: 'High-performance running shoe designed for speed and comfort on any terrain.',
          sustainability: {
            carbonFootprint: 9.2
          },
          colors: [
            { name: 'Storm', hex: '#374151' },
            { name: 'Blizzard', hex: '#f3f4f6' }
          ],
          rating: 4.6,
          reviewCount: 743
        }
      ]
    }
  },
  methods: {
    openProductModal(product) {
      // Integrate with Ecwid product modal
      if (window.Ecwid) {
        window.Ecwid.openPage('product', { id: product.id });
      }
    },
    quickAddToCart(product) {
      // Add to Ecwid cart
      if (window.Ecwid) {
        window.Ecwid.Cart.addProduct({
          id: product.id,
          quantity: 1
        });
      }
    },
    viewAllProducts() {
      if (window.Ecwid) {
        window.Ecwid.openPage('category');
      }
    }
  }
}
</script>

<style scoped>
.product-grid-section {
  padding: 5rem 0;
  background: white;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #6B7280;
  max-width: 32rem;
  margin: 0 auto;
  line-height: 1.6;
}

.products-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

.grid-cols-4 {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.product-card {
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #E5E7EB;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  group: hover;
}

.product-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

.product-image-container {
  position: relative;
  aspect-ratio: 1;
  background: #F3F4F6;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-badges {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.badge {
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.badge-sale {
  background: #FEE2E2;
  color: #DC2626;
}

.badge-sustainable {
  background: #D1FAE5;
  color: #065F46;
}

.badge-icon {
  width: 0.75rem;
  height: 0.75rem;
}

.quick-add-btn {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  background: #10B981;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.product-card:hover .quick-add-btn {
  opacity: 1;
  transform: translateY(0);
}

.product-info {
  padding: 1rem;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.product-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
  transition: color 0.2s ease;
}

.product-card:hover .product-name {
  color: #10B981;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: #6B7280;
}

.star-icon {
  width: 1rem;
  height: 1rem;
  color: #F59E0B;
}

.review-count {
  color: #9CA3AF;
}

.product-description {
  font-size: 0.875rem;
  color: #6B7280;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-colors {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.colors-label {
  font-size: 0.75rem;
  color: #9CA3AF;
}

.color-swatches {
  display: flex;
  gap: 0.25rem;
}

.color-swatch {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid #E5E7EB;
}

.color-more {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid #E5E7EB;
  background: #F3F4F6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
  color: #6B7280;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-pricing {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.original-price {
  font-size: 0.875rem;
  color: #9CA3AF;
  text-decoration: line-through;
}

.current-price {
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
}

.carbon-footprint {
  font-size: 0.75rem;
  font-weight: 500;
  color: #10B981;
}

.section-footer {
  text-align: center;
}

.btn-outline {
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: #374151;
  border: 2px solid #D1D5DB;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-outline:hover {
  border-color: #9CA3AF;
  background: #F9FAFB;
}

.arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.2s ease;
}

.btn-outline:hover .arrow-icon {
  transform: translateX(2px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .product-grid-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
}
</style>