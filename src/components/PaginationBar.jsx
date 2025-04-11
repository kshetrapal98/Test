import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationBar = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages === 1) return null;

  return (
    <Pagination className="justify-content-center mt-4">
      <Pagination.Prev disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} />
      {[...Array(totalPages)].map((_, idx) => (
        <Pagination.Item
          key={idx + 1}
          active={idx + 1 === currentPage}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} />
    </Pagination>
  );
};

export default PaginationBar;