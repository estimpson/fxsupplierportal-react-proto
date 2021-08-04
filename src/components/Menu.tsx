import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

export function MainMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/home">
          <Navbar.Brand>Aztec Supplier Portal</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/generate-inventory">
              <Nav.Link>Generate Inventory</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/reprint-labels">
              <Nav.Link>Reprint Labels</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/generate-asn">
              <Nav.Link>Generate ASN</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Supplier Settings" id="basic-nav-dropdown">
              <LinkContainer to="/supplier-settings">
                <NavDropdown.Item>Settings</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
