import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { ProductContext } from "../../../contexts/ProductContextProvider";
import { MdDelete } from "react-icons/md";

const DeleteProductDashboardComponent = ({ productId }) => {
  // This is coming from the deleteProduct Context
  const { deleteProduct } = useContext(ProductContext);

  const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);

  const handleCloseDeleteProduct = () => setShowDeleteProductModal(false);
  const handleShowDeleteProduct = () => setShowDeleteProductModal(true);

  const deleteProductSubmitHandler = (e) => {
    e.preventDefault(); // This code prevent the website from reloading when someone clicks on the register button

    // This is coming from the DeleteProduct Context
    deleteProduct(productId);

    // Close the modal
    setShowDeleteProductModal(false);

    // Notify the seller that thet've successfully registered
    toast.success("Product deleted successfully");
  };

  return (
    <>
      {/* Delete product Modal */}
      {/* This is the button to click and open the modal */}
      <button
        className="bg-red-600 px-3 py-2 rounded-lg text-white"
        onClick={handleShowDeleteProduct}
      >
        <MdDelete />
      </button>
      {/* This is the Delete product modal */}
      <Modal show={showDeleteProductModal} onHide={handleCloseDeleteProduct}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are you sure you want to delete this product?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={deleteProductSubmitHandler}>
            <button
              className="bg-red-600 px-3 py-2 rounded-lg text-white"
              type="submit"
            >
              Delete Product
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteProductDashboardComponent;
