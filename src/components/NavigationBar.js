import {
  Container,
  Nav,
  Navbar,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import styleNav from "../my-style.module.scss";

function NavBar() {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      data-bs-theme="dark"
      className={`${styleNav.transparan}`}
    >
      <Container className="gap-3">
        <Navbar.Brand href="#home">SocialNetwork</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="gap-3">
          <InputGroup
            style={{
              backgroundColor: "#f5e2cf",
              border: "none",
              borderRadius: 0,
            }}
          >
            <Form.Control
              placeholder="Find..."
              style={{
                backgroundColor: "#f5e2cf",
                border: "none",
                borderRadius: 0,
              }}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              style={{
                border: "none",
                borderRadius: 0,
              }}
            >
              <Icon.Search color="#953e46" />
            </Button>
          </InputGroup>
          <Nav className="m-auto align-items-center gap-3">
            <Button
              variant="outline-secondary"
              id="button-addon1"
              className="d-flex align-items-center"
              style={{
                backgroundColor: "#f5e2cf",
                border: "none",
                borderRadius: 0,
              }}
            >
              <Icon.ArrowUp color="#953e46" style={{ marginRight: "5px" }} />
              Upload
            </Button>
            <Button
              variant="outline-secondary"
              id="button-addon1"
              className=""
              style={{
                backgroundColor: "#f5e2cf",
                border: "none",
                borderRadius: 0,
                height: "200%",
              }}
            >
              <Icon.PersonFill color="#953e46" style={{ marginRight: "5px" }} />
            </Button>
            <span style={{ color: "#f4e3cf", lineHeight: 1.2 }}>
              <span style={{ fontSize: "1.3rem" }}>Waseem</span> <br />
              Arshad
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
