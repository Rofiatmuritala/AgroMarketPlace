import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { PiShoppingCartFill } from "react-icons/pi";
import { CartContext } from "../contexts/CartContextProvider";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const { cartItems } = useContext(CartContext);

  return (
    <Navbar className="" expand="lg" bg="success" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src="./src/assets/pic4.jpg" width={50} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <NavDropdown title="Become a seller" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/register">
                Create an account
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dashboard">
                Seller's Dashboard
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Log out</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Account</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link as={Link} to="/cart">
            <div className="cart">
              <PiShoppingCartFill className="cart-icon" />
              {/* Display the number of items in cart only if the cart is more than zero or 1 and above */}
              {cartItems.length > 0 && (
                <div className="cart-count">{cartItems.length}</div>
              )}
            </div>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
