import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Product 1",
    description: "This is product 1",
  },
  {
    id: "p2",
    title: "Product 2",
    description: "This is product 2",
  },
  {
    id: "p3",
    title: "Product 3",
    description: "This is product 3",
  },
];

const Products = () => {
  return (
    <Fragment>
      <div>This is products page.</div>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Products;
