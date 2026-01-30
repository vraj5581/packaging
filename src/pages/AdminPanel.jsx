import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { Edit2, Trash, Plus, Save, X } from "lucide-react";

const AdminPanel = () => {
  const { products, updateProduct, addProduct, deleteProduct } = useShop();
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  // Handle Edit Click
  const startEdit = (product) => {
    setEditingId(product.id);
    setEditForm(product);
  };

  // Handle Edit Change
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Edit Save
  const saveEdit = () => {
    updateProduct(editingId, {
      ...editForm,
      price: parseFloat(editForm.price),
    });
    setEditingId(null);
  };

  // Handle Add Product
  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    addProduct({
      ...newProduct,
      price: parseFloat(newProduct.price),
      image: newProduct.image || "https://via.placeholder.com/300",
    });
    setNewProduct({ name: "", price: "", image: "", description: "" });
    setIsAdding(false);
  };

  return (
    <div className="admin-panel section container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <div>
          <span style={{ color: "var(--color-text-muted)", fontWeight: "600" }}>
            Admin Control
          </span>
          <h1>Product Inventory</h1>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => setIsAdding(!isAdding)}
        >
          <Plus size={18} /> Add New Product
        </button>
      </div>

      {/* Add Product Form */}
      {isAdding && (
        <div
          className="card glass fade-in"
          style={{
            padding: "2rem",
            marginBottom: "2rem",
            borderLeft: "4px solid var(--color-accent)",
          }}
        >
          <h3>Add New Item</h3>
          <form
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginTop: "1rem",
            }}
            onSubmit={handleAddSubmit}
          >
            <input
              className="input-field"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <input
              className="input-field"
              type="number"
              step="0.01"
              placeholder="Price ($)"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <input
              className="input-field"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              style={{ gridColumn: "span 2" }}
            />
            <textarea
              className="input-field"
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              style={{ gridColumn: "span 2", minHeight: "80px" }}
            />
            <div style={{ gridColumn: "span 2", display: "flex", gap: "1rem" }}>
              <button type="submit" className="btn btn-secondary">
                Create Product
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => setIsAdding(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Products Table */}
      <div
        className="card"
        style={{ background: "white", overflow: "hidden", padding: 0 }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead style={{ background: "var(--color-secondary)" }}>
            <tr>
              <th style={{ padding: "1rem" }}>Image</th>
              <th style={{ padding: "1rem" }}>Name</th>
              <th style={{ padding: "1rem" }}>Description</th>
              <th style={{ padding: "1rem" }}>Price</th>
              <th style={{ padding: "1rem", textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} style={{ borderBottom: "1px solid #eee" }}>
                {editingId === product.id ? (
                  /* Edit Mode */
                  <>
                    <td style={{ padding: "1rem" }}>
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          background: "#ccc",
                          borderRadius: "4px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={editForm.image}
                          alt="preview"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <input
                        className="input-field"
                        name="name"
                        value={editForm.name}
                        onChange={handleEditChange}
                      />
                      <input
                        className="input-field"
                        name="image"
                        placeholder="Image URL"
                        value={editForm.image}
                        onChange={handleEditChange}
                        style={{ marginTop: "0.5rem", fontSize: "0.8rem" }}
                      />
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <textarea
                        className="input-field"
                        name="description"
                        value={editForm.description}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <input
                        className="input-field"
                        type="number"
                        name="price"
                        value={editForm.price}
                        onChange={handleEditChange}
                        step="0.01"
                        style={{ width: "80px" }}
                      />
                    </td>
                    <td style={{ padding: "1rem", textAlign: "right" }}>
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          justifyContent: "flex-end",
                        }}
                      >
                        <button
                          className="btn-icon"
                          onClick={saveEdit}
                          title="Save"
                          style={{ color: "green" }}
                        >
                          <Save size={20} />
                        </button>
                        <button
                          className="btn-icon"
                          onClick={() => setEditingId(null)}
                          title="Cancel"
                          style={{ color: "gray" }}
                        >
                          <X size={20} />
                        </button>
                      </div>
                    </td>
                  </>
                ) : (
                  /* View Mode */
                  <>
                    <td style={{ padding: "1rem" }}>
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          background: "#f0f0f0",
                          borderRadius: "6px",
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
                          }}
                        />
                      </div>
                    </td>
                    <td style={{ padding: "1rem", fontWeight: "bold" }}>
                      {product.name}
                    </td>
                    <td
                      style={{
                        padding: "1rem",
                        color: "var(--color-text-muted)",
                        maxWidth: "300px",
                      }}
                    >
                      {product.description}
                    </td>
                    <td style={{ padding: "1rem", fontWeight: "600" }}>
                      ${product.price.toFixed(2)}
                    </td>
                    <td style={{ padding: "1rem", textAlign: "right" }}>
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          justifyContent: "flex-end",
                        }}
                      >
                        <button
                          className="btn-icon"
                          onClick={() => startEdit(product)}
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          className="btn-icon"
                          onClick={() => {
                            if (window.confirm("Delete this item?"))
                              deleteProduct(product.id);
                          }}
                          title="Delete"
                          style={{ color: "red" }}
                        >
                          <Trash size={18} />
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .input-field {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-family: inherit;
        }
        .btn-icon {
          padding: 0.5rem;
          border-radius: 4px;
          transition: background 0.2s;
        }
        .btn-icon:hover {
          background: rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
};

export default AdminPanel;
