<<<<<<< HEAD
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
=======
import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
>>>>>>> da5893765b3aaad13d3133a115ae0f4501ae41d9

function DashboardComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<<<<<<< HEAD
    <div>
        <>
        <Button variant="primary" onClick={handleShow}>
        Add a product as a Seller
=======
    <Container>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
>>>>>>> da5893765b3aaad13d3133a115ae0f4501ae41d9
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<<<<<<< HEAD

=======
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              {/* saying that what the seller is typing should be saved as fullname */}
              <Form.Control
                type="text"
                placeholder="Team Ruby"
                // onChange={(e) => setFullName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                // onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
>>>>>>> da5893765b3aaad13d3133a115ae0f4501ae41d9
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
<<<<<<< HEAD
        </>
    </div>
  )
=======
    </Container>
  );
>>>>>>> da5893765b3aaad13d3133a115ae0f4501ae41d9
}

export default DashboardComponent;
