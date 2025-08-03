# Allbirds Ecwid Custom Template

A modern, sustainable e-commerce template for Ecwid inspired by Allbirds' clean design and environmental focus. Built with Vue.js and optimized for the Ecwid platform.

## 🌱 Overview

This template transforms your Ecwid store into a beautiful, sustainable shopping experience that emphasizes environmental responsibility while maintaining excellent usability and modern design principles.

## ✨ Features

### 🛍️ E-commerce Integration
- **Full Ecwid Integration**: Seamless integration with Ecwid's cart, checkout, and product management
- **Responsive Product Grid**: Adaptive product layouts that work on all devices
- **Advanced Search**: Integrated with Ecwid's search functionality
- **Cart Management**: Real-time cart updates and notifications
- **Product Modals**: Enhanced product detail views

### 🎨 Design & User Experience
- **Sustainable Branding**: Earth-toned color palette emphasizing environmental values
- **Modern UI Components**: Clean, minimalist design with thoughtful micro-interactions
- **Mobile-First Design**: Optimized for mobile, tablet, and desktop experiences
- **Smooth Animations**: Subtle transitions and hover effects
- **Accessibility**: WCAG compliant with proper semantic markup

### 🌍 Sustainability Focus
- **Environmental Messaging**: Prominent sustainability features and certifications
- **Carbon Footprint Display**: Show environmental impact for each product
- **Material Information**: Highlight renewable and recycled materials
- **Impact Metrics**: Display environmental achievements and goals

## 🚀 Technology Stack

- **Frontend Framework**: Vue.js 3 with Composition API
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Scoped CSS with modern design system
- **E-commerce Platform**: Ecwid integration for full store functionality
- **Icons**: Inline SVG icons for optimal performance

## 📁 Project Structure

```
├── components/
│   ├── Hero.vue                 # Hero section with CTA
│   ├── ProductGrid.vue          # Featured products display
│   ├── SustainabilitySection.vue # Environmental impact section
│   ├── Header.vue               # Site navigation and search
│   └── Footer.vue               # Footer with links and branding
├── template.json                # Ecwid template configuration
├── main.js                      # Vue app initialization
├── App.vue                      # Main application component
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── index.html                   # HTML entry point
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn package manager
- Active Ecwid store

### Local Development

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Configure Ecwid Store**
   - Update the store ID in `index.html` (replace `1003` with your store ID)
   - Configure your Ecwid store settings in the admin panel

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

### Ecwid Integration Setup

1. **Store Configuration**
   - Log into your Ecwid admin panel
   - Navigate to Settings → Design → Custom CSS & HTML
   - Upload the built template files

2. **Template Installation**
   - Copy the contents of `dist/` to your Ecwid custom template directory
   - Update the template.json configuration as needed
   - Apply the template in your Ecwid design settings

## ⚙️ Configuration

### Template Settings

The template can be customized through `template.json`:

```json
{
  "settings": {
    "colors": {
      "primary": "#10B981",      // Main brand color (emerald)
      "secondary": "#92400E",    // Secondary color (brown)
      "accent": "#F97316"        // Accent color (orange)
    },
    "features": {
      "sustainabilityBadges": true,
      "carbonFootprintDisplay": true,
      "materialInfo": true
    }
  }
}
```

### Component Customization

Each Vue component accepts props for customization:

- **Hero Component**: Title, subtitle, CTA text, background image
- **ProductGrid**: Number of products, grid columns, sustainability info display
- **SustainabilitySection**: Features list, impact metrics, content

## 🎨 Design System

### Color Palette
- **Primary Green**: #10B981 (Emerald-500) - Main brand color
- **Secondary Brown**: #92400E (Yellow-800) - Earth tone accent
- **Accent Orange**: #F97316 (Orange-500) - Call-to-action highlights
- **Success**: #059669 (Emerald-600) - Positive actions
- **Warning**: #D97706 (Amber-600) - Attention items
- **Error**: #DC2626 (Red-600) - Error states
- **Neutrals**: Gray scale from 50 to 900

### Typography
- **Font Stack**: System fonts for optimal performance and readability
- **Headings**: 600 weight, 120% line height
- **Body Text**: 400 weight, 150% line height
- **Scale**: Consistent sizing from 0.75rem to 3.5rem

### Spacing System
- **Base Unit**: 8px grid system
- **Component Spacing**: 1rem, 1.5rem, 2rem, 3rem
- **Section Padding**: 3rem to 5rem for different screen sizes

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px - Single column, touch-optimized
- **Tablet**: 768px - 1024px - Two-column layouts
- **Desktop**: > 1024px - Full multi-column layouts

### Mobile Optimizations
- Touch-friendly button sizes (minimum 44px)
- Simplified navigation with hamburger menu
- Optimized image loading and sizing
- Reduced motion for accessibility

## 🔧 Ecwid Integration Features

### Store Functionality
- **Product Catalog**: Automatic product loading from Ecwid
- **Shopping Cart**: Real-time cart updates and management
- **Checkout Process**: Seamless Ecwid checkout integration
- **Search**: Integrated product search functionality
- **Categories**: Dynamic category navigation

### Customization Options
- **Product Display**: Grid and list view options
- **Filtering**: Category, price, and attribute filters
- **Sorting**: Price, popularity, and rating sorting
- **Pagination**: Configurable products per page

## 🌍 Sustainability Features

### Environmental Messaging
- **Carbon Footprint**: Display CO₂ impact for products
- **Material Information**: Highlight sustainable materials
- **Certifications**: Show B Corp and other certifications
- **Impact Metrics**: Environmental achievements display

### Brand Storytelling
- **Mission Statement**: Clear sustainability messaging
- **Impact Statistics**: Quantified environmental benefits
- **Material Innovation**: Information about eco-friendly materials
- **Circular Economy**: Recycling and return programs

## 🚀 Performance Optimizations

### Loading Performance
- **Lazy Loading**: Images load as needed
- **Code Splitting**: Optimized JavaScript bundles
- **Asset Optimization**: Compressed images and minified code
- **CDN Integration**: Fast content delivery

### SEO Optimization
- **Meta Tags**: Comprehensive meta tag implementation
- **Structured Data**: Product and organization schema markup
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Image Alt Text**: Descriptive alternative text for all images

## 🧪 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement**: Graceful degradation for older browsers

## 📊 Analytics Integration

### Tracking Setup
- **Google Analytics**: E-commerce tracking integration
- **Ecwid Analytics**: Built-in store analytics
- **Custom Events**: Track sustainability feature interactions
- **Performance Monitoring**: Core Web Vitals tracking

## 🔐 Security & Privacy

### Data Protection
- **GDPR Compliance**: Privacy-focused design
- **Secure Checkout**: Ecwid's secure payment processing
- **SSL/TLS**: Encrypted data transmission
- **Privacy Controls**: User consent management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow Vue.js best practices and style guide
- Maintain consistent code formatting
- Write descriptive commit messages
- Test across different devices and browsers
- Ensure accessibility compliance

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- **Documentation**: [Ecwid Developer Docs](https://docs.ecwid.com/site-templates)
- **Issues**: GitHub Issues tab
- **Community**: Ecwid Developer Community

## 🙏 Acknowledgments

- **Allbirds**: Design inspiration for sustainable e-commerce
- **Ecwid**: E-commerce platform and integration capabilities
- **Vue.js**: Reactive framework for modern web development
- **Pexels**: High-quality stock photography

---

Built with ❤️ for sustainable e-commerce and modern web development.# D_sign_assignment
