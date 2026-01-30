import React from "react";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="container section">
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          <h1>Dashboard</h1>
          <button className="btn btn-secondary">Log Out</button>
        </header>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            marginBottom: "3rem",
          }}
        >
          <DashboardCard
            title="Total Revenue"
            value="$12,450"
            change="+15%"
            positive
          />
          <DashboardCard title="New Orders" value="45" change="+5%" positive />
          <DashboardCard
            title="Pending Shipments"
            value="12"
            change="-2%"
            positive={false}
          />
          <DashboardCard title="Active Products" value="28" />
        </div>

        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <h3>Recent Orders</h3>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "1rem",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid var(--color-secondary)",
                  textAlign: "left",
                }}
              >
                <th style={{ padding: "1rem" }}>Order ID</th>
                <th style={{ padding: "1rem" }}>Customer</th>
                <th style={{ padding: "1rem" }}>Status</th>
                <th style={{ padding: "1rem" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                id="#ORD-001"
                customer="John Doe"
                status="Shipped"
                total="$450.00"
              />
              <TableRow
                id="#ORD-002"
                customer="Jane Smith"
                status="Processing"
                total="$120.50"
              />
              <TableRow
                id="#ORD-003"
                customer="Bob Johnson"
                status="Pending"
                total="$89.00"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, change, positive }) => (
  <div
    style={{
      background: "white",
      padding: "1.5rem",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-sm)",
    }}
  >
    <h3
      style={{
        fontSize: "0.875rem",
        color: "var(--color-text-muted)",
        marginBottom: "0.5rem",
        textTransform: "uppercase",
        letterSpacing: "1px",
      }}
    >
      {title}
    </h3>
    <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{value}</p>
      {change && (
        <span
          style={{
            color: positive ? "var(--color-success)" : "var(--color-danger)",
            fontSize: "0.875rem",
            fontWeight: "600",
          }}
        >
          {change}
        </span>
      )}
    </div>
  </div>
);

const TableRow = ({ id, customer, status, total }) => (
  <tr style={{ borderBottom: "1px solid #eee" }}>
    <td style={{ padding: "1rem", fontWeight: "500" }}>{id}</td>
    <td style={{ padding: "1rem" }}>{customer}</td>
    <td style={{ padding: "1rem" }}>
      <span
        style={{
          padding: "0.25rem 0.75rem",
          borderRadius: "var(--radius-full)",
          fontSize: "0.8rem",
          background:
            status === "Shipped"
              ? "rgba(76, 175, 80, 0.1)"
              : status === "Processing"
                ? "rgba(255, 152, 0, 0.1)"
                : "rgba(158, 158, 158, 0.1)",
          color:
            status === "Shipped"
              ? "green"
              : status === "Processing"
                ? "orange"
                : "gray",
        }}
      >
        {status}
      </span>
    </td>
    <td style={{ padding: "1rem", fontWeight: "600" }}>{total}</td>
  </tr>
);

export default AdminDashboard;
