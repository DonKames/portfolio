import { Button, ButtonGroup, Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown, SplitButton } from "react-bootstrap";


export const NavBar = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">KaMEs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Dropdown as={ButtonGroup}>
              <Button variant="dark">Portafolio</Button>

              <Dropdown.Toggle
                split
                variant="dark"
              />

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
