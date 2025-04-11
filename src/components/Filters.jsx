import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const Filters = ({ products, categories, onUpdate }) => {
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('');

  useEffect(() => {
    let filtered = [...products];
    if (category !== 'all') filtered = filtered.filter(p => p.category === category);

    if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    if (sort === 'title-asc') filtered.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === 'title-desc') filtered.sort((a, b) => b.title.localeCompare(a.title));

    onUpdate(filtered);
  }, [category, sort]);

  return (
    

    <Row className="mbsetProducts-3">
      <Col>
        <div className="d-flex justify-content-end gap-3">
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: '200px' }}
          >
            <option value="all">All Categories</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </Form.Select>

          <Form.Select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{ width: '200px' }}
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="title-asc">Title: A–Z</option>
            <option value="title-desc">Title: Z–A</option>
          </Form.Select>
        </div>
      </Col>
    </Row>
  );
};

export default Filters;