import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styleNC from "../my-style.module.scss";

function NavigationChild() {
  return (
    <>
      <Navbar>
        <Container className={`${styleNC.borderNC}`}>
          <Nav className="me-auto">
            <Nav.Link href="#videos" className={`${styleNC.navigasiLink}`}>
              Videos
            </Nav.Link>
            <span className="text-white d-flex align-items-center">/</span>
            <Nav.Link href="#people" className={`${styleNC.navigasiLink}`}>
              People
            </Nav.Link>
            <span className="text-white d-flex align-items-center">/</span>
            <Nav.Link href="#documents" className={`${styleNC.navigasiLink}`}>
              Documents
            </Nav.Link>
            <span className="text-white d-flex align-items-center">/</span>
            <Nav.Link href="#events" className={`${styleNC.navigasiLink}`}>
              Events
            </Nav.Link>
            <span className="text-white d-flex align-items-center">/</span>
            <Nav.Link href="#communities" className={`${styleNC.navigasiLink}`}>
              Communities
            </Nav.Link>
            <span className="text-white d-flex align-items-center">/</span>
            <Nav.Link href="#favorites" className={`${styleNC.navigasiLink}`}>
              Favorites
            </Nav.Link>
            <span className="text-white d-flex align-items-center">/</span>
            <Nav.Link href="#channels" className={`${styleNC.navigasiLink}`}>
              Channels
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationChild;
