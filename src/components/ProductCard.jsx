 import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import "../style/productCard.css"

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <Card className="product-card h-100 shadow-sm">
      <div className="img-container">
        <Card.Img variant="top" src={product.image} className="product-img" />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-truncate" title={product.title}>
          {product.title}
        </Card.Title>
        <Card.Text className="text-muted mb-1">Category: {product.category}</Card.Text>
        <Card.Text className="fw-bold">${product.price.toFixed(2)}</Card.Text>
        <Button
          variant="primary"
          className="mt-auto add-to-cart-btn"
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
