import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import { CartProvider } from './context/CartContext';


const App = () => {
  return (
    <CartProvider>
      <Header />
      <Container className="my-4">
        <ProductPage />
      </Container>
    </CartProvider>
  );
};

export default App;