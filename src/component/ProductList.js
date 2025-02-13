import React from 'react';

function ProductList({ productList }) {
  return (
    <div>
      {productList.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;