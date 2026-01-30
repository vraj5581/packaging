import React from "react";
import { ArrowRight, Box, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1606293926075-69a00fb47a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80) no-repeat center center/cover",
          color: "white",
          padding: "10rem 0",
          textAlign: "center",
          paddingTop: "150px" /* accounts for fixed header if needed */,
        }}
      >
        <div className="container">
          <h1
            className="fade-in"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              marginBottom: "1.5rem",
              lineHeight: "1.1",
            }}
          >
            Premium Packaging
            <br />
            For Your Craft
          </h1>
          <p
            className="fade-in"
            style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.9)",
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
              animationDelay: "0.2s",
            }}
          >
            Elevate your brand with our custom-designed, eco-friendly craft
            boxes. Durable, stylish, and perfect for your products.
          </p>
          <div
            className="fade-in"
            style={{
              animationDelay: "0.4s",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Link to="/products" className="btn btn-primary">
              Shop Collection <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="btn"
              style={{ background: "white", color: "var(--color-dark)" }}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span
              style={{
                color: "var(--color-accent)",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Why Choose Us
            </span>
            <h2 style={{ marginTop: "0.5rem" }}>
              Packaging That Speaks Volumes
            </h2>
          </div>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            <FeatureCard
              icon={<Box size={40} color="var(--color-accent)" />}
              title="Custom Designs"
              desc="Tailored sizes and prints to match your brand identity perfectly. We bring your vision to life."
            />
            <FeatureCard
              icon={<ShieldCheck size={40} color="var(--color-accent)" />}
              title="Eco-Friendly"
              desc="Made from 100% recycled materials and biodegradable coatings. Sustainable choice for your business."
            />
            <FeatureCard
              icon={<Truck size={40} color="var(--color-accent)" />}
              title="Fast Shipping"
              desc="Reliable delivery partners ensuring your packaging arrives on time, every time."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section"
        style={{ background: "var(--color-secondary)" }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h2>Ready to Upgrade Your Packaging?</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--color-text-muted)" }}>
              Join hundreds of satisfied brands using our boxes.
            </p>
          </div>
          <Link to="/products" className="btn btn-primary">
            Start Your Order
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div
    className="card"
    style={{
      padding: "2.5rem",
      borderRadius: "var(--radius-lg)",
      textAlign: "center",
      backgroundColor: "white",
      boxShadow: "var(--shadow-md)",
      transition: "var(--transition)",
    }}
  >
    <div
      style={{
        marginBottom: "1.5rem",
        display: "inline-flex",
        padding: "1rem",
        background: "var(--color-primary)",
        borderRadius: "50%",
      }}
    >
      {icon}
    </div>
    <h3 style={{ marginBottom: "0.75rem" }}>{title}</h3>
    <p style={{ color: "var(--color-text-muted)" }}>{desc}</p>
  </div>
);

export default Home;
