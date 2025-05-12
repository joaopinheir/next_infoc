import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../../styles/Menu.module.css'


export default function Menu() {
  return (
    <Navbar expand="lg" bg= "dark"  data-bs-theme= "dark"className={`${styles.degradeMenu}`}>
      <Container>
        <Navbar.Brand href="/">Info 5C</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/esporte">esportes</Nav.Link>
            <NavDropdown title="react hook" id="basic-nav-dropdown">
              <NavDropdown.Item href="/usestate">useState</NavDropdown.Item>
              <NavDropdown.Item href="/useeffect"> UseEffect</NavDropdown.Item>
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

