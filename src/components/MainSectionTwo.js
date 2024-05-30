import { Container, Row, Col } from "react-bootstrap";
import images from "./image_management/ImageImporterMainTwo";
import MainSectionThree from "./MainSectionThree";
import styleMST from "../my-style.module.scss";

function MainSectionTwo() {
  return (
    <Container className={`${styleMST.MSTContainer}`}>
      <Row>
        {/* People */}
        <Col xs={12} xl={8}>
          <Row>
            <Col
              xl={8}
              style={{
                paddingRight: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3 style={{ color: "#f5e2cf", display: "inline-block" }}>
                People
              </h3>
              <span style={{ color: "#f5e2cf" }}>View All</span>
            </Col>
          </Row>
          <Row className={`${styleMST.barisSatu}`}>
            <Col xl={8} className={`${styleMST.imgParent} position-relative`}>
              <img
                src={images[0]}
                alt="programmer"
                className={`${styleMST.imgChild}`}
              />
              <span className={styleMST.spanPembungkus}>
                <h3>Waseem Arshad</h3>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>User interface</span>
                  <span>187867 views</span>
                </span>
              </span>
            </Col>
            <Col xl={4} className={`${styleMST.grandMa} d-flex flex-column`}>
              <Col
                xl
                className={`${styleMST.imgParent} position-relative flex-fill`}
              >
                <img
                  src={images[1]}
                  alt="ngopi bareng programmer"
                  className={`${styleMST.imgChild}`}
                />
                <span className={styleMST.spanPembungkus}>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>Michael Collip</span>
                    <span>27546 views</span>
                  </span>
                </span>
              </Col>
              <Col
                xl
                className={`${styleMST.imgParent} position-relative flex-fill`}
              >
                <img
                  src={images[2]}
                  alt="komputer"
                  className={`${styleMST.imgChild}`}
                />
                <span className={styleMST.spanPembungkus}>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>Mark Zullic</span>
                    <span>9785 views</span>
                  </span>
                </span>
              </Col>
            </Col>
          </Row>
          <Row className={`${styleMST.barisDua}`}>
            <Col xl className={`${styleMST.imgParent} position-relative`}>
              <img
                src={images[3]}
                alt="meja pc"
                className={`${styleMST.imgChild}`}
              />
              <span className={styleMST.spanPembungkus}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Wistom Zowski</span>
                  <span>10978 views</span>
                </span>
              </span>
            </Col>
            <Col xl className={`${styleMST.imgParent} position-relative`}>
              <img
                src={images[4]}
                alt="kursi pc"
                className={`${styleMST.imgChild}`}
              />
              <span className={styleMST.spanPembungkus}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Lawmon kyok</span>
                  <span>15972 views</span>
                </span>
              </span>
            </Col>
            <Col xl className={`${styleMST.imgParent} position-relative`}>
              <img
                src={images[5]}
                alt="meja dan kursi pc"
                className={`${styleMST.imgChild}`}
              />
              <span className={styleMST.spanPembungkus}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Brandon hawold</span>
                  <span>22456 views</span>
                </span>
              </span>
            </Col>
          </Row>
          {/* Main Section Three */}
          <MainSectionThree />
        </Col>
        {/* Channels */}
        <Col xs={12} xl={4} className={`${styleMST.peopleCol}`}>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3 style={{ color: "#f5e2cf", display: "inline-block" }}>
                Channels
              </h3>
              <span style={{ color: "#f5e2cf" }}>Browse all channel</span>
            </Col>
          </Row>
          <div
            style={{
              width: "100%",
              height: "3px",
              background: "#f5e2cf",
              marginBottom: "10px",
            }}
          ></div>
          <div
            className="d-flex flex-column row-gap-3"
            style={{
              width: "100%",
              height: "56rem",
              overflowY: "auto",
              overflowX: "hidden",
              scrollbarColor: "#f5e2cf #953e46",
              scrollbarWidth: "thin",
            }}
          >
            <Row className="d-flex align-items-center">
              <Col xs={6} className={`${styleMST.colGanjil}`}>
                <img
                  src={images[5]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
              <Col xs={6} className={`${styleMST.colGenap}`}>
                <img
                  src={images[2]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
            </Row>
            <Row className="d-flex align-items-center">
              <Col xs={6} className={`${styleMST.colGanjil}`}>
                <img
                  src={images[3]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
              <Col xs={6} className={`${styleMST.colGenap}`}>
                <img
                  src={images[0]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
            </Row>
            <Row className="d-flex align-items-center">
              <Col xs={6} className={`${styleMST.colGanjil}`}>
                <img
                  src={images[2]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
              <Col xs={6} className={`${styleMST.colGenap}`}>
                <img
                  src={images[1]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
            </Row>
            <Row className="d-flex align-items-center">
              <Col xs={6} className={`${styleMST.colGanjil}`}>
                <img
                  src={images[0]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
              <Col xs={6} className={`${styleMST.colGenap}`}>
                <img
                  src={images[3]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
            </Row>
            <Row className="d-flex align-items-center">
              <Col xs={6} className={`${styleMST.colGanjil}`}>
                <img
                  src={images[1]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
              <Col xs={6} className={`${styleMST.colGenap}`}>
                <img
                  src={images[5]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
            </Row>
            <Row className="d-flex align-items-center">
              <Col xs={6} className={`${styleMST.colGanjil}`}>
                <img
                  src={images[4]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
              <Col xs={6} className={`${styleMST.colGenap}`}>
                <img
                  src={images[2]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MainSectionTwo;
