import { useState } from "react";

const ShoppingList = () => {
  const shoppingArray = [
    { name: "iPhone", quantity: 3 },
    { name: "Mac Mini M4", quantity: 2 },
    { name: "Charger", quantity: 1 },
  ];

  const [shoppingList, setShoppingList] = useState(shoppingArray);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  const onChangeName = (e) => {
    setItemName(e.target.value);
  };

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName) return;

    setShoppingList([
      ...shoppingList,
      { name: itemName, quantity: Number(quantity) },
    ]);
    setItemName("");
    setQuantity("");
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {shoppingList.map((item, idx) => (
          <li key={idx}>
            {item.name} - {item.quantity}pcs
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Item Name"
          value={itemName}
          onChange={onChangeName}
        />
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={onChangeQuantity}
        />
        <button type="submit">Add to Shopping list!</button>
      </form>
    </div>
  );
};

export default ShoppingList;
