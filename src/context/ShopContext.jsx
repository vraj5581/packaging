import React, { createContext, useState, useContext, useEffect } from "react";

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  // Initial Mock Data or LocalStorage
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("shopProducts");
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 1,
        name: "Eco-Kraft Box",
        price: 2.5,
        image:
          "https://images.unsplash.com/photo-1605648916379-a6cb37cd6afc?auto=format&fit=crop&w=800&q=80",
        description:
          "Durable, strictly eco-friendly kraft box for small items.",
      },
      {
        id: 2,
        name: "Luxury Rigid Box",
        price: 5.99,
        image:
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
        description: "Premium rigid construction with magnetic closure.",
      },
      {
        id: 3,
        name: "Mailer Box",
        price: 1.75,
        image:
          "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
        description: "Perfect for shipping subscription boxes and kits.",
      },
      {
        id: 4,
        name: "Custom Printed Sleeve",
        price: 0.95,
        image:
          "https://images.unsplash.com/photo-1565511082697-36c1cda45e22?auto=format&fit=crop&w=800&q=80",
        description: "Add branding to any generic box with a sleeve.",
      },
    ];
  });

  // Save to LocalStorage whenever products change
  useEffect(() => {
    localStorage.setItem("shopProducts", JSON.stringify(products));
  }, [products]);

  const updateProduct = (id, updatedData) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedData } : p)),
    );
  };

  const addProduct = (newProduct) => {
    const id = Math.max(...products.map((p) => p.id), 0) + 1;
    setProducts([...products, { ...newProduct, id }]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ShopContext.Provider
      value={{ products, updateProduct, addProduct, deleteProduct }}
    >
      {children}
    </ShopContext.Provider>
  );
};
