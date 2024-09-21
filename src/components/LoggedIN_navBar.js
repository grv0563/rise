import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.png";
import "./NavigationBar.css";

function LoggedIN_navBar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/dashboard">
          <img className="company-logo" src={logo} alt="company logo" />
        </Navbar.Brand>
        <Navbar.Brand href="/dashboard">
          <h5>HealthChain </h5>
          <h6>Network</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ textAlign: "center" }}>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" style={{ textAlign: "center" }}>
                {/* <Nav.Link href="/qrcode">QR</Nav.Link>
            <Nav.Link href="/qrscan">Scan</Nav.Link> */}
                <Nav.Link href={props.urlName}>QR</Nav.Link>
                <Nav.Link href="/qrscan">Scan</Nav.Link>
                <Nav.Link href="/learn">Learn</Nav.Link>
                <NavDropdown title="Company" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="/mission">Mission</NavDropdown.Item>
                  <NavDropdown.Item href="/vision">Vision</NavDropdown.Item>
                  <NavDropdown.Item href="/roadmap">RoadMap</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/aboutus">About us</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Nav>
          <Nav style={{ textAlign: "center" }}>
            <Navbar.Text>
              Signed in as: <a href="/profile">{props.userName}</a>
            </Navbar.Text>
            <Nav.Link eventKey={2} href="/signout">
              <button className="btn">Signout</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LoggedIN_navBar;
