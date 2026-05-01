import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "$699" },
    { id: 2, name: "Laptop", price: "$$1280" },
    { id: 3, name: "Headphones", price: "$199" },
  ];
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(({ id, name, price }) => (
          <li key={id}>
            The {name} is valued at {price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
