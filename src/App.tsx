import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  // In a real app, you'd use React Router for navigation
  // For this demo, we'll show the HomePage by default
  const [currentPage, setCurrentPage] = React.useState<'home' | 'products'>('home');

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            {currentPage === 'home' ? <HomePage /> : <ProductsPage />}
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;