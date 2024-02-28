import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function DashboardComponent() {
  return (
    <div>
        <>
        <Button variant="primary" onClick={handleShow}>
        Add a product as a Seller
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    </div>
  )
}

export default DashboardComponent