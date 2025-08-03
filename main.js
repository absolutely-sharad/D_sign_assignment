import { createApp } from 'vue'
import App from './App.vue'

// Import components
import Hero from './components/Hero.vue'
import ProductGrid from './components/ProductGrid.vue'
import SustainabilitySection from './components/SustainabilitySection.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const app = createApp(App)

// Register global components
app.component('Hero', Hero)
app.component('ProductGrid', ProductGrid)
app.component('SustainabilitySection', SustainabilitySection)
app.component('Header', Header)
app.component('Footer', Footer)

// Ecwid integration
window.addEventListener('load', () => {
  // Initialize Ecwid integration
  if (window.Ecwid) {
    // Configure Ecwid settings
    window.Ecwid.init()
    
    // Listen for page changes
    window.Ecwid.OnPageLoaded.add((page) => {
      console.log('Ecwid page loaded:', page.type)
    })
    
    // Listen for cart changes
    window.Ecwid.OnCartChanged.add((cart) => {
      console.log('Cart updated:', cart)
      // Emit event to update cart count in header
      app.config.globalProperties.$emit('cart-updated', cart)
    })
  }
})

app.mount('#app')