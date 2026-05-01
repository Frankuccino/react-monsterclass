const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: "$1200",
    availability: "In stock",
  };

  return (
    <div>
      <h1>Product Details</h1>
      <ul>
        <li>Name: {product.name}</li>
        <li>Price: {product.price}</li>
        <li>Availability: {product.availability}</li>
      </ul>
    </div>
  );
};

export default ProductInfo;
