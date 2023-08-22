import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>ProductDetail</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetail;
