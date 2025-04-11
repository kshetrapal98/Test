 
import React, { useState } from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';
 

const Header = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">E-Commerce</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link onClick={() => setShowModal(true)}>
              <FaShoppingCart size={20} />
              <Badge bg="light" text="dark" className="ms-1">{itemCount}</Badge>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <CartModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default Header;
