import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  if (isAdmin) return null;

  return (
    <>
      <nav
        className="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <div
          className="container"
          style={{
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
            <ShoppingBag color="var(--color-accent)" size={28} />
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "800",
                letterSpacing: "-0.02em",
              }}
            >
              Imperial Craft
              
              <span style={{ color: "var(--color-accent)" }}>Box</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div
            className="desktop-links"
            style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <div style={{ marginLeft: "1rem" }}>
              <Link
                to="/products"
                className="btn btn-primary"
                style={{ padding: "0.6rem 1.2rem" }}
              >
                Order Now
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: "80px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "white",
            zIndex: 999,
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
            animation: "fadeIn 0.3s ease",
          }}
        >
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setIsOpen(false)}>
            Products
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
          <Link
            to="/products"
            className="btn btn-primary"
            onClick={() => setIsOpen(false)}
          >
            Order Now
          </Link>
        </div>
      )}
    </>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    style={{
      fontSize: "1rem",
      fontWeight: "500",
      color: "var(--color-text-main)",
      opacity: 0.8,
      transition: "opacity 0.2s",
    }}
    onMouseEnter={(e) => (e.target.style.opacity = "1")}
    onMouseLeave={(e) => (e.target.style.opacity = "0.8")}
  >
    {children}
  </Link>
);

export default Navbar;
