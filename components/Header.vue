<template>
  <header class="site-header">
    <div class="header-container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <svg class="logo-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.82C6.16 17.4 9 12.3 17 10.5V8z"/>
          </svg>
          <span class="logo-text">allbirds</span>
        </div>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav">
          <a 
            v-for="item in navigation" 
            :key="item.name"
            :href="item.href"
            class="nav-link"
          >
            {{ item.name }}
          </a>
        </nav>

        <!-- Search Bar -->
        <div class="search-container">
          <div class="search-input-wrapper">
            <svg class="search-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input
              type="text"
              placeholder="Search shoes..."
              v-model="searchQuery"
              class="search-input"
              @input="handleSearch"
            />
          </div>
        </div>

        <!-- Right Side Actions -->
        <div class="header-actions">
          <!-- User Account -->
          <button class="action-btn" @click="toggleUserMenu">
            <svg class="action-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span class="action-text">Account</span>
          </button>

          <!-- Shopping Cart -->
          <button class="action-btn cart-btn" @click="toggleCart">
            <svg class="action-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h5c.55 0 1 .45 1 1s-.45 1-1 1h-1v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6H2c-.55 0-1-.45-1-1s.45-1 1-1h5z"/>
            </svg>
            <span class="cart-count" v-if="cartItemCount > 0">{{ cartItemCount }}</span>
          </button>

          <!-- Mobile Menu Toggle -->
          <button class="mobile-menu-btn" @click="toggleMobileMenu">
            <svg v-if="!isMobileMenuOpen" class="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
            <svg v-else class="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="mobile-nav">
        <div class="mobile-nav-content">
          <a 
            v-for="item in navigation" 
            :key="item.name"
            :href="item.href"
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      searchQuery: '',
      isMobileMenuOpen: false,
      cartItemCount: 0,
      navigation: [
        { name: 'Men', href: '#men' },
        { name: 'Women', href: '#women' },
        { name: 'Runners', href: '#runners' },
        { name: 'Loungers', href: '#loungers' },
        { name: 'Sustainability', href: '#sustainability' }
      ]
    }
  },
  mounted() {
    // Listen for Ecwid cart updates
    if (window.Ecwid) {
      window.Ecwid.OnCartChanged.add(() => {
        this.updateCartCount();
      });
      this.updateCartCount();
    }
  },
  methods: {
    handleSearch() {
      // Implement Ecwid search
      if (window.Ecwid && this.searchQuery) {
        window.Ecwid.openPage('search', { keyword: this.searchQuery });
      }
    },
    toggleUserMenu() {
      // Handle user menu toggle
      console.log('Toggle user menu');
    },
    toggleCart() {
      // Open Ecwid cart
      if (window.Ecwid) {
        window.Ecwid.openPage('cart');
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    updateCartCount() {
      if (window.Ecwid && window.Ecwid.Cart) {
        this.cartItemCount = window.Ecwid.Cart.calculateTotal().quantity || 0;
      }
    }
  }
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: white;
  border-bottom: 1px solid #E5E7EB;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  width: 2rem;
  height: 2rem;
  color: #10B981;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: #6B7280;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #111827;
}

.search-container {
  flex: 1;
  max-width: 28rem;
  margin: 0 2rem;
}

.search-input-wrapper {
  position: relative;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  color: #9CA3AF;
}

.search-input {
  width: 100%;
  padding: 0.5rem 0.75rem 0.5rem 2.5rem;
  border: 1px solid #D1D5DB;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #10B981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: #6B7280;
  cursor: pointer;
  transition: color 0.2s ease;
}

.action-btn:hover {
  color: #111827;
}

.action-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.action-text {
  font-size: 0.875rem;
  font-weight: 500;
}

.cart-btn {
  position: relative;
}

.cart-count {
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  background: #10B981;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s infinite;
}

.mobile-menu-btn {
  display: none;
  background: transparent;
  border: none;
  color: #6B7280;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.mobile-nav {
  border-top: 1px solid #E5E7EB;
  padding: 1rem 0;
}

.mobile-nav-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-nav-link {
  color: #6B7280;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.2s ease;
}

.mobile-nav-link:hover {
  color: #111827;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .search-container {
    display: none;
  }
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .action-text {
    display: none;
  }
}
</style>