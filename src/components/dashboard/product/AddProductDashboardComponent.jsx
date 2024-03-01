import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ProductContext } from "../../../contexts/ProductContextProvider";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const AddProductDashboardComponent = () => {
  // This is coming from the addProduct Context
  const { addProduct } = useContext(ProductContext);

  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const handleCloseAddProduct = () => setShowAddProductModal(false);
  const handleShowAddProduct = () => setShowAddProductModal(true);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [actualPrice, setActualPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [qtyInStock, setQtyInStock] = useState("");

  const addProductSubmitHandler = (e) => {
    e.preventDefault(); // This code prevent the website from reloading when someone clicks on the register button

    const id = uuidv4();

    const loggedInSellerObject = JSON.parse(
      localStorage.getItem("loginSeller")
    );

    const newProduct = {
      id: id,
      seller: loggedInSellerObject.email,
      name: name,
      image: image,
      actualPrice: actualPrice,
      sellingPrice: sellingPrice,
      qtyInStock: qtyInStock,
    };

    // This is coming from the addProduct Context
    addProduct(newProduct);

    // Close the modal
    setShowAddProductModal(false);

    // Notify the seller that thet've successfully registered
    toast.success("Product added successfully");
  };
  return (
    <>
      {/* Add product Modal */}
      {/* This is the button to click and open the modal */}
      <button
        className="bg-orange-600 px-3 py-2 rounded-lg text-white"
        onClick={handleShowAddProduct}
      >
        Add Product
      </button>
      {/* This is the add product modal */}
      <Modal show={showAddProductModal} onHide={handleCloseAddProduct}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addProductSubmitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product image"
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Actual price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter actual price"
                onChange={(e) => setActualPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Selling price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter selling price"
                onChange={(e) => setSellingPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantity In Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Quantity In Stock"
                onChange={(e) => setQtyInStock(e.target.value)}
              />
            </Form.Group>

            <button
              className="bg-orange-600 px-3 py-2 rounded-lg text-white"
              type="submit"
            >
              Save Product
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddProductDashboardComponent;
