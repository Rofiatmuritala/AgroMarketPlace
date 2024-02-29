import React, { createContext, useEffect, useState } from "react";

// Creating product context, this stores the glabal information (data) about the cart
export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(
    localStorage.getItem("products") === null
      ? []
      : JSON.parse(localStorage.getItem("products"))
  );

  const addProduct = (newProduct) => {
    // Array destructing, copy what was in the products and add the new product to it.
    setProducts([...products, newProduct]);
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    // Provide the product information to other components in the application
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
