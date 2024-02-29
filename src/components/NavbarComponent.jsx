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
import logo from "../assets/Hero pics/GREcyio_LIGHT__1_-removebg-preview.png"

function NavbarComponent() {
  const { cartItems } = useContext(CartContext);

  return (
    <Navbar className="head" expand="lg" bg="" data-bs-theme="dark" color="dark">
      <Container fluid className="head" >
        <Navbar.Brand as={Link} to="/">
          <img src={logo} width={150} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"  >
          <Nav
            className="me-auto my-2 my-lg-0 " id="topitems" data-bs-theme="dark" 
            style={{ maxHeight: "100px", textAlign:"center", display: "flex" }}
            navbarScroll
          >
            <Nav.Link  as={Link} to="/" style={{ fontSize: "18px", color: "#ffffff" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link  as={Link} to="/about">About Us</Nav.Link>
            <NavDropdown title="Become a seller" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/register" className="nav-link-black">
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
            <Button variant="outline-dark">Search</Button>
          </Form>
          <Nav.Link href="#action2">Add to Cart</Nav.Link>

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
