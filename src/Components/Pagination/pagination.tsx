import React from "react";
import "./style.css";

export interface pagination {
  children?: React.ReactNode;
}

const Pagination: React.FC<{
  articlesPerPage: number;
  totalArticles: number;
  paginate: any;
}> = ({ articlesPerPage, totalArticles, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((number: any) => (
          <li key={number}>
            <a onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
