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
    setProducts([newProduct, ...products]);
  };

  const editProduct = (productId, editedProduct) => {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );

    // Array destructing, copy what was in the products and add the new product to it.
    setProducts([editedProduct, ...filteredProducts]);
  };

  const deleteProduct = (productId) => {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );

    // Array destructing, copy what was in the products .
    setProducts([...filteredProducts]);
  };

  const sellerProducts = (sellerEmail) => {
    const filteredProducts = products.filter(
      (product) => product.seller === sellerEmail
    );

    return filteredProducts;
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    // Provide the product information to other components in the application
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        editProduct,
        deleteProduct,
        sellerProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
