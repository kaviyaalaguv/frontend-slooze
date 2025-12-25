import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  const role = localStorage.getItem("role");

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#f8f8f8",
        color: darkMode ? "#fff" : "#111",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navigation */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <button
            onClick={() => navigate("/")}
            style={{
              marginRight: "10px",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Home
          </button>
          {role === "manager" && (
            <button
              onClick={() => navigate("/dashboard")}
              style={{
                marginRight: "10px",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Dashboard
            </button>
          )}
          <button
            onClick={() => navigate("/products")}
            style={{
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Products
          </button>
        </div>

        <button
          onClick={toggleTheme}
          style={{
            padding: "8px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Login darkMode={darkMode} />} />
        <Route path="/dashboard" element={<Dashboard darkMode={darkMode} />} />
        <Route path="/products" element={<Products darkMode={darkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
