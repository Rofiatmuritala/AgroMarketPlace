import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent() {
  return (
    <Navbar className="" expand="lg" bg="success" data-bs-theme="dark" >
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <NavDropdown title="Become a seller" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Create and account</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Seller's Dashboard
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Log out
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Account
            </Nav.Link>
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

        </Navbar.Collapse>
      </Container>
    </Navbar>

   
);
}

export default NavbarComponent;
