import { useState } from "react";

function Products({ darkMode }) {
  const [products, setProducts] = useState([
    { id: 1, name: "Rice", quantity: 100 },
    { id: 2, name: "Wheat", quantity: 80 },
  ]);

  const [newProductName, setNewProductName] = useState("");
  const [newProductQuantity, setNewProductQuantity] = useState("");

  const handleAdd = () => {
    const quantity = parseInt(newProductQuantity);

    if (!newProductName) {
      alert("Please enter product name");
      return;
    }

    if (isNaN(quantity) || quantity <= 0) {
      alert("Please enter a valid positive quantity");
      return;
    }

    const nextId = products.length + 1;
    setProducts([...products, { id: nextId, name: newProductName, quantity }]);

    setNewProductName("");
    setNewProductQuantity("");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Products Page</h2>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - Quantity: {p.quantity}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", marginTop: "10px" }}>
        <input
          placeholder="New product name"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          style={{
            padding: "8px",
            width: "50%",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: darkMode ? "#555" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        />

        <input
          placeholder="Quantity"
          type="number"
          value={newProductQuantity}
          onChange={(e) => setNewProductQuantity(e.target.value)}
          style={{
            padding: "8px",
            width: "25%",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: darkMode ? "#555" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        />

        <button
          onClick={handleAdd}
          style={{
            padding: "8px 12px",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
          }}
        >
          Add Product
        </button>
      </div>
    </div>
  );
}

export default Products;
