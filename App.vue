<template>
  <div id="app">
    <Header />
    
    <main class="main-content">
      <!-- Hero Section -->
      <Hero :settings="heroSettings" />
      
      <!-- Featured Products -->
      <ProductGrid :settings="productGridSettings" />
      
      <!-- Sustainability Section -->
      <SustainabilitySection :settings="sustainabilitySettings" />
      
      <!-- Ecwid Store Integration -->
      <div id="ecwid-store">
        <div id="my-store-1003"></div>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      heroSettings: {
        title: "The World's Most",
        subtitle: "Made from innovative materials like eucalyptus tree fiber and merino wool. Designed for all-day comfort and a better tomorrow.",
        ctaText: "Shop Now",
        ctaLink: "/products",
        showStats: true
      },
      productGridSettings: {
        title: "Featured Favorites",
        subtitle: "Our most loved shoes, chosen by customers worldwide for their unmatched comfort and sustainable design.",
        productsToShow: 4,
        showSustainabilityInfo: true,
        gridColumns: 4
      },
      sustainabilitySettings: {
        title: "Better for Your Feet, Better for the Planet",
        content: "We're on a mission to prove that comfort, style, and sustainability aren't mutually exclusive. Every step you take in our shoes is a step toward a better future.",
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
      }
    }
  },
  mounted() {
    this.initializeEcwid()
  },
  methods: {
    initializeEcwid() {
      // Initialize Ecwid store
      if (window.Ecwid) {
        window.Ecwid.init()
      } else {
        // Load Ecwid script if not already loaded
        const script = document.createElement('script')
        script.src = 'https://app.ecwid.com/script.js?1003&data_platform=code&data_date=2024-01-01'
        script.async = true
        document.head.appendChild(script)
        
        script.onload = () => {
          window.xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-1003")
        }
      }
    }
  }
}
</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
  color: #111827;
  background: #FFFFFF;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

/* Ecwid Store Styling */
#ecwid-store {
  padding: 3rem 0;
  background: #F9FAFB;
}

#my-store-1003 {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Override Ecwid default styles to match our design */
.ecwid .ecwid-productBrowser {
  font-family: inherit !important;
}

.ecwid .ecwid-productBrowser-head {
  background: transparent !important;
  border: none !important;
}

.ecwid .ecwid-productBrowser-product {
  border-radius: 0.75rem !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.3s ease !important;
}

.ecwid .ecwid-productBrowser-product:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
  transform: translateY(-4px) !important;
}

.ecwid .ecwid-productBrowser-price {
  color: #10B981 !important;
  font-weight: 600 !important;
}

.ecwid .ecwid-productBrowser-buyNowButton {
  background: #10B981 !important;
  border-radius: 0.5rem !important;
  font-weight: 600 !important;
  transition: all 0.2s ease !important;
}

.ecwid .ecwid-productBrowser-buyNowButton:hover {
  background: #059669 !important;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3) !important;
}

/* Utility Classes */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.btn-primary {
  background: #10B981;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #059669;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.btn-secondary {
  background: #F59E0B;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
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
@media (max-width: 768px) {
  .container {
    padding: 0 0.75rem;
  }
}
</style>