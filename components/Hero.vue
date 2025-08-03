<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-text">
          <div class="sustainability-badge">
            <svg class="leaf-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.82C6.16 17.4 9 12.3 17 10.5V8zM16.5 17.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"/>
            </svg>
            <span>Sustainably Made</span>
          </div>
          
          <h1 class="hero-title">
            {{ settings.title }}
            <span class="highlight">Comfortable</span>
            Shoes
          </h1>
          
          <p class="hero-subtitle">{{ settings.subtitle }}</p>

          <div class="features-grid">
            <div class="feature-item">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.82C6.16 17.4 9 12.3 17 10.5V8z"/>
                </svg>
              </div>
              <div class="feature-text">
                <h3>Natural Materials</h3>
                <p>Made from renewable resources</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div class="feature-text">
                <h3>Carbon Neutral</h3>
                <p>Offset our carbon footprint</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </div>
              <div class="feature-text">
                <h3>B Corp Certified</h3>
                <p>Meets highest standards</p>
              </div>
            </div>
          </div>

          <div class="cta-buttons">
            <button class="btn-primary" @click="navigateToProducts">
              {{ settings.ctaText }}
              <svg class="arrow-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </button>
            <button class="btn-secondary">Learn Our Story</button>
          </div>

          <div class="stats" v-if="settings.showStats">
            <div class="stat-item">
              <div class="stat-number">5M+</div>
              <div class="stat-label">Happy Customers</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50M+</div>
              <div class="stat-label">Lbs CO₂ Avoided</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">4.5★</div>
              <div class="stat-label">Average Rating</div>
            </div>
          </div>
        </div>

        <div class="hero-image">
          <div class="image-container">
            <img 
              src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800" 
              alt="Allbirds Tree Runners"
              class="hero-img"
            />
          </div>
          <div class="floating-element floating-1"></div>
          <div class="floating-element floating-2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    settings: {
      type: Object,
      default: () => ({
        title: "The World's Most",
        subtitle: "Made from innovative materials like eucalyptus tree fiber and merino wool. Designed for all-day comfort and a better tomorrow.",
        ctaText: "Shop Now",
        ctaLink: "/products",
        showStats: true
      })
    }
  },
  methods: {
    navigateToProducts() {
      if (window.Ecwid) {
        window.Ecwid.openPage('category');
      } else {
        window.location.href = this.settings.ctaLink;
      }
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #fef3e2 100%);
  padding: 5rem 0;
  overflow: hidden;
  position: relative;
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  min-height: 600px;
}

.sustainability-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #10B981;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.leaf-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  color: #111827;
  margin-bottom: 1.5rem;
}

.highlight {
  color: #10B981;
  display: block;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #6B7280;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  background: #f0fdf4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon svg {
  width: 1.5rem;
  height: 1.5rem;
  color: #10B981;
}

.feature-text h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.25rem 0;
}

.feature-text p {
  font-size: 0.875rem;
  color: #6B7280;
  margin: 0;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: #10B981;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background: #059669;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  transform: translateY(-1px);
}

.btn-secondary {
  background: transparent;
  color: #374151;
  border: 2px solid #D1D5DB;
}

.btn-secondary:hover {
  border-color: #9CA3AF;
  background: #F9FAFB;
}

.arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.2s ease;
}

.btn-primary:hover .arrow-icon {
  transform: translateX(2px);
}

.stats {
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #E5E7EB;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
}

.stat-label {
  font-size: 0.875rem;
  color: #6B7280;
}

.hero-image {
  position: relative;
  z-index: 10;
}

.image-container {
  position: relative;
  z-index: 10;
}

.hero-img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
}

.floating-1 {
  top: -1rem;
  right: -1rem;
  width: 6rem;
  height: 6rem;
  background: #D1FAE5;
}

.floating-2 {
  bottom: -2rem;
  left: -2rem;
  width: 8rem;
  height: 8rem;
  background: #FEF3C7;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 0;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .stats {
    justify-content: center;
    gap: 1rem;
  }
}
</style>