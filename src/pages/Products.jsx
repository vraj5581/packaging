import React from "react";
import { useShop } from "../context/ShopContext";
import { ShoppingCart } from "lucide-react";

const Products = () => {
  const { products } = useShop();

  return (
    <div className="section container" style={{ paddingTop: "120px" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1>Our Packaging Collection</h1>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            color: "var(--color-text-muted)",
          }}
        >
          Browse our curated selection of high-quality, sustainable packaging
          solutions designed to elevate your brand.
        </p>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="card product-card fade-in"
            style={{
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              background: "white",
              boxShadow: "var(--shadow-sm)",
              transition: "var(--transition)",
            }}
          >
            {/* Image Area */}
            <div
              style={{
                height: "250px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
              <span
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "white",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "var(--radius-full)",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* Content Area */}
            <div style={{ padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                {product.name}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "1.5rem",
                  minHeight: "3rem",
                }}
              >
                {product.description}
              </p>

              <button
                className="btn btn-secondary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Add to Cart <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "4rem",
            color: "var(--color-text-muted)",
          }}
        >
          <h3>No products found.</h3>
          <p>Please check back later or contact admin.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
