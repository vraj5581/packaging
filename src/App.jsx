import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products"; // Updated import
import AdminDashboard from "./pages/AdminDashboard";
import AdminPanel from "./pages/AdminPanel"; // New Import
import { ShopProvider } from "./context/ShopContext"; // New Import

const About = () => (
  <div className="section container" style={{ paddingTop: "120px" }}>
    <h1>About Us</h1>
    <p>We are dedicated to providing the best packaging solutions...</p>
  </div>
);

const Contact = () => (
  <div className="section container" style={{ paddingTop: "120px" }}>
    <h1>Contact Us</h1>
    <p>Email: sales@imperialcraftbox.com</p>
  </div>
);

const AdminLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation "mocking" authentication
    if (email === "admin@imperial.com" && password === "admin123") {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Credentials! Try admin@imperial.com / admin123");
    }
  };

  return (
    <div
      className="section container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
      }}
    >
      <div
        className="card glass"
        style={{ padding: "3rem", width: "100%", maxWidth: "400px" }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Admin Login
        </h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1.5rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Login Securely
          </button>
        </form>
        <div
          style={{
            marginTop: "1rem",
            fontSize: "0.8rem",
            color: "#666",
            textAlign: "center",
          }}
        >
          Hint: admin@imperial.com / admin123
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <ShopProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminLayout />} />
          </Routes>
        </main>
      </Router>
    </ShopProvider>
  );
}

// Wrapper to show both Dashboard and Products Panel
const AdminLayout = () => (
  <div style={{ paddingTop: "100px" }}>
    <AdminDashboard />
    <AdminPanel />
  </div>
);

export default App;
