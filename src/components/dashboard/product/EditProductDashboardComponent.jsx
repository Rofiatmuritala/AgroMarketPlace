import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { ProductContext } from "../../../contexts/ProductContextProvider";
import { MdEdit } from "react-icons/md";

const EditProductDashboardComponent = ({ product }) => {
  // This is coming from the EditProduct Context
  const { editProduct } = useContext(ProductContext);

  const [showEditProductModal, setShowEditProductModal] = useState(false);

  const handleCloseEditProduct = () => setShowEditProductModal(false);
  const handleShowEditProduct = () => setShowEditProductModal(true);

  const [name, setName] = useState(product.name);
  const [image, setImage] = useState(product.image);
  const [actualPrice, setActualPrice] = useState(product.actualPrice);
  const [sellingPrice, setSellingPrice] = useState(product.sellingPrice);
  const [qtyInStock, setQtyInStock] = useState(product.qtyInStock);

  const editProductSubmitHandler = (e) => {
    e.preventDefault(); // This code prevent the website from reloading when someone clicks on the register button

    const editedProduct = {
      id: product.id,
      seller: product.seller,
      name: name,
      image: image,
      actualPrice: actualPrice,
      sellingPrice: sellingPrice,
      qtyInStock: qtyInStock,
    };

    // This is coming from the editProduct Context
    editProduct(product.id, editedProduct);

    // Close the modal
    setShowEditProductModal(false);

    // Notify the seller that thet've successfully registered
    toast.success("Product updated successfully");
  };

  return (
    <>
      {/* Edit product Modal */}
      {/* This is the button to click and open the modal */}
      <button
        className="bg-blue-600 px-3 py-2 rounded-lg text-white mr-1"
        onClick={handleShowEditProduct}
      >
        <MdEdit />
      </button>
      {/* This is the edit product modal */}
      <Modal show={showEditProductModal} onHide={handleCloseEditProduct}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editProductSubmitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <img src={image} alt="product image" width={100} height={100} />

            <Form.Group className="mb-3">
              <Form.Label>Actual price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter actual price"
                value={actualPrice}
                onChange={(e) => setActualPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Selling price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter selling price"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantity In Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Quantity In Stock"
                value={qtyInStock}
                onChange={(e) => setQtyInStock(e.target.value)}
              />
            </Form.Group>

            <button
              className="bg-orange-600 px-3 py-2 rounded-lg text-white"
              type="submit"
            >
              Update Product
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditProductDashboardComponent;
