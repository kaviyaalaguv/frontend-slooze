import { useNavigate } from "react-router-dom";

function Login({ darkMode }) {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    localStorage.setItem("role", role);
    if (role === "manager") navigate("/dashboard");
    else navigate("/products");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <h2>Login Page</h2>
      <p>Select role to login</p>
      <button
        onClick={() => handleLogin("manager")}
        style={{
          padding: "8px 16px",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "10px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
        }}
      >
        Login as Manager
      </button>
      <button
        onClick={() => handleLogin("storekeeper")}
        style={{
          padding: "8px 16px",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "10px",
          backgroundColor: "#2196f3",
          color: "#fff",
          border: "none",
        }}
      >
        Login as Store Keeper
      </button>
    </div>
  );
}

export default Login;
