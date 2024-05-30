import { Col, Container, Row, Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import styleF from "../my-style.module.scss";

function Footer() {
  return (
    <Container
      style={{
        marginTop: "6rem",
        padding: "2rem 0",
        borderTop: "2px solid #f5e2cf",
      }}
    >
      <Row>
        <Col className={`${styleF.footerIcon}`} style={{ paddingLeft: "10px" }}>
          <Icon.Twitter className={`${styleF.icon}`} />
          <Icon.Linkedin className={`${styleF.icon}`} />
          <Icon.Facebook className={`${styleF.icon}`} />
        </Col>
      </Row>
      <Row>
        <Col
          className={`${styleF.borderNC} my-4`}
          style={{ padding: 0, overflowX: "auto", border: "none" }}
        >
          <Nav className="m-auto">
            <Nav.Link
              href="#"
              className={`${styleF.navigasiLink}`}
              style={{ paddingLeft: "10px" }}
            >
              About
            </Nav.Link>
            <span className="text-white d-flex align-items-center">/</span>
            <Nav.Link href="#" className={`${styleF.navigasiLink}`}>
              For Business
            </Nav.Link>
            <span className="text-white d-flex align-items-center">/</span>
            <Nav.Link href="#" className={`${styleF.navigasiLink}`}>
              Suggestion
            </Nav.Link>
            <span className="text-white d-flex align-items-center">/</span>
            <Nav.Link href="#" className={`${styleF.navigasiLink}`}>
              Help & FAQ
            </Nav.Link>
            <span className="text-white d-flex align-items-center">/</span>
            <Nav.Link href="#" className={`${styleF.navigasiLink}`}>
              Contacs
            </Nav.Link>
            <span className="text-white d-flex align-items-center">/</span>
            <Nav.Link href="#" className={`${styleF.navigasiLink}`}>
              Pricing
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            color: "#f5e2cf",
            display: "flex",
            alignItems: "center",
            paddingLeft: "10px",
          }}
        >
          <Icon.CCircle style={{ marginRight: ".4rem" }} /> Copyright 2024.
        </Col>
      </Row>
      <Row>
        <Col style={{ paddingLeft: "0px" }}>
          <Nav
            className={`${styleF.borderNC} me-auto`}
            style={{ overflowX: "auto", border: "none" }}
          >
            <Nav.Link
              href="#"
              className={`${styleF.navigasiLink}`}
              style={{ paddingLeft: "10px" }}
            >
              Privacy
            </Nav.Link>
            <span className="text-white d-flex align-items-center">/</span>
            <Nav.Link href="#" className={`${styleF.navigasiLink}`}>
              Terms
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
