import { Container, Row, Col } from "react-bootstrap";
import images from "./ImageImporter";
import styleMSO from "../my-style.module.scss";
// import * as Icon from "react-bootstrap-icons";
// import styleNav from "../my-style.module.scss";

function MainSectionOne() {
  return (
    <Container className={`${styleMSO.MSOContainer}`}>
      <Row>
        <Col xs={12} md={8} className="bg-primary">
          <Row>
            <Col md={8} className={`${styleMSO.imgParent} bg-warning`}>
              <img
                src={images[0]}
                alt="programmer"
                className={`${styleMSO.imgChild}`}
              />
            </Col>
            <Col
              md={4}
              className={`${styleMSO.imgParent} bg-secondary d-flex flex-column`}
            >
              <Col md className={`${styleMSO.imgParent} bg-warning flex-fill`}>
                <img
                  src={images[1]}
                  alt="ngopi bareng programmer"
                  className={`${styleMSO.imgChild}`}
                />
              </Col>
              <Col md className={`${styleMSO.imgParent} bg-success flex-fill`}>
                <img
                  src={images[2]}
                  alt="komputer"
                  className={`${styleMSO.imgChild}`}
                />
              </Col>
            </Col>
          </Row>
          <Row>
            <Col md className={`${styleMSO.imgParent} bg-info`}>
              <img
                src={images[3]}
                alt="meja pc"
                className={`${styleMSO.imgChild}`}
              />
            </Col>
            <Col md className={`${styleMSO.imgParent} bg-danger`}>
              <img
                src={images[4]}
                alt="kursi pc"
                className={`${styleMSO.imgChild}`}
              />
            </Col>
            <Col md className={`${styleMSO.imgParent} bg-primary`}>
              <img
                src={images[0]}
                alt="meja dan kursi pc"
                className={`${styleMSO.imgChild}`}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4} className="bg-success">
          xs=6 md=4
        </Col>
      </Row>
    </Container>
  );
}

export default MainSectionOne;
