function Dashboard({ darkMode }) {
  const role = localStorage.getItem("role");

  if (role !== "manager") {
    return (
      <h3 style={{ textAlign: "center", color: "red" }}>Access Denied ❌</h3>
    );
  }

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
      <h2 style={{ textAlign: "center" }}>Manager Dashboard</h2>
      <p>Welcome! Only managers can see this page.</p>
      <ul>
        <li>Total Products: 2</li>
        <li>Inventory Overview</li>
        <li>Analytics (mocked)</li>
      </ul>
    </div>
  );
}

export default Dashboard;
