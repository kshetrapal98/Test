

 

import React from 'react';
import { Modal, Button, ListGroup, Image, InputGroup, Row, Col } from 'react-bootstrap';
import { FaShoppingCart, FaTrashAlt, FaTrashRestoreAlt } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import "../style/cartModal.css"

const CartModal = ({ show, handleClose }) => {
    const { cart, dispatch, getTotal } = useCart();

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title><FaShoppingCart className="me-2" /> Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cart-modal-body">
                {cart.length === 0 ? (
                    <div className="text-center py-5">
                        <p className="text-muted">Your cart is empty.</p>
                    </div>
                ) : (
                    <ListGroup variant="flush">
                        {cart.map((item) => (
                            <ListGroup.Item key={item.id} className="d-flex align-items-center gap-3">
                                <Row>
                                    <Col xs={12} lg={2}><Image
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded"
                                        style={{ height: '60px', width: '60px', objectFit: 'contain', background: '#f8f9fa' }}
                                    /></Col>
                                    <Col xs={12} ld={5}><div className="flex-grow-1">
                                        <div className="fw-semibold">{item.title}</div>
                                        <div className="text-muted small">${item.price.toFixed(2)}</div>
                                    </div></Col>
                                    <Col  xs={4} lg={4}> <InputGroup size="sm" className="quantity-controls">
                                        <Button
                                            variant="outline-secondary"
                                            onClick={() => dispatch({ type: 'DECREMENT_QTY', payload: item.id })}
                                        >-</Button>
                                        <div className="qty-display px-2">{item.qty}</div>
                                        <Button
                                            variant="outline-secondary"
                                            onClick={() => dispatch({ type: 'INCREMENT_QTY', payload: item.id })}
                                        >+</Button>
                                    </InputGroup></Col>
                                    <Col  xs={4} lg={1}> <Button
                                        variant="danger"
                                        size="sm"
                                        className="trash-btn"
                                        onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                                    >
                                        <FaTrashAlt />
                                    </Button></Col>
                                </Row>




                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Modal.Body>
            {cart.length > 0 && (
                <Modal.Footer className="justify-content-between bg-light rounded-bottom">
                    <h5 className="mb-0">Total: <span className="text-success">${getTotal()}</span></h5>
                    <Button variant="success" onClick={handleClose}>Proceed to Checkout</Button>
                </Modal.Footer>
            )}
        </Modal>
    );
};

export default CartModal;

