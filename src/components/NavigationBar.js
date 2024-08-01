import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";
import logo from '../assets/logo.png'

function NavigationBar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home"><img src={logo} alt="company logo"/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a className="navbar-qrcode" href="/mission">
              Mission
            </a>
          </Navbar.Text>
          <Navbar.Text>
            <a className="navbar-qrcode" href="/qrscan">
              Scan
            </a>
          </Navbar.Text>
          <Navbar.Text>
            <a className="navbar-qrcode" href="/qrcode">
              QR
            </a>
          </Navbar.Text>
          <Navbar.Text>
            Logged as: <a href="/profile">User</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
