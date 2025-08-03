<template>
  <section class="sustainability-section">
    <div class="container">
      <div class="section-header">
        <div class="sustainability-badge">
          <svg class="leaf-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.82C6.16 17.4 9 12.3 17 10.5V8z"/>
          </svg>
          <span>Sustainability</span>
        </div>
        
        <h2 class="section-title">{{ settings.title }}</h2>
        <p class="section-subtitle">{{ settings.content }}</p>
      </div>

      <div class="features-grid">
        <div 
          v-for="(feature, index) in settings.features" 
          :key="index"
          class="feature-card"
        >
          <div class="feature-icon">
            <component :is="getIconComponent(feature.icon)" class="icon" />
          </div>
          
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
          
          <div class="feature-metric">{{ feature.metric }}</div>
        </div>
      </div>

      <div class="impact-section">
        <div class="impact-content">
          <div class="impact-text">
            <h3 class="impact-title">Our Environmental Impact</h3>
            
            <div class="impact-stats">
              <div class="impact-stat">
                <span class="stat-label">Trees Planted</span>
                <span class="stat-value">1.2M+</span>
              </div>
              
              <div class="impact-stat">
                <span class="stat-label">Plastic Bottles Recycled</span>
                <span class="stat-value">50M+</span>
              </div>
              
              <div class="impact-stat">
                <span class="stat-label">Carbon Offset (tons)</span>
                <span class="stat-value">25,000+</span>
              </div>
              
              <div class="impact-stat">
                <span class="stat-label">Renewable Energy Used</span>
                <span class="stat-value">100%</span>
              </div>
            </div>
          </div>

          <div class="impact-image">
            <img 
              src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Sustainable materials"
              class="impact-img"
            />
          </div>
        </div>

        <div class="impact-cta">
          <button class="btn-secondary">Learn More About Our Impact</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SustainabilitySection',
  props: {
    settings: {
      type: Object,
      default: () => ({
        title: "Better for Your Feet, Better for the Planet",
        content: "We're on a mission to prove that comfort, style, and sustainability aren't mutually exclusive.",
        features: [
          {
            icon: "leaf",
            title: "Natural Materials",
            description: "Made from renewable resources like eucalyptus trees, merino wool, and sugarcane.",
            metric: "90% Natural"
          },
          {
            icon: "recycle",
            title: "Circular Design", 
            description: "Every shoe is designed to be returned and recycled at the end of its life.",
            metric: "100% Recyclable"
          },
          {
            icon: "globe",
            title: "Carbon Neutral",
            description: "We measure and offset our entire carbon footprint to be carbon neutral.",
            metric: "0 Net Carbon"
          },
          {
            icon: "award",
            title: "B Corp Certified",
            description: "Meeting the highest standards of social and environmental performance.",
            metric: "Certified Since 2016"
          }
        ]
      })
    }
  },
  methods: {
    getIconComponent(iconName) {
      const icons = {
        leaf: () => ({
          template: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.82C6.16 17.4 9 12.3 17 10.5V8z"/></svg>`
        }),
        recycle: () => ({
          template: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>`
        }),
        globe: () => ({
          template: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>`
        }),
        award: () => ({
          template: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
        })
      };
      return icons[iconName] || icons.leaf;
    }
  }
}
</script>

<style scoped>
.sustainability-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
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
  width: 1.5rem;
  height: 1.5rem;
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
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

.feature-icon {
  width: 4rem;
  height: 4rem;
  background: #F0FDF4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: background-color 0.3s ease;
}

.feature-card:hover .feature-icon {
  background: #D1FAE5;
}

.icon {
  width: 2rem;
  height: 2rem;
  color: #10B981;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
}

.feature-description {
  color: #6B7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.feature-metric {
  font-size: 1.5rem;
  font-weight: 700;
  color: #10B981;
}

.impact-section {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 3rem;
}

.impact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 3rem;
}

.impact-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
}

.impact-stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.impact-stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #E5E7EB;
}

.impact-stat:last-child {
  border-bottom: none;
}

.stat-label {
  color: #6B7280;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #10B981;
}

.impact-image {
  position: relative;
}

.impact-img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 0.75rem;
}

.impact-cta {
  text-align: center;
}

.btn-secondary {
  padding: 0.75rem 1.5rem;
  background: #F59E0B;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #D97706;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .impact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .sustainability-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .impact-section {
    padding: 2rem;
  }
  
  .impact-title {
    font-size: 1.5rem;
  }
}
</style>