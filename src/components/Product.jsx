const Product = ({ name, price }) => {
  return (
    <div>
      <h2>Product's name is {name}</h2>
      <p>
        {name} priced at {price}
      </p>
    </div>
  );
};

export default Product;
